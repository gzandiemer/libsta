const mongoose = require('mongoose')

const MemberSchema = new mongoose.Schema({
    userName: {
        type: String,
        required: true,
        minlength: 3
    },
    fullName: {
        type: String,
        required: true,
        minlength: 6
    },
    city: {
        type: String,
        required: true,
        minlength: 3
    },
    library: [{
        type: mongoose.SchemaTypes.ObjectId,
        ref: 'Book',
        autopopulate: {
            maxDepth: 1
        }
    }],
    likes: [{
        type: mongoose.SchemaTypes.ObjectId,
        ref: 'Book',
        autopopulate: {
            maxDepth: 1
        }
    }],
    followers: [{
        type: mongoose.SchemaTypes.ObjectId,
        ref: 'Member',
        autopopulate: {
            maxDepth: 1
        }
    }],
    following: [{
        type: mongoose.SchemaTypes.ObjectId,
        ref: 'Member',
        autopopulate: {
            maxDepth: 1
        }
    }],
    comments: [{
        type: mongoose.SchemaTypes.ObjectId,
        ref: 'Book',
        text: '',
        autopopulate: {
            maxDepth: 1
        }
    }],

    //versionKey: false

})


MemberSchema.plugin(require('mongoose-autopopulate'))

const MemberModel = mongoose.model('Member', MemberSchema)

module.exports = MemberModel

