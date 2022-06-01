const { urlencoded } = require('body-parser');
const express = require('express');
const app = express();
const session = require('express-session')

app.listen(3000, () => console.log('servidor corriendo'));

app.set('view engine', 'ejs');

app.use( express.urlencoded({extended: false}));
app.use( express.json());

app.use(session({
    secret: 'hola',
    resave: false,
    saveUninitialized: true
}));


const route = require('./route')

app.use('/', route)
