const supportData = require('../dataAccess/supportData')

async function getSupport() {
    const supportTickets = await supportData.getSupport();
    return supportTickets;
  }
  
module.exports = {
    getSupport
};