const express = require('express');
const router = express.Router();

router.get("/", (req, res) => res.json({
    questions: {
        "What is text": "Marvel",
        "What is title": "NodeJS"
    }
}));

module.exports = router;