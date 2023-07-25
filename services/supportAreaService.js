const supportAreaData = require('../dataAccess/supportAreaData');

async function getSupportAreas() {
    const supportAreas = await supportAreaData.getSupportAreas();
    return supportAreas;
  }
  
module.exports = {
    getSupportAreas
};