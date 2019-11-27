import test from 'ava'
import request from 'supertest'
import app from '../app'
import { cachedDataVersionTag } from 'v8'

test('Create new member', async t => {
  t.plan(8)
  const memberToCreate = {
    userName: 'gzan',
    fullName: 'Gunisigi Zan',
    library: [],
    likes: [],
    followers: [],
    following: [],
    comments: []
  }

  const res = await request(app)
    .post('/member')
    .send(memberToCreate)

  //checking for server response status success
  t.is(res.status, 200)

  //comparing the created member's data 
  t.is(res.body.userName, memberToCreate.userName)
  t.is(res.body.fullName, memberToCreate.fullName)
  t.deepEqual(res.body.library, memberToCreate.library)
  t.deepEqual(res.body.likes, memberToCreate.likes)
  t.deepEqual(res.body.followers, memberToCreate.followers)
  t.deepEqual(res.body.following, memberToCreate.following)
  t.deepEqual(res.body.comments, memberToCreate.comments)
})

test('Fetch a member', async t => {
  t.plan(3)
  const memberToCreate = {
    userName: 'jenny',
    fullName: 'Jennifer Adams',
    library: [],
    likes: [],
    followers: [],
    following: [],
    comments: []
  }

  //first create a member
  const jennyUserCreated = (await request(app)
    .post('/member')
    .send(memberToCreate)).body

  //fetch the member we just created
  const fetchRes = await request(app).get(`/member/${jennyUserCreated._id}`)
  //checking for server response status success
  //this endpoint is rendering into HTML
  t.is(fetchRes.status, 200)

  const fetchResJson = await request(app).get(`/member/${jennyUserCreated._id}/json`)
  // checking for server response status success
  t.is(fetchResJson.status, 200)

  //this endpoint is responding with the user detail JSON data
  //compare the fetched user with created user
  const jennyUserFetched = fetchResJson.body
  t.deepEqual(jennyUserFetched, jennyUserCreated)
})

test('Delete a member', async t => {
  t.plan(4)

  //first create a member
  const memberToCreate = {
    userName: 'sam',
    fullName: 'Samantha Wilson',
    library: [],
    likes: [],
    followers: [],
    following: [],
    comments: []
  }

  const samUserCreated = (await request(app)
    .post('/member')
    .send(memberToCreate)).body

  //delete the member
  const deleteRes = await request(app).delete(`/member/${samUserCreated._id}`)
  //checking for server response status success
  t.is(deleteRes.status, 200)
  t.is(deleteRes.ok, true)

  //trying to render the detail page for the deleted user
  const fetch = await request(app).get(`/member/${samUserCreated._id}`)
  //checking for server response status - page not found 404
  t.is(fetch.status, 404)
  //trying to fetch the JSON data of the deleted user
  const fetchJson = await request(app).get(`/member/${samUserCreated._id}/json`)
  //checking for server respinse status - page not found 404
  t.is(fetchJson.status, 404)

})

test('Get list of members', async t => {
  t.plan(4)

  const memberToCreate = {
    userName: 'sam',
    fullName: 'Samantha Wilson',
    library: [],
    likes: [],
    followers: [],
    following: [],
    comments: []
  }

  const _ = await request(app)
    .post('/member')
    .send(memberToCreate)

  const res = await request(app).get('/member/all')
  t.is(res.status, 200)

  const jsonRes = await request(app).get('/member/all/json')
  t.is(jsonRes.status, 200)

  t.true(Array.isArray(jsonRes.body), 'Body should be an array')
  t.true(jsonRes.body.length > 0)

})

test('Member can follow a member', async t => {
  //create a follower
  const samUser = {
    userName: 'sam',
    fullName: 'Samantha Wilson',
    library: [],
    likes: [],
    followers: [],
    following: [],
    comments: []
  }
  const createdFollower = (await request(app)
    .post('/member')
    .send(samUser)).body

    //create a member
  const jennyUser = {
    userName: 'jenny',
    fullName: 'Jennifer Jackson',
    library: [],
    likes: [],
    followers: [],
    following: [],
    comments: []
  }
  const createdMember = (await request(app)
    .post('/member')
    .send(jennyUser)).body



  const followMemberRes = await request(app)
    .post(`/member/${createdMember._id}/followers`)
    .send({ follower: createdFollower._id })
    // .post(`/member/${createdFollower._id}/following`)
    // .send({ member: createdMember._id })

  t.is(followMemberRes.status, 200)
  
  const followerAltered = followMemberRes.body.follower
  const memberAltered = followMemberRes.body.member
 
  //fetch the follower and the member
  const fetchRes = await request(app).get(`/member/${memberAltered._id}`)
  // t.is(fetchRes.status, 200)
  const fetchResJson = await request(app).get(`/member/${memberAltered._id}/json`)
  // t.is(fetchResJson.status, 200)
  const alteredMemberFetched = fetchResJson.body
  const fetchFollowerRes = await request(app).get(`/member/${followerAltered._id}`)
  // t.is(fetchFollowerRes.status, 200)
  const fetchFollowerResJson = await request(app).get(`/member/${followerAltered._id}/json`)
  // t.is(fetchFollowerResJson.status, 200)
  const alteredFollowerFetched = fetchFollowerResJson.body
  
  // t.is(followerAltered.following[0]._id, memberAltered._id)
  // t.is(memberAltered.followers[0]._id, followerAltered._id)

  t.is(alteredFollowerFetched.following[0]._id, alteredMemberFetched._id)
  t.is(alteredMemberFetched.followers[0]._id, alteredFollowerFetched._id)

  t.is(alteredFollowerFetched.following[0].userName, alteredMemberFetched.userName)
  t.is(alteredMemberFetched.followers[0].userName, alteredFollowerFetched.userName)

  t.is(alteredFollowerFetched.following[0].fullName, alteredMemberFetched.fullName)
  t.is(alteredMemberFetched.followers[0].fullName, alteredFollowerFetched.fullName)
  // t.deepEqual(followerAltered.following[0], memberAltered)
  // t.deepEqual(memberAltered.followers[0], followerAltered)

  // t.deepEqual(alteredFollowerFetched.following[0], alteredMemberFetched)
  // t.deepEqual(alteredMemberFetched.followers[0], alteredFollowerFetched)

  t.notDeepEqual(followerAltered, createdFollower)
  t.notDeepEqual(memberAltered, createdMember)

})

test('Member can add a book', async t => {
  const samUser = {
    userName: 'sam',
    fullName: 'Samantha Wilson',
    library: [],
    likes: [],
    followers: [],
    following: [],
    comments: []
  }

  const createdMember = (await request(app)
    .post('/member')
    .send(samUser)).body

  const iq84Book = {
    title: 'iq84',
    authorName: 'Haruki Murakami',
    language: 'polish',
    pubDate: 2016,
    owner: samUser._id,
    likers: [],
    comments: [],
    booked: false,
  }


  const createdBook = (await request(app)
    .post('/book')
    .send(iq84Book)).body

  const addBookRes = await request(app)
    .post(`/member/${createdMember._id}/library`)
    .send({ book: createdBook._id })

  t.is(addBookRes.status, 200)

  const memberAltered = addBookRes.body

  t.is(memberAltered.library[0]._id, createdBook._id)
  t.deepEqual(memberAltered.library[0], createdBook)
  t.notDeepEqual(memberAltered, createdMember)

})


test('Member can like a book', async t => {
  const samUser = {
    userName: 'sam',
    fullName: 'Samantha Wilson',
    library: [],
    likes: [],
    followers: [],
    following: [],
    comments: []
  }

  const createdMember = (await request(app)
    .post('/member')
    .send(samUser)).body

  const iq84Book = {
    title: 'iq84',
    authorName: 'Haruki Murakami',
    language: 'polish',
    pubDate: 2016,
    owner: samUser._id,
    likers: [],
    comments: [],
    booked: false,
  }



  const createdBook = (await request(app)
    .post('/book')
    .send(iq84Book)).body

  const likeBookRes = await request(app)
    .post(`/member/${createdMember._id}/likes`)
    .send({ book: createdBook._id })

  t.is(likeBookRes.status, 200)

  const memberAltered = likeBookRes.body

  t.is(memberAltered.likes[0]._id, createdBook._id)
  t.deepEqual(memberAltered.likes[0], createdBook)
  t.notDeepEqual(memberAltered, createdMember)

})

