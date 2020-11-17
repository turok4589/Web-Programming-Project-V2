const express = require('express');
const path = require('path');
require('dotenv').config();

console.log('At least some code is running');

const users = require('./controllers/users');
const exercises = require('./controllers/exercises');
const comments = require('./controllers/comments');
const exercisetypes = require('./controllers/exercisetypes');


const app = express()
const port = process.env.PORT || 3000;

console.log(process.env.BEST_CLASS);

//  Middleware
app.use(express.json());
app.use(express.static( __dirname + '/../docs/')) //creates a middleware function that will serve files straight off computer and tells computer where to look.
//it was looking for a file in the wrong folder. The dirname is the directory name
//  Authentication
app.use(function(req, res, next) {
  const arr = (req.headers.authorization || "").split(" ");
  if(arr.length > 1 && arr[1] != null){
      req.userId = +arr[1];
  }
  next();
});
//  API
app.get('/', (req, res, next) => {
  res.send('Hello Hudson Valley!! You requested ' + req.url)
})

app.use('/users', users);
app.use('/comments', comments);
app.use('/exercises', exercises);
app.use('/exercisestypes', exercisetypes);

app.get('*', (req, res, next) => {
    const filename = path.join(__dirname, '/../docs/index.html');
    console.log(filename);
    res.sendFile( filename );
})

app.use( (err, req, res, next) =>{
    console.log(err);
    res.status(err.status || 500).send( { message: err.message } )
} )



//  Init
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})