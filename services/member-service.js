const BaseService = require('./base-service')
const MemberModel = require('../models/member')

//name of this service not fitting?
class MemberService extends BaseService {
    //how to write below including both member and book model?
    model = MemberModel

    async followMember(member, followed) {
        followed.followers.push(member)
        member.following.push(followed)
        await member.save()
    }
}

module.exports = new MemberService()