/*Since we do not have access to the app in this file (which creates the route)
therefore we use the express router */

const express = require('express');
const { 
    createNarrative,
    getNarratives,
    getNarrative,
    deleteNarrative,
    updateNarrative
} = require('../controllers/narrativeController')

const router = express.Router(); //we invoke the Router(), this creates an instance for the router, next we attach a handler - see below

//Get all the narratives
router.get('/', getNarratives);

//Get a single narrative; the colon is the parameter and the name can be anything - in this case id
router.get('/:id', getNarrative);

//POST a new narrative
router.post('/', createNarrative);

//DELETE a narrative
router.delete('/:id', deleteNarrative);

//UPDATE a narrative
router.patch('/:id', updateNarrative);

module.exports = router