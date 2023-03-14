/*Since we do not have access to the app in this file (which creates the route)
therefore we use the express router */

const express = require('express');
const Narrative = require('../models/narrativeModel');

const router = express.Router(); //we invoke the Router(), this creates an instance for the router, next we attach a handler - see below

//Get all the narratives
router.get('/', (req, res) => {
    res.json({mssg: 'Get all the narratives'})
});

//Get a single narrative; the colon is the parameter and the name can be anything - in this case id
router.get('/:id', (req, res) => {
    res.json({mssg: 'Get a single narrative'})
});

//POST a new narrative
router.post('/', async (req, res) => {
    const {title, snippet, body} = req.body

    try {
        const narrative = await Narrative.create({title, snippet, body}) /*Since Narrative.create is asynchronous, we change the handle function above to be asnychronous function, we can then use await */
        res.status(200).json(narrative)  /*we are returning the object narrative that we get back*/
    } catch (error) {
        res.status(400).json({error: error.message})
    }
});

//DELETE a narrative
router.delete('/:id', (req, res) => {
    res.json({mssg: 'DELETE a narrative'})
});

//UPDATE a narrative
router.patch('/:id', (req, res) => {
    res.json({mssg: 'UPDATE a narrative'})
});

module.exports = router