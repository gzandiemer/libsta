
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
 ```axios.post('http://localhost:3000/member', { userName: 'johnny', fullName: 'John Doe'}).then(console.log)```

 View member profile: <br />
 ```axios.get('http://localhost:3000/member/5dcff1784185624d8dfaa4c6').then(console.log)```

 View all member profiles: <br />
```axios.get('http://localhost:3000/member/all').then(console.log)```

 Delete a member: <br />
```axios.delete('/member/5dcff1784185624d8dfaa4c6').then(console.log)```

 Create a new book: <br />
```axios.post('http://localhost:3000/book', { title: 'One Hundred Years of Solitude', authorName: 'Gabriel Garcia Marquez', language: 'english', pubdate: 2000, booked: false}).then(console.log```

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




