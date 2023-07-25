const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function getSupportAreas() {
    let supportAreas;

    try {  
        supportAreas = await prisma.supportArea.findMany();

    } catch (err) {
        console.log('DB Error - get all Support Areas: ', err.message);
    } finally {
    }
    
    return supportAreas;
}

module.exports = {
    getSupportAreas,
};
