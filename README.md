<p align="right">
  <img src="../master/frontend/src/assets/logo-books.png" width="350" alt="Logo">
</p>

### Table of Contents

- [About the Project](#about-the-project)
  - [Title](#title)
  - [Description](#description)
  - [Objective](#objective)
  - [Goals](#goals)
  - [Author](#author)
  - [Sources](#sources)
  - [Built With](#built-with)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Versioning](#versioning)
- [Usage](#usage)
- [Project Structure](#project-structure)
  - [Classes](#classes)
  - [HTTP Request Examples](#axios-examples)
- [Style Guide](#style-guide)
- [Status](#status)
  - [Done](#done)
  - [In Progress](#in-progress)
  - [To Do](#to-do)
    - [Problems to fix](#problems-to-fix)
    - [Features to add](#features-to-add)


<a name="about-the-project"/>

## About The Project
<a name="description"/>

### Title
Libsta

<a name="description"/>

### Description
A web application for book sharing  
<a name="objective"/>

### Objective
To cover the need in Berlin for an alternative library since German libraries do not have sufficient number of books in other languages. With this web app, people will be able to connect their own libraries to one another and not only exchange books in a large community but also get in touch with people, whom they share a common book taste
<a name="goals"/>

### Goals
Membership through registration is required to use the app<br />
Every member create a personal library on their profile page where they publish what books they want to share<br />
Members can search a book by typing its title or author name in the search field to check its availability<br />
Members can follow one another<br />
Members can like, comment on and make a request for books in other members' libraries<br />
For the comment section, there will be a button to alert readers against spoilers<br />
Members can use direct messaging to arrange a meeting in order to exchange books<br />
<a name="author"/>

### Author 
Günışığı Zan Diemer

<a name="sources"/>

### Sources
This project is created within the frame of Women Techmakers Berlin's JavaScript Crash Course 2019 in WayFair

<a name="built-with"/>

### Built With

Major frameworks used in this project:

- Javascript Framework - [VueJs ](https://vuejs.org) 
- Testing Framework - [Avajs/Ava](https://github.com/avajs/ava)

Major libraries used in this project:

- Mongoose Object Data Modeling - [Mongoose](https://mongoosejs.com/)
- Pug Template Engine - [Pug](https://pugjs.org/api/getting-started.html)
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

- [MongoDB](https://www.mongodb.com/) is required
  _ check your current mongodb version with: `mongo -v`
  _ Install according to [MongoDB documentation](https://docs.mongodb.com/manual/installation/)

- [Robo3T](https://www.mongodb.com/) is required
  _ download here: [Robo3T download](https://robomongo.org/download)

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

- Start you local frontend environment: `npm run serve`

- Compiles and minifies for production: `npm run build`

- Connect to database: `brew services start mongodb-community@4.2`

- Start your local backend environment: `nodemon index.js`

- Run your tests: `npm run test`

<a name="project-structure"/>

## Project Structure 

```
├───backend
│   ├───models
│   ├───routes
│   ├───services
│   ├───test
│   └───views
└───frontend
    ├───public
    └───src
        ├───assets
        ├───axios-auth
        ├───components
        │   └───forms
        ├───data
        ├───router
        ├───store
        └───views

```  
<a name="classes"/>

### Classes 

#### Member
>-**userName**: _String_<br />
>-**fullName**: _String_<br />
>-**city**: _String_<br />
>-**library**: _Array_<br />
>-**likes**: _Array_<br />
>-**followers**: _Array_<br />
>-**following**: _Array_<br />
>-**comments**: _Array_<br />
>
>+**followMember()**<br />
>+**likeBook()**<br />
>+**addBook()**<br />
>+**commentOnBook()**<br />

#### Book
>-**title**: _String_<br />
>-**authorName**: _String_<br />
>-**language**: _String_<br />
>-**pubDate**: _Number_<br />
>-**owner**: _Object_<br />
>**likers**: _Array_<br />
>-**comments**: _Array_<br />
>-**booked**: _Boolean_<br />

<a name="axios-examples"/>

### HTTP Request Examples using Axios

 Create a new member: <br />
 ```axios.post('http://localhost:3000/member', { userName: 'johnny', fullName: 'John Doe', city: 'Berlin'}).then(console.log)```

 View member profile: <br />
 ```axios.get('http://localhost:3000/member/5dcff1784185624d8dfaa4c6').then(console.log)```

 View all member profiles: <br />
```axios.get('http://localhost:3000/member/all').then(console.log)```

 Delete a member: <br />
```axios.delete('/member/5dcff1784185624d8dfaa4c6').then(console.log)```

 Create a new book: <br />
```axios.post('http://localhost:3000/book', { title: 'One Hundred Years of Solitude', authorName: 'Gabriel Garcia Marquez', language: 'english', pubdate: 2000, booked: false}).then(console.log)```

 View book profile: <br />
```axios.get('http://localhost:3000/book/5dcff970d4f5e04e16bf51e0').then(console.log)```

 View all book profiles: <br />
```axios.get('http://localhost:3000/book/all').then(console.log)```

 Delete a book: <br />
```axios.delete('/book/5dcff970d4f5e04e16bf51e0').then(console.log)```

 View register page: <br />
```axios.get('http://localhost:3000/register').then(console.log)```

 View login page: <br />
```axios.get('http://localhost:3000/login').then(console.log)```

<a name="style-guide"/>

## Style Guide

Font Family: 
- <p font-family="Merryweather"> Merryweather (light), serif: </p> (https://fonts.googleapis.com/css?family=Merriweather:300&display=swap)
- <p font-family="Lato">Lato (regular), sans-serif: </p> (https://fonts.googleapis.com/css?family=Lato:300&display=swap)
- <p font-family="Sue Ellen Francisco">Sue Ellen Francisco (regular), cursive: </p> (https://fonts.googleapis.com/css?family=Sue+Ellen+Francisco&display=swap)

Color Palette:
- purplish: ![#521751](https://placehold.it/15/521751/000000?text=+) `#521751`
- reddish: ![#bf0B2c](https://placehold.it/15/bf0B2c/000000?text=+) `#bf0B2c`
- darkblueish: ![#02173d](https://placehold.it/15/02173d/000000?text=+) `#02173d`
- lightpetrolish: ![#0aa38c](https://placehold.it/15/0aa38c/000000?text=+) `#0aa38c`
- Vue-green: ![#42b983](https://placehold.it/15/42b983/000000?text=+) `#42b983`
- mustardish: ![#f5900f](https://placehold.it/15/f5900f/000000?text=+) `#f5900f`
- linenish: ![#858418](https://placehold.it/15/ad9d5a/000000?text=+) `#858418`
- darkkhaki: ![#ad9d5a](https://placehold.it/15/ad9d5a/000000?text=+) `#ad9d5a` 

<a name="status"/>

## Status

<a name="done"/>

### Done
- documentation
- navbar
- sign up/in forms
- routing
- Library table
- book-form
- addBook function for library table via book-for
- footer

<a name="in-progress"/>

### In Progress
- add icons instead of like button and add an increment button for likes
- after adding book navigate back to member's profile page
- authentication
- Add comment upvote section to BookSingle.vue
- error handling

<a name="to-do"/>

### To Do
- validations
- delete and update book buttons in library
- save likes to database book.likers
- Add Carousel to home and dashboard (limit each with 3-4 cards)
- Sort books from the most liked to the least
- Add profile card to profile page with follow button

<a name="problems-to-fix"/>

#### Problems to fix

- when the book-form is submitted, it should turn back to the member's page but my this.$router.push() doesn_t work
- book added 2 times or book added but not in library 
- like button increases the likes in all cards 
- auth doesn't work, backend sends 400 for register

<a name="features-to-add"/>

#### Features to add

- Authentication and dashboard modification with logout and user profile
- request book in book-card
- follow in member profile page 
- Search book title and author
- Direct messaging
- Frontend testing






