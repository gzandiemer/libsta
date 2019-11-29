const express = require('express')
const router = express.Router()

const MemberService = require('../services/member-service')
const BookService = require('../services/book-service')

router.get('/signup', async (req, res) => {
    //const users = await MemberService.findAll()
    //change in views book with booklist
    res.render('signup', {items: users})
})

router.get('/signup/json', async (req, res) => {
    const users = await MemberService.findAll()
    //change in views book with booklist
    res.send(users)
})

router.get('/signin', async (req, res) => {
    //const users = await MemberService.findAll()
    //change in views book with booklist
    res.render('signin', {items: users})
})

router.get('/signin/json', async (req, res) => {
    const users = await MemberService.findAll()
    //change in views book with booklist
    res.send(users)
})


module.exports = router