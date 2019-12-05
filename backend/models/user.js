const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        minlength: 3
    },
    fullName: {
        type: String,
        required: true,
        minlength: 6
    },
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    // date: {
    //     type: Date,
    //     default: Date.now
    // },
    city: {
        type: String,
        required: true,
        minlength: 3
    }
})


UserSchema.plugin(require('mongoose-autopopulate'))

const UserModel = mongoose.model('User', UserSchema)

module.exports = UserModel

