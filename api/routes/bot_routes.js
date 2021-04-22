const express = require('express');
const router = express.Router();
const BOT_CONTROLLER = require('../controllers/bot_controllers');

// request must have query in the url eg: ?key=delhi oxygen
router.get("/search", BOT_CONTROLLER.search_all_related_tweets);

// request must have the body of the tweet 
router.post("/keywords", BOT_CONTROLLER.search_keywords_in_tweets);

// request must have tweet id as params in url
router.post("/retweet", BOT_CONTROLLER.retweet);

module.exports = router;