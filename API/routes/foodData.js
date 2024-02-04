const express = require('express');
const router = express.Router();

router.post("/foodData",
    async (req, res) => {
        try {
            return res.send([global.food_items,global.food_category])
        } catch (error) {
            return res.json({ 'success': 'false' })
        }

    })


module.exports = router;