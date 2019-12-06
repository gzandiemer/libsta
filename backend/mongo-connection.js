const mongoose = require('mongoose')

const db = process.env.MONGODB_CONNECTION_STRING || "mongodb://localhost/libsta" 

async function main() {
    await mongoose.connect(db, { useUnifiedTopology: true, useNewUrlParser: true })
    console.log(`Database connected on ${db}`)
}

main()