let Twit = require('twit');
let Twitter = new Twit(require('../../config'));

let db = ['remdesivir','bed','plasma','oxygen','maharashtra', 'delhi', 'karnataka', 'telangana', 'gujarat', 'tamil nadu', 'west bengal', 'gujarat', 'maharashtra', 'rajasthan', 'uttar pradesh', 'uttar pradesh', 'maharashtra', 'madhya pradesh', 'maharashtra', 'madhya pradesh', 'andhra pradesh', 'maharashtra', 'bihar', 'gujarat', 'uttar pradesh', 'punjab', 'uttar pradesh', 'maharashtra', 'jharkhand', 'haryana', 'uttar pradesh', 'gujarat', 'maharashtra', 'maharashtra', 'uttar pradesh', 'jammu and kashmir', 'maharashtra', 'jharkhand', 'punjab', 'maharashtra', 'uttar pradesh', '[5]', 'west bengal', 'madhya pradesh', 'madhya pradesh', 'tamil nadu', 'andhra pradesh', 'rajasthan', 'tamil nadu', 'chhattisgarh', 'rajasthan', 'chandigarh', 'assam', 'maharashtra', 'karnataka', 'karnataka', 'tamil nadu', 'uttar pradesh', 'uttar pradesh', 'tamil nadu', 'haryana', 'uttar pradesh', 'punjab', 'odisha', 'tamil nadu', 'telangana', 'maharashtra', 'maharashtra', 'andhra pradesh', 'kerala', 'maharashtra', 'uttar pradesh', 'uttar pradesh', 'rajasthan', 'maharashtra', 'uttar pradesh', 'jharkhand', 'chhattisgarh', 'odisha', 'uttar pradesh', 'kerala', 'andhra pradesh', 'gujarat', 'uttarakhand', 'west bengal', 'west bengal', 'odisha', 'maharashtra', 'maharashtra', 'rajasthan', 'maharashtra', 'karnataka', 'gujarat', 'madhya pradesh', 'uttar pradesh', 'west bengal', 'uttar pradesh', 'maharashtra', 'jammu and kashmir', 'maharashtra', 'karnataka', 'tamil nadu', 'karnataka', 'andhra pradesh', 'tamil nadu', 'andhra pradesh', 'tamil nadu', 'maharashtra', 'bihar', 'andhra pradesh', 'rajasthan', 'andhra pradesh', 'karnataka', 'kerala', 'west bengal', 'west bengal', 'jharkhand', 'west bengal', 'karnataka', 'punjab', 'tripura', 'bihar', 'uttar pradesh', 'west bengal', 'west bengal', 'maharashtra', 'maharashtra', 'haryana', 'madhya pradesh', 'chhattisgarh', 'rajasthan', 'odisha', 'bihar', 'maharashtra', 'uttar pradesh', 'kerala', 'tamil nadu', 'andhra pradesh', 'andhra pradesh', 'west bengal', 'odisha', 'chhattisgarh', 'uttar pradesh', 'maharashtra', 'karnataka', 'uttar pradesh', 'karnataka', 'maharashtra', 'gujarat', 'kerala', 'rajasthan', 'west bengal', 'west bengal', 'telangana', 'maharashtra', 'karnataka', 'telangana', 'puducherry', 'bihar', 'haryana', 'bihar', 'west bengal', 'mizoram', 'madhya pradesh', 'maharashtra', 'haryana', 'punjab', 'maharashtra', 'andhra pradesh', 'west bengal', 'delhi', 'bihar', 'madhya pradesh', 'uttar pradesh', 'haryana', 'uttar pradesh', 'chhattisgarh', 'manipur', 'madhya pradesh', 'uttar pradesh', 'bihar', 'andhra pradesh', 'telangana', 'uttar pradesh', 'maharashtra', 'west bengal', 'rajasthan', 'bihar', 'delhi', 'gujarat', 'west bengal', 'tamil nadu', 'puducherry', 'rajasthan', 'tamil nadu', 'madhya pradesh', 'uttar pradesh', 'karnataka', 'rajasthan', 'telangana', 'assam', 'uttarakhand', 'andhra pradesh', 'andhra pradesh', 'tamil nadu', 'rajasthan', 'delhi', 'jharkhand', 'tamil nadu', 'uttar pradesh', 'west bengal', 'madhya pradesh', 'uttar pradesh', 'madhya pradesh', 'gujarat', 'telangana', 'west bengal', 'haryana', 'west bengal', 'tamil nadu', 'karnataka', 'bihar', 'haryana', 'madhya pradesh', 'odisha', 'west bengal', 'tamil nadu', 'gujarat', 'karnataka', 'delhi', 'west bengal', 'andhra pradesh', 'jharkhand', 'bihar', 'west bengal', 'madhya pradesh', 'andhra pradesh', 'madhya pradesh', 'uttar pradesh', 'gujarat', 'madhya pradesh', 'delhi', 'west bengal', 'haryana', 'west bengal', 'haryana', 'gujarat', 'uttar pradesh', 'uttar pradesh', 'uttar pradesh', 'andhra pradesh', 'maharashtra', 'uttar pradesh', 'uttar pradesh', 'jharkhand', 'tamil nadu', 'gujarat', 'west bengal', 'haryana', 'bihar', 'west bengal', 'delhi', 'madhya pradesh', 'uttar pradesh', 'maharashtra', 'madhya pradesh', 'gujarat', 'uttar pradesh', 'west bengal', 'kerala', 'kerala', 'andhra pradesh', 'himachal pradesh', 'andhra pradesh', 'karnataka', 'bihar', 'andhra pradesh', 'telangana', 'bihar', 'assam', 'assam', 'jharkhand', 'andhra pradesh', 'assam', 'bihar', 'bihar', 'andaman and nicobar islands ut', 'jharkhand', 'andhra pradesh', 'tamil nadu', 'assam', 'bihar', 'andhra pradesh', 'bihar', 'bihar', 'jharkhand', 'assam', 'andhra pradesh', 'andhra pradesh', 'bihar', 'andhra pradesh', 'jharkhand', 'andhra pradesh', 'punjab', 'tamil nadu', 'tamil nadu', 'andhra pradesh', 'telangana', 'telangana', 'andhra pradesh', 'tamil nadu', 'bihar', 'bihar', 'uttar pradesh', 'andhra pradesh', 'andhra pradesh', 'andhra pradesh', 'bihar', 'assam', 'bihar', 'bihar', 'sikkim', 'goa']

let cityDb = ['maharashtra', 'delhi', 'karnataka', 'telangana', 'gujarat', 'tamil nadu', 'west bengal', 'gujarat', 'maharashtra', 'rajasthan', 'uttar pradesh', 'uttar pradesh', 'maharashtra', 'madhya pradesh', 'maharashtra', 'madhya pradesh', 'andhra pradesh', 'maharashtra', 'bihar', 'gujarat', 'uttar pradesh', 'punjab', 'uttar pradesh', 'maharashtra', 'jharkhand', 'haryana', 'uttar pradesh', 'gujarat', 'maharashtra', 'maharashtra', 'uttar pradesh', 'jammu and kashmir', 'maharashtra', 'jharkhand', 'punjab', 'maharashtra', 'uttar pradesh', '[5]', 'west bengal', 'madhya pradesh', 'madhya pradesh', 'tamil nadu', 'andhra pradesh', 'rajasthan', 'tamil nadu', 'chhattisgarh', 'rajasthan', 'chandigarh', 'assam', 'maharashtra', 'karnataka', 'karnataka', 'tamil nadu', 'uttar pradesh', 'uttar pradesh', 'tamil nadu', 'haryana', 'uttar pradesh', 'punjab', 'odisha', 'tamil nadu', 'telangana', 'maharashtra', 'maharashtra', 'andhra pradesh', 'kerala', 'maharashtra', 'uttar pradesh', 'uttar pradesh', 'rajasthan', 'maharashtra', 'uttar pradesh', 'jharkhand', 'chhattisgarh', 'odisha', 'uttar pradesh', 'kerala', 'andhra pradesh', 'gujarat', 'uttarakhand', 'west bengal', 'west bengal', 'odisha', 'maharashtra', 'maharashtra', 'rajasthan', 'maharashtra', 'karnataka', 'gujarat', 'madhya pradesh', 'uttar pradesh', 'west bengal', 'uttar pradesh', 'maharashtra', 'jammu and kashmir', 'maharashtra', 'karnataka', 'tamil nadu', 'karnataka', 'andhra pradesh', 'tamil nadu', 'andhra pradesh', 'tamil nadu', 'maharashtra', 'bihar', 'andhra pradesh', 'rajasthan', 'andhra pradesh', 'karnataka', 'kerala', 'west bengal', 'west bengal', 'jharkhand', 'west bengal', 'karnataka', 'punjab', 'tripura', 'bihar', 'uttar pradesh', 'west bengal', 'west bengal', 'maharashtra', 'maharashtra', 'haryana', 'madhya pradesh', 'chhattisgarh', 'rajasthan', 'odisha', 'bihar', 'maharashtra', 'uttar pradesh', 'kerala', 'tamil nadu', 'andhra pradesh', 'andhra pradesh', 'west bengal', 'odisha', 'chhattisgarh', 'uttar pradesh', 'maharashtra', 'karnataka', 'uttar pradesh', 'karnataka', 'maharashtra', 'gujarat', 'kerala', 'rajasthan', 'west bengal', 'west bengal', 'telangana', 'maharashtra', 'karnataka', 'telangana', 'puducherry', 'bihar', 'haryana', 'bihar', 'west bengal', 'mizoram', 'madhya pradesh', 'maharashtra', 'haryana', 'punjab', 'maharashtra', 'andhra pradesh', 'west bengal', 'delhi', 'bihar', 'madhya pradesh', 'uttar pradesh', 'haryana', 'uttar pradesh', 'chhattisgarh', 'manipur', 'madhya pradesh', 'uttar pradesh', 'bihar', 'andhra pradesh', 'telangana', 'uttar pradesh', 'maharashtra', 'west bengal', 'rajasthan', 'bihar', 'delhi', 'gujarat', 'west bengal', 'tamil nadu', 'puducherry', 'rajasthan', 'tamil nadu', 'madhya pradesh', 'uttar pradesh', 'karnataka', 'rajasthan', 'telangana', 'assam', 'uttarakhand', 'andhra pradesh', 'andhra pradesh', 'tamil nadu', 'rajasthan', 'delhi', 'jharkhand', 'tamil nadu', 'uttar pradesh', 'west bengal', 'madhya pradesh', 'uttar pradesh', 'madhya pradesh', 'gujarat', 'telangana', 'west bengal', 'haryana', 'west bengal', 'tamil nadu', 'karnataka', 'bihar', 'haryana', 'madhya pradesh', 'odisha', 'west bengal', 'tamil nadu', 'gujarat', 'karnataka', 'delhi', 'west bengal', 'andhra pradesh', 'jharkhand', 'bihar', 'west bengal', 'madhya pradesh', 'andhra pradesh', 'madhya pradesh', 'uttar pradesh', 'gujarat', 'madhya pradesh', 'delhi', 'west bengal', 'haryana', 'west bengal', 'haryana', 'gujarat', 'uttar pradesh', 'uttar pradesh', 'uttar pradesh', 'andhra pradesh', 'maharashtra', 'uttar pradesh', 'uttar pradesh', 'jharkhand', 'tamil nadu', 'gujarat', 'west bengal', 'haryana', 'bihar', 'west bengal', 'delhi', 'madhya pradesh', 'uttar pradesh', 'maharashtra', 'madhya pradesh', 'gujarat', 'uttar pradesh', 'west bengal', 'kerala', 'kerala', 'andhra pradesh', 'himachal pradesh', 'andhra pradesh', 'karnataka', 'bihar', 'andhra pradesh', 'telangana', 'bihar', 'assam', 'assam', 'jharkhand', 'andhra pradesh', 'assam', 'bihar', 'bihar', 'andaman and nicobar islands ut', 'jharkhand', 'andhra pradesh', 'tamil nadu', 'assam', 'bihar', 'andhra pradesh', 'bihar', 'bihar', 'jharkhand', 'assam', 'andhra pradesh', 'andhra pradesh', 'bihar', 'andhra pradesh', 'jharkhand', 'andhra pradesh', 'punjab', 'tamil nadu', 'tamil nadu', 'andhra pradesh', 'telangana', 'telangana', 'andhra pradesh', 'tamil nadu', 'bihar', 'bihar', 'uttar pradesh', 'andhra pradesh', 'andhra pradesh', 'andhra pradesh', 'bihar', 'assam', 'bihar', 'bihar', 'sikkim', 'goa']
let resourcesDb = ['remdesivir','bed','plasma','oxygen']

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

    // convert all letter to lowercase to match the local keywords
    var string = text,
    regex = /[A-Z]/g;

    var modified = string.replace(regex, function(match) {
      return match.toLowerCase();
    });

    // spliting alll the words to compare
    let eachKeyword = modified.split(" ");
    console.log(eachKeyword);

    // get the keywords from local db
    let newArr = eachKeyword.filter(word => {
        return db.includes(word)
    });

    let city = [];
    let resource = [];

    // convert first letter to Upper Case to match the keywords in Atlas DB

    newArr.map(x=>{
        if(cityDb.includes(x)) return city.push(x)
        else if (resourcesDb.includes(x)) return resource.push(x)
    })
    
    let foundCities = city.map(word=>{
        let warray = word.split('');
        warray[0] = warray[0].toUpperCase();
        let newWord = '';
        warray.map(letter=> newWord+=letter);
        return newWord;
    });

    let foundResources = resource.map(word=>{
        let warray = word.split('');
        warray[0] = warray[0].toUpperCase();
        let newWord = '';
        warray.map(letter=> newWord+=letter);
        return newWord;
    })

    //respond with the matched keywords
    return res.status(200).json({city: foundCities, resource: foundResources});
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