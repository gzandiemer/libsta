const BaseService = require('./services/base-service')
const MemberModel = require('./models/member')
const BookModel = require('./models/book')

class LibraryService extends BaseService {


    async addBook(member, book) {
        member.library.push(book)
        book.owner = member
        await member.save()
        await book.save()
    }

    async likeBook(member, book) {
        member.likes.push(book)
        book.likers.push(member) 
        await member.save()
        await book.save()
    }

    async commentOnBook(member, book, text) {
        //work on this function
        member.commentsMade.push(text)
        book.commentsReceived.push(text) 
        await member.save()
        await book.save()
    }
}

module.exports = new LibraryService()