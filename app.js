const path = require('path'); // init path
const bodyParser = require('body-parser'); //init body-parser
const mongoose = require('mongoose'); //init mongoose 

const express = require('express'); // init express
const app = express(); // lunch express in app const;

const mainRoutes = require('./routes/main')
const adminRoutes = require('./routes/admin')

app.set('view engine', 'ejs');
app.set('views', 'views');
app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static(path.join(__dirname))); //making the path css/js availbale from the dirname folder
app.use(mainRoutes)
app.use('/admin', adminRoutes)

const MONGODB_URI = 'mongodb+srv://dbgym1:dbi6263xsd@cluster0-ldw0q.mongodb.net/gym?retryWrites=true&w=majority';

mongoose.connect(MONGODB_URI).then(result => {

    app.listen(3001)
    // mongoose.createConnection.db.listCollections({ name: 'blabla' }).then(e => console.log(e)).catch(err => {
    //     console.log(err);
    // })

}).catch(err => console.log(err))
