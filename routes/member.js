const express = require('express')
const router = express.Router()

const MemberService = require('../services/member-service')
const BookService = require('../services/book-service')

router.get('/all', async (req, res) => {
    const users = await MemberService.findAll()
    //change in views book with booklist
    res.render('list', {items: users})
})

router.get('/:id', async (req, res) => {
    const user = await MemberService.find(req.params.id)
    res.render('data', {data: user})
   
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
    const user = await MemberService.find(req.params.id)
    const follower = await MemberService(req.body.follower)
    await MemberService.followMember(follower, user)
    res.send({follower, user})
})

router.post('/:id/followings', async (req, res) => {
    const user = await MemberService.find(req.params.id)
    const followed = await MemberService(req.body.follower)
    await MemberService.followMember(user, followed)
    res.send({user, followed})
})

router.post('/:id/library/:bookid', async (req, res) => {
    const member = await MemberService.find(req.params.id)
    const book = await BookService.find(req.params.bookid)
    await LibraryService.addBook(member, book) 
    res.send({member, book})
})

module.exports = router