require('dotenv').config(); /*installed the dotenv package to use on the process object */

const express = require('express'); /*to import */
const storyRoutes = require('./routes/stories');

//this creates an express app
const app = express(); /*a function we just invoked*/ 

//middleware (middleware: any code that executes between request and sending response)
app.use(express.json()) //the method is built in express. What it does is it looks if there is any body or data to the request. If it does then it passes and attached it to request object which we can it access in the request handler

app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
}) /*this function will execute for every request. We have acess to 
three arguments, next will need to be run to move to the next middleware, 
therefore next must be invoked at the end of this function*/

//routes 
app.use('/stories', storyRoutes) //grabs all the routes we attach to the router from stories module and uses them on the app


//listen for requests
app.listen(process.env.PORT, () => {
    console.log('Listening on port 4000')
})