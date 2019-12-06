const express = require('express')
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const cors = require('cors')
const memberRouter = require('./routes/member')
const bookRouter = require('./routes/book')
const authRouter = require('./routes/auth')
const passport = require('passport')
// const TwitterStrategy = require('passport-twitter').Strategy
const LocalStrategy = require('passport-local').Strategy
const session = require('express-session')
const User = require('./models/user')

require('./mongo-connection')

//Initialize the app
const app = express()
app.use(cors())

passport.serializeUser(User.serializeUser())
passport.deserializeUser(User.deserializeUser())

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))
app.use(session({ secret: 'AcWrDotphL', resave: true, saveUninitialized: true}))
app.use(passport.initialize())
app.use(passport.session())

// const { TWITTER_CONSUMER_KEY, TWITTER_CONSUMER_SECRET } = process.env

// if (TWITTER_CONSUMER_KEY && TWITTER_CONSUMER_SECRET) {
//     passport.use(new TwitterStrategy({
//         consumerKey: TWITTER_CONSUMER_KEY,
//         consumerSecret: TWITTER_CONSUMER_SECRET,
//         callbackURL: "http://localhost:3000/api/auth/twitter/callback"
//     }, (token, tokenSecret, profile, done) => {
//         User.findOneAndUpdate({ username: profile.username }, profile, { upsert: true, new: true }, done)
//     }))
// }
// passport.use(User.createStrategy())
passport.use(new LocalStrategy(User.authenticate()))

app.use(cookieParser())
app.set('view engine', 'pug')
app.set('views', `${__dirname}/views`)

app.use('/member', memberRouter)
app.use('/book', bookRouter)
app.use('/auth', authRouter)

app.get('/', (req, res) => {
    res.render('index')
})


app.get('/api', (req, res) => {
    res.render('index', { username: req.user && req.user.username })
})


module.exports = app