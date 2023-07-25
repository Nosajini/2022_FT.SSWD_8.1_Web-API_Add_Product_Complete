const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function getSupport() {
    let supportTickets;

    try {  
        supportTickets = await prisma.support.findMany();

    } catch (err) {
        console.log('DB Error - get all support tickets: ', err.message);
    } finally {

    }
    return supportTickets;
}


// Export 
module.exports = {
    getSupport
};
