/*in this file, we will create many functions that we will reference in the router file to minimize overcoding. This is so we are not hardcoding them to the routes file (narrative.js)*/

const Narrative = require('../models/narrativeModel');
const mongoose = require('mongoose');

// get all narratives
const getNarratives = async (req, res) => {
    const narratives = await Narrative.find({}).sort({createdAt: -1}) 

    res.status(200).json(narratives)
} //for find, we leave to get all. For sort, -1 for descending order so newest at the top

// get a single narrative
const getNarrative = async (req, res) => {
    const {id} = req.params //Use descructuring to grab which is changeable. We are grabbing the id property from the route parameters

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: 'No such narrative'})
    }

    const narrative = await Narrative.findById(id)

    if (!narrative) {
        return res.status(404).json({error: 'No such narrative'})
    } //we use return so it doesn't execute the rest of the code

    res.status(200).json(narrative)
}

// create a new narrative
const createNarrative = async (req, res) => {
    const {title, snippet, body} = req.body

    // add doc to db
    try {
        const narrative = await Narrative.create({title, snippet, body}) /*Since Narrative.create is asynchronous, we change the handle function above to be asnychronous function, we can then use await */
        res.status(200).json(narrative)  /*we are returning the object narrative that we get back*/
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}

// delete a narrative

// update a narrative

module.exports = {
    getNarratives,
    getNarrative,
    createNarrative
}