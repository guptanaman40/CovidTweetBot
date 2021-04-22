let Twit = require('twit');
let Twitter = new Twit(require('../../config'));

let db = [

    "oxygen",
    "plasma",
    "bed",
    "remdesivir",
    "delhi",
    "mumbai",
    "pune",
    "gandhinagar",
    "ncr",
    "maharashtra",
    "gujarat",
    "urgent",
    "emergency",
    "urgently",
    "requirement",
    "required"

]

exports.search_all_related_tweets = (req, res)=>{
    const {key} = req.query;
    Twitter.get('search/tweets', {
        q: key,
        count: 100
    }, function (err, data, response) {
        // console.log(data.statuses);
        let tweetText = [];
        let reqDetails = [];
        data.statuses.map(tweet=>{
            if(!tweetText.includes(tweet.text.split(":")[1])){
                tweetText.push(tweet.text.split(":")[1]);
                return reqDetails.push({
                    id: tweet.id,
                    text: tweet.text
                })
            }
    
        })
        return res.status(200).json({results: reqDetails});
    });
};

exports.search_keywords_in_tweets = (req, res)=>{

    const {text} = req.body;
    
    let eachKeyword = text.split(" ");
        let newArr = eachKeyword.filter(word => {
            return db.includes(word)
        });
        return res.status(200).json({keywords: newArr});
};

exports.retweet = (req, res)=>{

    const {id} = req.params;

    Twitter.post(
        'statuses/retweet/:id', {
            id: id
        },
        function (err, data, response) {
            if (err) { // here
                console.log(err.message);
                return res.status(500).json({message:"some error occured"});
            } else {
                console.log("DONE");
                return res.status(200).json({message:"Retweeted"});
            }
        }
    );
};