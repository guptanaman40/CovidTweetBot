let Twit = require('twit');
let Twitter = new Twit(require('./config.js'));

// sample databse
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

// function for searching
const search = async (keyword) => {
    Twitter.get('search/tweets', {
        q: keyword,
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
        return console.log(reqDetails);
    });
}
// this is the retweet function
function retweet(tweet) {
    Twitter.post(
        'statuses/retweet/:id', {
            id: tweet.id_str
        },
        function (err, data, response) {
            if (err) { // here
                console.log(err.message);
                return;
            } else {
                console.log("DONE");
            }
        }
    );
}


// this function converts array into string
// const arrToString = (arr) =>{
//     let result = "";
//     arr.map(item=> result +=` ${item}`);
//     return result
// }

// this function finds the keywords in the dataBase
// this function will provide inputs for the google sheets bot
function breakIntoKeywords(tweet) {
    let eachKeyword = tweet.split(" ");
    let newArr = eachKeyword.filter(word => {
        return db.includes(word)
    });
    return newArr;
    
}

search("urgent requirement of oxygen in delhi ");

// Twitter.get('statuses/show/:id', {
//     id:1385208262425866200
// }, function (err, data, response) {
//     console.log(data);
//     return ;
// });

// search("covid beds in jammu");
