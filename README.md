Project title: BOOK CIRCLE

Project description: An online library for book circulation among Berlin residents through personal meetups

Objective: To cover the need in Berlin for an alternative library since German libraries do not have enough books in other languages. With this web app, people will be able to connect their own libraries to one another and not only exchange books in a larger community than their friend circle but also meet with people, whom they share a common book taste

Created by: Günışığı Zan Diemer

*This project is created within the frame of Women Techmakers Berlin's JavaScript Crash Course in WayFair

Details:

People will be asked to register for free as a member to use the app
Members will create a personal library on their profile where they publish what books they want to share
Members will be able to search a book by typing its title or author name in the search field and check if it is available and if yes, which members have it in their library
Members will be able to follow one another
Members will be able to request and borrow books from other members through arranging a meeting in the physical world via direct messaging
Members will be able to like and comment on books in other libraries
For the comment section, there will be a spoiler button to create an automatic warning to be able to include spoilers in the comments# book-circle

Technologies: 

npm
mongoose
express.js
pug
ava 


Classes: 

    Member
-userName: String
-fullName: String
-library: Array
-likes: Array
-followers: Array
-following: Array
-comments: Array

+followMember()
+likeBook()
+addBook()
+commentOnBook()

     Book
-title: String
-authorName: String
-language: String
-pubDate: Number
-owner: Object
-likers: Array
-comments: Array
-booked: Boolean

Axios actions :

Create a new member:
axios.post('http://localhost:3000/member', { userName: 'gzan', fullName: 'Günisigi Zan}).then(console.log)

View member profile:
axios.get('http://localhost:3000/member/5dcff1784185624d8dfaa4c6'.then(console.log)

View all member profiles:
axios.get('http://localhost:3000/member/all'.then(console.log)

Delete a member:
axios.delete('/member/5dcff1784185624d8dfaa4c6').then(console.log)

Create a new book: 
axios.post('http://localhost:3000/book', { title: 'One Hundred Years of Solitude', authorName: 'Gabriel Garcia Marquez', language: 'english', pubdate: 2000, booked: false}).then(console.log)

View book profile:
axios.get('http://localhost:3000/book/5dcff970d4f5e04e16bf51e0'.then(console.log)

View all book profiles:
axios.get('http://localhost:3000/book/all'.then(console.log)

Delete a book:
axios.delete('/book/5dcff970d4f5e04e16bf51e0').then(console.log)

View register page:
axios.get('http://localhost:3000/register'.then(console.log)

View login page:
axios.get('http://localhost:3000/login'.then(console.log)




