const express = require('express');
const router = express.Router();

router.get("/", (req, res) => res.json({ 
    profile: {
        name: "Ganesh Kale",
        username: "GKCSD",
        Github: "https://github.com/gkcsd"
    }
}));

module.exports = router;