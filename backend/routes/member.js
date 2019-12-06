const express = require('express')
const router = express.Router()

const MemberService = require('../services/member-service')
const BookService = require('../services/book-service')
// const isLoggedIn = require('../middleware/is-logged-in')

// const middleware = (req, res) => {
//     console.log('I won\'t allow access to this')
//     res.send('no')
// }

// router.get('/*/json', isLoggedIn)

router.get('/', async (req, res) => {
    res.send(await MemberService.findAll())
})

router.get('/all', async (req, res) => {
    const members = await MemberService.findAll()
    res.render('list', {items: members})
})

router.get('/all/json', async (req, res) => {
    const members = await MemberService.findAll()
    res.send(members)
})

router.get('/:id', async (req, res) => {
    const member = await MemberService.find(req.params.id)
    // if (!user) res.status(404)
    res.render('data', {data: member})
   
})

router.get('/:id/json', async (req, res) => {
    const member = await MemberService.find(req.params.id)
    if (!member) res.status(404)
    res.send(member)
   
})

router.get('/:id/library', async (req, res) => {
    const member = await MemberService.find(req.params.id)
    const library = member.library
    res.render('library', { member:member, books: library})
})

router.post('/', async (req, res) => {
    const member = await MemberService.add(req.body)
    res.send(member)
})

router.delete('/:id', async (req, res) => {
    await MemberService.del(req.params.id)
    res.send('ok!')
})

router.post('/:id/followers', async (req, res) => {
    const member= await MemberService.find(req.params.id)
    const follower = await MemberService.find(req.body.followerId)

    await MemberService.followMember(follower, member)
    res.send({follower, member})
})

router.post('/:id/following', async (req, res) => {
    const follower= await MemberService.find(req.params.id)
    const member = await MemberService.find(req.body.member)
    await MemberService.followMember(follower, member)
    res.send({follower, member})
})

router.post('/:id/library', async (req, res) => {
    const member = await MemberService.find(req.params.id)
    const book = await BookService.find(req.body.book)
    await MemberService.addBook(member, book) 
    res.send(member)
    //res.send({member, library, book})
})

router.post('/:id/likes', async (req, res) => {
    const member = await MemberService.find(req.params.id)
    const book = await BookService.find(req.body.book)
    await MemberService.likeBook(member, book) 
    res.send(member)
    
})

router.post('/:id/comments', async (req, res) => {
    const member = await MemberService.find(req.params.id)
    const book = await BookService.find(req.body.book)
    const text = 'A must read'
    await MemberService.commentOnBook(member, book, text) 
    res.send(member)
    
})
module.exports = router