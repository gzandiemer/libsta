const BaseService = require('./base-service')
const MemberModel = require('../models/member')

class MemberService extends BaseService {
    model = MemberModel

    async followMember(follower, member) {
        member.followers.push(follower)
        follower.following.push(member)
        await follower.save()
        await member.save()
    }
    
    async addBook(member, book) {
        member.library.push(book)
        book.owner = member._id
        await member.save()
        await book.save()
    }
    
    async deleteBook(member, book) {
        member.library.push(book)
        book = null
        await member.save()
        await book.save()
    }

    async likeBook(member, book) {
        member.likes.push(book)
        book.likers.push(member) 
        await member.save()
        await book.save()
    }

  
}

module.exports = new MemberService()