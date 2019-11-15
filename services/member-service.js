const BaseService = require('./base-service')
const MemberModel = require('../models/member')

//name of this service not fitting?
class MemberService extends BaseService {
    //how to write below including both member and book model?
    model = MemberModel

    async followMember(follower, followed) {
        followed.followers.push(follower)
        follower.following.push(followed)
        await member.save()
        await book.save()
    }
}

module.exports = new MemberService()