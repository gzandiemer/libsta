import test from 'ava'
import request from 'supertest'
import app from '../app'

test('Create new book', async t => {
  t.plan(7)

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

  const bookToCreate = {
    title: 'iq84',
    authorName: 'Haruki Murakami',
    language: 'polish',
    pubDate: 2016,
    owner: memberToCreate._id,
    likers: [],
    comments: [],
    booked: false,
  }

  const res = await request(app)
    .post('/book')
    .send(bookToCreate)

  t.is(res.status, 200)

  t.is(res.body.title, bookToCreate.title)
  t.is(res.body.authorName, bookToCreate.authorName)
  t.is(res.body.language, bookToCreate.language)
  t.is(res.body.pubDate, bookToCreate.pubDate)
  t.deepEqual(res.body.owner, bookToCreate.owner)
  t.is(res.body.booked, bookToCreate.booked)
})

test('Fetch a book', async t => {
  t.plan(3)

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

  const bookToCreate = {
    title: 'iq84',
    authorName: 'Haruki Murakami',
    language: 'polish',
    pubDate: 2016,
    owner: memberToCreate._id,
    likers: [],
    comments: [],
    booked: false,
  }

  const iq84BookCreated = (await request(app)
    .post('/book')
    .send(bookToCreate)).body

  const fetchRes = await request(app).get(`/book/${iq84BookCreated._id}`)

  t.is(fetchRes.status, 200)

  const fetchResJson = await request(app).get(`/book/${iq84BookCreated._id}/json`)

  t.is(fetchResJson.status, 200)
  const iq84BookFetched = fetchResJson.body
  t.deepEqual(iq84BookFetched, iq84BookCreated)
})

test('Delete a book', async t => {
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

  const samUserCreated = (await request(app)
    .post('/member')
    .send(memberToCreate)).body

  const bookToCreate = {
    title: 'iq84',
    authorName: 'Haruki Murakami',
    language: 'polish',
    pubDate: 2016,
    owner: memberToCreate._id,
    likers: [],
    comments: [],
    booked: false,
  }

  const _ = await request(app)
    .post('/book')
    .send(bookToCreate)

  const res = await request(app).get('/book/all')
  t.is(res.status, 200)

  const jsonRes = await request(app).get('/book/all/json')
  t.is(jsonRes.status, 200)
  t.true(Array.isArray(jsonRes.body), 'Body should be an array')
  t.true(jsonRes.body.length > 0)
})

test('Get list of books', async t => {
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

  const samUserCreated = (await request(app)
    .post('/member')
    .send(memberToCreate)).body

  const bookToCreate = {
    title: 'iq84',
    authorName: 'Haruki Murakami',
    language: 'polish',
    pubDate: 2016,
    owner: memberToCreate._id,
    likers: [],
    comments: [],
    booked: false,
  }

   const _ = await request(app)
     .post('/book')
     .send(bookToCreate)

  const res = await request(app).get('/book/all')
  t.is(res.status, 200)

  const jsonRes = await request(app).get('/book/all/json')
  t.is(jsonRes.status, 200)

  t.true(Array.isArray(jsonRes.body), 'Body should be an array')
  t.true(jsonRes.body.length > 0)

})


