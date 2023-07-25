const router = require('express').Router();
const supportService = require("../services/supportService.js");

router.get('/', async(req, res) => {
    res.setHeader('Content-Type', 'application/json');
    const result = await supportService.getSupport();
    res.json(result);
});

module.exports = router;