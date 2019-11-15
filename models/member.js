const mongoose = require('mongoose')

const MemberSchema = new mongoose.Schema({
    // _id: {
    //     type: Number,
    //     required: true,
    // },
    userName: {
        type: String,
        required: true,
        minlength: 4
    },
    fullName: {
        type: String,
        required: true,
        minlength: 6
    },
    library: [{
        type: mongoose.SchemaTypes.ObjectId,
        ref: 'Book',
        autopopulate: {
            maxDepth:1
        }
    }], 
    likes: [{
        type: mongoose.SchemaTypes.ObjectId,
        ref: 'Book',
        autopopulate: {
            maxDepth:1
        }
    }],
    followers: [{
        type: mongoose.SchemaTypes.ObjectId,
        ref: 'Member',
        autopopulate: {
            maxDepth:1
        }
    }],
    following: [{
        type: mongoose.SchemaTypes.ObjectId,
        ref: 'Member',
        autopopulate: {
            maxDepth:1
        }
    }],
    commentsMade: [{
        //work on this??
        type: mongoose.SchemaTypes.ObjectId,
        ref: 'Book',
        text: '',
        autopopulate: {
            maxDepth:1
        }
    }],
})

// MemberSchema.methods.followMember = function (follower, followed) {
//     followed.followers.push(follower)
//     follower.following.push(followed)
// }

MemberSchema.plugin(require('mongoose-autopopulate'))

const MemberModel = mongoose.model('Member', MemberSchema)

module.exports = MemberModel

// module.exports = class Member {
//     constructor(userName, fullName, library = [], followers = [], following = []) {
//         this.id = Member.counter++
//         this.userName = userName
//         this.fullName = fullName
//         this.library = library
//         this.followers = followers
//         this.following = following
//     }
//     addBook (book) {
//         this.library.push(book)
//         book.owner = this.userName
//     }
//     removeBook(book) {
//         let i = this.library.indexOf(book)
//         this.library.splice(i, 1)
//     }
//     followMember(member) {
//         console.log(`${this.userName} follows you`)
//         member.followers.push(this)
//         this.following.push(member)
//     }
//     likeBook = (book) => console.log(Boxen(`${this.userName} liked ${book.title}`, { borderColor: 'cyan', padding: 1, margin: 2 }))
//     commentOnBook = (book, message) => console.log(Boxen(message, { backgroundColor: '#1B818C', borderStyle: 'double', padding: 3, float: 'center', dimBorder: true }))
//     requestBook = (book, owner) => console.log(`${this.userName} made a request for ${book.title}`)
//     acceptRequest(borrower, book) {
//         console.log(`${this.userName} accepted your request for ${book.title}`)
//         book.booked = true
//     }
//     giveBook(borrower, book) {
//         borrower.library.push(book)
//         this.removeBook(book)
//     }

//     static create({userName, fullName, library = [], followers = [], following = []}) {
//         return new Member(userName, fullName, library = [], followers = [], following = [])
//     }
// }