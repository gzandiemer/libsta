const express = require('express')
const router = express.Router()

const MemberService = require('../services/member-service')
const BookService = require('../services/book-service')

router.get('/all', async (req, res) => {
    const users = await MemberService.findAll()
    res.render('list', {items: users})
})

router.get('/all/json', async (req, res) => {
    const users = await MemberService.findAll()
    res.send(users)
})

router.get('/:id', async (req, res) => {
    const user = await MemberService.find(req.params.id)
    if (!user) res.status(404)
    res.render('data', {data: user})
   
})

router.get('/:id/json', async (req, res) => {
    const user = await MemberService.find(req.params.id)
    if (!user) res.status(404)
    res.send(user)
   
})

router.get('/:id/library', async (req, res) => {
    const user = await MemberService.find(req.params.id)
    const library = user.library
    res.render('library', { member:user, books: library})
})

router.post('/', async (req, res) => {
    const user = await MemberService.add(req.body)
    res.send(user)
})

router.delete('/:id', async (req, res) => {
    const user = await MemberService.del(req.params.id)
    res.send(user)
})

router.post('/:id/followers', async (req, res) => {
    const member= await MemberService.find(req.params.id)
    const follower = await MemberService.find(req.body.follower)
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