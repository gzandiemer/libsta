const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const memberRouter = require('./routes/member')
const bookRouter = require('./routes/book')
const authRouter = require('./routes/user')
const passport = require('passport')
require('./mongo-connection')

//Initialize the app
const app = express()
app.use(cors())

app.set('view engine', 'pug')
app.use(bodyParser.json())

// check what for the below urlencoded is 
//Middlewares
app.use(bodyParser.urlencoded({
    extended: false
}))

app.use('/member', memberRouter)
app.use('/book', bookRouter)
app.use('/api/users', authRouter)
app.use(passport.initialize())
require('./config/passport')(passport)

app.get('/', (req, res) => {
    res.render('index')
})


module.exports = app