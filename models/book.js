const mongoose = require('mongoose')

const BookSchema = new mongoose.Schema({
    // _id: {
    //     type: Number,
    //     required: true,
    // },
    title: {
        type: String,
        required: true,
        minlength: 1
    },
    authorName: {
        type: String,
        required: true,
        minlength: 4
    },
    lang: {
        type: String,
        required: false,
        minlength: 5
    },
    pubData: {
        type: Number,
        required: false,
        minlength: 4
    },
    owner: [{
        type: mongoose.SchemaTypes.ObjectId,
        ref: 'Member',
        autopopulate: {
            maxDepth:1
        }
    }], 
    likers: [{
        type: mongoose.SchemaTypes.ObjectId,
        ref: 'Member',
        autopopulate: {
            maxDepth:1
        }
    }], 
    commentsReceived: [{
        //work on this
        type: mongoose.SchemaTypes.ObjectId,
        ref: 'Member',
        text: '',
        autopopulate: {
            maxDepth:1
        }
    }], 
    booked: Boolean
})

BookSchema.plugin(require('mongoose-autopopulate'))

const BookModel = mongoose.model('Book', BookSchema)

module.exports = BookModel
    
