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
    // render data or bookdata? check views
    res.render('data', {data: user})
    //axios.post('/member/1', {id:1, userName: 'gzan', fullName: 'Gunisigi Zan'}).then(console.log)
    //axios.post('/member/2', {id:2, userName: 'johnny', fullName: 'John Doe'}).then(console.log)
    //axios.post('/member/3', {id:3, userName: 'jan007', fullName: 'Jan Kowalsky'}).then(console.log)
    //axios.post('/member/4', {id:4, userName: 'memo', fullName: 'Mehmet Yilmaz'}).then(console.log)
    //axios.post('/member/5', {id:5, userName: 'alex', fullName: 'Alexandra Müller'}).then(console.log)
    //axios.post('/member/6', {id:6, userName: 'leo', fullName: 'Leonardo Rossi'}).then(console.log)
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
})

router.post('/:id/followings', async (req, res) => {
    const user = await MemberService.find(req.params.id)
    const followed = await MemberService(req.body.follower)
    await MemberService.followMember(user, followed)
})

router.post('/:memberid/:bookid', async (req, res) => {
    const member = await MemberService.find(req.params.memberid)
    const book = await BookService.find(req.params.bookid)
    await LibraryService.addBook(member, book) 
})

module.exports = router
