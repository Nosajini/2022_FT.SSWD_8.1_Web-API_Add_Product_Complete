//
// Functions for validating products
//

// for documentation see: https://www.npmjs.com/package/validator
const validator = require('validator');

// Import existing validateId function from baseValidators.
const { validateId } = require('./baseValidators');

// Import product object model
const Support = require('../models/support');

// Validate the body data, sent by the client, for a new product
// product represents the data filled in a form
// It needs to be validated before using in gthe application
function validateNewSupport(support) {
    // Declare constants and variables
    let validated_support;

    // debug to console - if no data
    if (support === null) {
        console.log('validateNewSupport(): Parameter is null');
    }
    // Validate form data for new product fields
    // Creating a product does not need a product id
    // Adding '' to the numeric values makes them strings for validation purposes ()
    // appending + '' to numbers as the validator only works with strings
    if (
        validateId(support.supportArea_id) && 
        !validator.isEmpty(support.email) && 
        !validator.isEmpty(support.name) && 
        !validator.isEmpty(support.message)
        )
    {
        // Validation passed
        // create a new Product instance based on Product model object
        // no value for product id (passed as null)
        validated_support = new Support(
                0, // New product as no id
                support.supportArea_id,
                // escape is to sanitize - it removes/ encodes any html tags
                validator.escape(support.email),
                validator.escape(support.name),
                validator.escape(support.message)
            );
    } else {
        // debug
        console.log("validateNewSupport(): Validation failed");
    }
    // return new validated product object
    return validated_support;
}

// Module exports
// expose these functions
module.exports = {
  validateNewSupport
}