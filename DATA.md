axios.post('http://localhost:3000/member/5dcff1784185624d8dfaa4c6/followers', { userName: 'sam', fullName: 'Samantha Jackson'}).then(console.log)

TEST/MEMBER.JS - COMMENTONBOOK FUNCTION
// test('Member can comment on a book', async t => {
//     const samUser = {
//         userName: 'sam',
//         fullName: 'Samantha Wilson',
//         library: [],
//         likes: [],
//         followers: [],
//         following: [],
//         comments: []
//      }

//      const createdMember = (await request(app)
//         .post('/member')
//         .send(samUser)).body

//      const iq84Book = {
//         title: 'iq84',
//         authorName: 'Haruki Murakami',
//         language: 'polish',
//         pubDate: 2016,
//         owner: samUser._id,
//         likers: [],
//         comments: [],
//         booked: false,
//       }

      

//       const createdBook = (await request(app)
//         .post('/book')
//         .send(iq84Book)).body

//       const text = 'bla bla'
      
//       const commentOnBookRes = await request(app)
//         .post(`/member/${createdMember._id}/comments`)
//         .send({book: createdBook._id})
      
//       t.is(commentOnBookRes.status, 200)

//       const memberAltered = commentOnBookRes.body

//       t.is(memberAltered.comments[0]._id, createdBook._id)
//       t.deepEqual(memberAltered.comments[0], createdBook)
//       t.notDeepEqual(memberAltered, createdMember)

// })



 ROUTES/MEMBER.JS   
  async commentOnBook(member, book, text) {
        //work on this function
        member.comments.push(text)
        book.comments.push(text) 
        await member.save()
        await book.save()
        await text.save() 
    }