const express = require('express')
const router = express.Router()

const BookService = require('../services/book-service')

router.get('/all', async (req, res) => {
    const books = await BookService.findAll()
    //change in views book with booklist
    res.render('list', {items: books})
})

router.get('/all/json', async (req, res) => {
    const books = await BookService.findAll()
    //change in views book with booklist
    res.send(books)
})

router.get('/:id', async (req, res) => {
    const book = await BookService.find(req.params.id)
    if(!book) res.status(404)
    res.render('data', {data: book})
})

router.get('/:id/json', async (req, res) => {
    const book = await BookService.find(req.params.id)
    if(!book) res.status(404)
    res.send(book)
})

router.post('/', async (req, res) => {
    const book = await BookService.add(req.body)
    res.send(book)
})

router.delete('/:id', async (req, res) => {
    const book = await BookService.del(req.params.id)
    res.send(book)
})

module.exports = router
