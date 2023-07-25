const supportData = require('../dataAccess/supportData')

async function getSupport() {
    const supportTickets = await supportData.getSupport();
    return supportTickets;
  }

async function getSupportById(id) {
  // validate the id
  const validated_id = validate.validateId(id);

  if (validated_id) {
    // Call the data access function to get support with matching id
    const support = await supportData.getSupportById(validated_id);

    // return the support
    return support;
  } else {
    return "get support by id service - Invalid support id";
  }
}

// Function to get supportTickets in a specified support area (by support area id)
//
async function getSupportByAreaId(id) {

    // validate the id
    const validated_id = validate.validateId(id);
  if (validated_id) {

    // Call the data access function to get support matching id
    const supportTickets = await supportData.getSupportByAreaId(validated_id);

    // return the supportTickets found
    return supportTickets;

  } else {
      return "get by support area service - Invalid support id";
  }
}

// This function accepts support data which it validates.
// If validation passes then pass the new support data to the data access layer
async function addNewSupport(support_data) {

  // declare variables
  let result;

    // Call the support validator - kept seperate to avoid clutter here
    let validated_support = supportValidator.validateNewsupport(support_data); 

    // If validation returned a support object - save to database
    if (validated_support) {
      // Insert
      result = await supportData.createSupport(validated_support);

      return {
        support: result,
        message: `support added with id: ${result.id}`
      }
    
    } else {
      return {
        support: support_data,
        message: 'add support service - invalid support data'
      }
    }
}

async function deleteSupportById(id) {
  // validate the id
  const validated_id = validate.validateId(id);

  if (validated_id) {
    // Call the data access function to get support with matching id
    const support = await supportData.deleteSupportById(validated_id);

    // return the support
    return support;
  } else {
    return "delete service - Invalid support id";
  }
}

module.exports = {
    getSupport,
    getSupportById,
    getSupportByAreaId,
    addNewSupport,
    deleteSupportById
};