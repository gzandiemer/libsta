const mongoose = require('mongoose')

const db = require('./config/keys').mongoUrl || process.env.MONGODB_CONNECTION_STRING

async function main() {
    await mongoose.connect(db, { useUnifiedTopology: true, useNewUrlParser: true })
    console.log(`Database connected on ${db}`)
}

main()