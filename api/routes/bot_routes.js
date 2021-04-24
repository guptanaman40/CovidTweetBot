const express = require('express');
const router = express.Router();
const BOT_CONTROLLER = require('../controllers/bot_controllers');

// request must have query in the url eg: ?key=delhi oxygen
router.get("/search", BOT_CONTROLLER.search_all_related_tweets);

// request must have the body of the tweet 
router.post("/keywords", BOT_CONTROLLER.search_keywords_in_tweets); // not needed now

// request must have a body with tweet id tweet text and tweet id_str
router.post("/reply", BOT_CONTROLLER.reply);

module.exports = router;