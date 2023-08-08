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

async function getSupportById(id) {

    // Define variable
    let support;

    try {
        // use where with findUnique
        support = await prisma.support.findUnique ({
            where: {id: id}
        });

    // Catch and log errors to server side console 
    } catch (err) {
        console.log('DB Error - get support by id: ', err.message);
    } finally {

    }
    // return a single product if found
    return support;
}

// Get products from DB by cat id
//
async function getSupportByAreaId(areaID) {

    // define variable to store products returned
    let supportTickets;

    // execute the query to find products
    try {
        // find all products
        supportTickets = await prisma.support.findMany ({
            // where category_id = catId
            where: {supportArea_id: areaID},
            orderBy: {id: 'asc'} 
        });

    // Catch and log errors to server side console 
    } catch (err) {
        console.log('DB Error - get support tickets by area: ', err.message);
    } finally {

    }
    return supportTickets;
}

// Insert a new product into the database
// Return the result
//
async function createSupport(support) {
    let new_ticket;

    // execute query using prisma.product.create
    // Note the data object
    try {
        // New product so no id
        new_ticket = await prisma.support.create({
            data: {
                supportArea_id: Number(support.supportArea_id), 
                email: support.email, 
                name: support.name, 
                message: support.message 
            }
        });

    // Catch and log errors to server side console 
    } catch (err) {
        console.log('DB Error - create product: ', err.message);
    } finally {

    }
    // return the new product
    return new_ticket;
}


// Get product by id from DB
//
const deleteSupportById = async(id) => {

    // Define variable
    let deleted_confirm;

    try {
        // use where with findUnique
        deleted_confirm = await prisma.support.delete ({
            where: {id: id}
        });

    // Catch and log errors to server side console 
    } catch (err) {
        console.log('DB Error - get support by id: ', err.message);
    } finally {

    }
    // return result
    return deleted_confirm;
}

// Export 
module.exports = {
    getSupport,
    getSupportById,
    getSupportByAreaId,
    createSupport,
    deleteSupportById
};
