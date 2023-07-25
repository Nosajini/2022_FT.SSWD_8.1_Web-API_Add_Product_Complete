const router = require('express').Router();
const supportService = require("../services/supportService.js");

router.get('/', async(req, res) => {
    res.setHeader('Content-Type', 'application/json');
    const result = await supportService.getSupport();
    res.json(result);
});

// This endpoint will return a single product by id
// The endpoint is same as for / but with an added :id parameter
router.get('/:id', async(req, res) => {

    // Try to get data and return
    try {
        // Get result from the product service
        // passing the value from req.params.id
        const result = await supportService.getSupportById(req.params.id);

        // Send a  response
        res.json(result);

    // Handle server errors    
    } catch (err) {
      console.log('GET support/:id - ', err.message);
      res.sendStatus(500);  
    }
});

// Endpoint to handle requests for product by id
// req.query version
// req format: /product/bycat/4
//
router.get("/byarea/:areaId", async (req, res) => {
    // read values from req

    // Get products 
    try {
      const result = await supportService.getSupportByAreaId(req.params.areaId);
  
      // Send response back to client
      res.json(result);
  
      // Catch and send errors
    } catch (err) {
      res.status(500);
      res.send(err.message);
    }
  });


// This endpoint is used to add a new product
// Note that this handles a POST request (router.post)
router.post('/', async(req, res) => {

  // read data request body, this will be the new product
  const new_support = req.body;
  
  // If data missing return 400
  if (typeof new_support === "undefined") {
    res.statusMessage = "Bad Request - missing support ticket data";
    res.status(400).json({ content: "error" });
    return 1;
  }
  // log the data to the console
  console.log(`ticket data sent:\n ${JSON.stringify(new_support)}`);

  // Call productService to create the new product
  try {
    const result = await productService.addNewProduct(new_product);

    // Send response back to client
    res.json(result);

    // Catch and send errors
  } catch (err) {
    console.log('POST product/ - ', err.message);
    res.sendStatus(500);  
  }

});



// This endpoint will delete a product by id
// The endpoint is same as for /:id but with uses the delete method
router.delete('/:id', async(req, res) => {

    // Try to get data and return
    try {
        // Get result from the product service
        // passing the value from req.params.id
        const result = await supportService.deleteSupportById(req.params.id);
  
        // Send a  response
        res.json(result);
  
    // Handle server errors    
    } catch (err) {
      console.log('DELETE support/:id - ', err.message);
      res.sendStatus(500);  
    }
  });

module.exports = router;