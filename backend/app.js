const express = require('express')
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const cors = require('cors')
const memberRouter = require('./routes/member')
const bookRouter = require('./routes/book')
const passport = require('passport')
const LocalStrategy = require('passport-local').Strategy
const session = require('express-session')

require('./mongo-connection')

const app = express()
app.use(cors())

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))
app.use(session({ secret: 'AcWrDotphL', resave: true, saveUninitialized: true}))
app.use(passport.initialize())
app.use(passport.session())

app.use(cookieParser())
app.set('view engine', 'pug')
app.set('views', `${__dirname}/views`)

app.use('/member', memberRouter)
app.use('/book', bookRouter)

app.get('/', (req, res) => {
    res.render('index')
})



module.exports = app