const mongoose = require('mongoose')

const BookSchema = new mongoose.Schema({
  
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
    language: {
        type: String,
        required: true,
        minlength: 5
    },
    pubDate: {
        type: Number,
        //required: false,
    
    },
    owner: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: 'Member',
        //required: false,
        autopopulate: {
            maxDepth: 1
        }
    },
    likers: [{
        type: mongoose.SchemaTypes.ObjectId,
        ref: 'Member',
        autopopulate: {
            maxDepth: 1
        }
    }],
    comments: [{
        //work on this
        type: mongoose.SchemaTypes.ObjectId,
        ref: 'Member',
        text: '',
        autopopulate: {
            maxDepth: 1
        }
    }],
    booked: Boolean
})

BookSchema.plugin(require('mongoose-autopopulate'))

const BookModel = mongoose.model('Book', BookSchema)

module.exports = BookModel

