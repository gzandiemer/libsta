<br />
<p align="center">
  <img src="../master/images/logo.png" width="350" alt="Logo">
</p>
<h2 align="center">Libsta</h2>
<h3 align="center">Ad Libris per Astra</h3>

### Table of Contents

- [About the Project](#about-the-project)
  - [Built With](#built-with)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Versioning](#versioning)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [Classes](#project-structure)
- [Axios Actions](#project-structure)


<a name="about-the-project"/>

## About The Project
### Description
An online book sharing platform through personal meetups
### Objective
To cover the need in Berlin for an alternative library since German libraries do not have sufficient number of books in other languages. With this web app, people will be able to connect their own libraries to one another and not only exchange books in a large community but also get in touch with people, whom they share a common book taste
### Goals
People will be asked to register for free as a member to use the app
Members will create a personal library on their profile where they publish what books they want to share
Members will be able to search a book by typing its title or author name in the search field and check if it is available and if yes, which members have it in their library
Members will be able to follow one another
Members will be able to request and borrow books from other members through arranging a meeting in the physical world via direct messaging
Members will be able to like and comment on books in other libraries
For the comment section, there will be a spoiler button to create an automatic warning to be able to include spoilers in the comments# book-circle
### Author 
Günışığı Zan Diemer
### Sources
This project is created within the frame of Women Techmakers Berlin's JavaScript Crash Course in WayFair

<a name="built-with"/>

## Built With

Major frameworks used in this project:

- Javascript Framework - [VueJs ](https://vuejs.org) 
- Material Design Component Framework - [Vuetify](https://vuetifyjs.com) 
- Testing Framework - [Avajs/Ava](https://github.com/avajs/ava)

Major libraries used in this project:

- Mongoose Object Data Modeling - [Mongoose](https://mongoosejs.com/)
- Pug Template Engine - [Pug](https://pugjs.org/api/getting-started.html)
- CSS Preprocessor - [Scss](https://sass-lang.com)
- Promise based HTTP client - [Axios](https://github.com/axios/axios)
- Code Styling - [Eslint](https://eslint.org)

## Getting Started

<a name="prerequisites"/>

#### Prerequisites

- [Node.js](https://nodejs.org/en/) is required 
  _ latest version or at least >= 8.11 
  _ check your current node version with: `node -v`

- [NPM](https://www.npmjs.com/) is required
  _ install package manager npm with: `npm install npm@latest -g`
  _ check your current npm version with: `npm -v`


- [Docker](https://docs.docker.com):
  _ latest version or at least >= 19.03.2
  _ check your current node version with: `docker -v`
  _ Install according to [Docker documentation](https://docs.docker.com)

<a name="installation"/>

#### Installation

The code is hosted on GitHub:

1. Clone the repo:
   `git clone <github_repository>`
      
Build and start either with NPM:

2. Install NPM packages and dependencies:
   `npm install`
3. to start the local environment run: `npm run serve`


## Usage

Compiles and hot-reloads for development:

- Start you local environment: `npm run serve`

- Compiles and minifies for production: `npm run build`

- Run your tests: `npm run test`

<a name="project-structure"/>

## Project Structure

│   .gitignore                
│   app.js           
│   index.html
│   index.js                  
│   mongo-connection.js
│   package-lock.json
│   package.json              
│   README.md                 
│
├───models
│       book.js
│       member.js
│
├───routes
│       book.js
│       member.js
│
├───services
│       base-service.js
│       book-service.js
│       member-service.js
│
├───test
│       book.js
│       member.js
│
└───views
        book.pug
        data.pug
        index.pug
        layout.pug
        library.pug
        list.pug
        login.pug
        member.pug
        register.pug



## Classes: 

### Member
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

### Book
-title: String
-authorName: String
-language: String
-pubDate: Number
-owner: Object
-likers: Array
-comments: Array
-booked: Boolean

## Axios actions

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




