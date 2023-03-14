require('dotenv').config(); /*installed the dotenv package to use on the process object */

const express = require('express'); /*to import */
const mongoose = require('mongoose'); //after importing, we can now use this to connect to the database
const narrativeRoutes = require('./routes/narratives');

// this creates an express app
const app = express(); /*a function we just invoked*/ 

// middleware (middleware: any code that executes between request and sending response)
app.use(express.json()) //the method is built in express. What it does is it looks if there is any body or data to the request. If it does then it passes and attached it to request object which we can it access in the request handler

app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
}) /*this function will execute for every request. We have acess to 
three arguments, next will need to be run to move to the next middleware, 
therefore next must be invoked at the end of this function*/

// routes 
app.use('/narratives', narrativeRoutes) //grabs all the routes we attach to the router from stories module and uses them on the app


// connect to db
mongoose.connect(process.env.MONGO_URI) //this will try to connect to database; asynchronous, therefore it returns a promise
.then(() => {
    // listen for requests
    app.listen(process.env.PORT, () => {
        console.log('Connected to db & listening on port', process.env.PORT)
    })
})
.catch((error) => {
    console.log(error)
})

