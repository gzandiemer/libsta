<p align="center">
  <img src="../master/images/logo.png" width="250" alt="Logo">
</p>
<br />

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


<a name="about-the-project"/>

## About The Project
<a name="description"/>

### Title
Libsta

<a name="description"/>

### Description
An online book sharing platform through personal meetups
<a name="objective"/>

### Objective
To cover the need in Berlin for an alternative library since German libraries do not have sufficient number of books in other languages. With this web app, people will be able to connect their own libraries to one another and not only exchange books in a large community but also get in touch with people, whom they share a common book taste
<a name="goals"/>

### Goals
>Membership through registration is required to use the app
>Every member create a personal library on their profile page where they publish what books they want to share
>Members can search a book by typing its title or author name in the search field to check its availability
>Members can follow one another
>Members can like, comment on and make a request for books in other members' libraries
>For the comment section, there will be a button to alert readers against spoilers
>Members can use direct messaging to arrange a meeting in order to exchange books
<a name="author"/>

### Author 
Günışığı Zan Diemer

<a name="sources"/>

### Sources
This project is created within the frame of Women Techmakers Berlin's JavaScript Crash Course in WayFair

<a name="built-with"/>

### Built With

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

```
│   .gitignore                # sensible defaults for gitignore
│   app.js                    # app entry point
│   index.html                # index.html template
│   index.js                  # connect to server
│   mongo-connection.js       # connect to database 
│   package-lock.json         # store exact, versioned dependency tree
│   package.json              # build scripts and dependencies
│   README.md                 # project documentation
├───images                    # image files
├───models                    # database models
├───routes                    # forward http requests and functions to routes
├───services                  # all the logic 
├───test                      # test files
└───views                     # templates
```   
<a name="classes"/>

### Classes 

#### Member
>-**userName**: _String_<br />
>-**fullName**: _String_<br />
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

> Create a new member: 
```axios.post('http://localhost:3000/member', { userName: 'gzan', fullName: 'Günisigi Zan}).then(console.log)```

> View member profile: 
```axios.get('http://localhost:3000/member/5dcff1784185624d8dfaa4c6').then(console.log)```

> View all member profiles: 
```axios.get('http://localhost:3000/member/all').then(console.log)```

> Delete a member: 
```axios.delete('/member/5dcff1784185624d8dfaa4c6').then(console.log)```

> Create a new book: 
```axios.post('http://localhost:3000/book', { title: 'One Hundred Years of Solitude', authorName: 'Gabriel Garcia Marquez', language: 'english', pubdate: 2000, booked: false}).then(console.log)```
> View book profile:
```axios.get('http://localhost:3000/book/5dcff970d4f5e04e16bf51e0').then(console.log)```

> View all book profiles:
```axios.get('http://localhost:3000/book/all').then(console.log)```

> Delete a book:
```axios.delete('/book/5dcff970d4f5e04e16bf51e0').then(console.log)```

> View register page:
```axios.get('http://localhost:3000/register').then(console.log)```

> View login page:
```axios.get('http://localhost:3000/login').then(console.log)```




