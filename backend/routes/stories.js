/*Since we do not have access to the app in this file (which creates the route)
therefore we use the express router */

const express = require('express');

const router = express.Router(); //we invoke the Router(), this creates an instance for the router, next we attach a handler - see below

//Get all the stories
router.get('/', (req, res) => {
    res.json({mssg: 'Get all the stories'})
});

//Get a single story; the colon is the parameter and the name can be anything - in this case id
router.get('/:id', (req, res) => {
    res.json({mssg: 'Get a single story'})
});

//POST a new workout
router.post('/', (req, res) => {
    res.json({mssg: 'POST a new story'})
});

//DELETE a story
router.delete('/:id', (req, res) => {
    res.json({mssg: 'DELETE a story'})
});

//UPDATE a story
router.patch('/:id', (req, res) => {
    res.json({mssg: 'UPDATE a story'})
});

module.exports = router