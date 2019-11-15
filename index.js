const express = require('express')
const bodyParser = require('body-parser')

const memberRouter = require('./routes/member')
const bookRouter = require('./routes/book')

require('./mongo-connection')

const app = express()

app.set('view engine', 'pug')
app.use(bodyParser.json())

app.use('/member', memberRouter)
app.use('/book', bookRouter)

app.get('/', (req, res) => {
    res.render('index')
})

app.get('/register', async (req, res) => {
    res.render('register')
})

app.listen(3000, () => {
    console.log('server started')
})