const mongoose = require('mongoose'); //this package allows us to create models and schemas in our database, mongodb is schema less

const Schema = mongoose.Schema;     //this is a function to create new schema


//invoked to create a new schema. Schema defines structure of a document
const narrativeSchema = new Schema({
    title: {
        type: String, 
        required: true
    },
    snippet: {
        type: String, 
        required: true
    },
    body: {
        type: String, 
        required: true
    }
}, { timestamps: true }); //can pass second argument; this generates timestamps properties automatically

//apply the schema to a particular model. We use the model to interact with a collection of that name
module.exports = mongoose.model('Narrative', narrativeSchema);

/*When we name the model it is singular (Narrative), as it will automatically pluralize to create a narratives collection. It builds the database for us. We use the Narrative model to interact with the narratives collection*/