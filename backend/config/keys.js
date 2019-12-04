if (process.env.NODE == 'production') {
    //write below your mongodb url (either from heroku or mLab get an account - create a free database there ) 
    //AND THEN GO TO HEROKU CREATA A NEW APP with app name and choose a region
    //PRODUCTION DATABASE
    // mongoUrl: "mongodb://username:://blablabla ",
    secret: 'yoursecret'
} else {
    module.exports = {
        mongoUrl: "mongodb://localhost/libsta",
        secret: 'yoursecret'
    }

}