const router = require('express').Router();
const supportAreaService = require("../services/supportAreaService");

router.get('/', async(req, res) => {
    const result = await supportAreaService.getSupportAreas()
    res.json(result);
});

module.exports = router;