require('dotenv').config(); /*installed the dotenv package to use on the process object */

const express = require('express'); /*to import */

//this creates an express app
const app = express(); /*a function we just invoked*/ 

//global middleware (middleware: any code that executes between request and sending response)
app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
}) /*this function will execute for every request. We have acess to 
three arguments, next will need to be run to move to the next middleware, 
therefore next must be invoked at the end of this function*/

//routes (set up route handler to react for request)
app.get('/', (req, res) => {
    res.json({mssg: 'Welcome to the app'})
}) /* we have access to the req and res object */

//listen for requests
app.listen(process.env.PORT, () => {
    console.log('Listening on port 4000')
})