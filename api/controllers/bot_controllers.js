const {
    default: axios
} = require('axios');
let Twit = require('twit');
const {
    domain,
    db_domain,
    webApp_domain
} = require('../../config');
let Twitter = new Twit(require('../../config'));

let db = ['remdesivir', 'bed', 'plasma', 'oxygen', 'ahmedabad', 'surat','gandhinagar', 'pune', 'kanpur', 'nagpur', 'indore', 'thane', 'salem', 'pimpri-chinchwad', 'vadodara', 'ghaziabad', 'ludhiana', 'agra', 'nashik', 'faridabad', 'meerut', 'rajkot', 'kalyan-dombivli', 'vasai-virar', 'varanasi', 'aurangabad', 'dhanbad', 'amritsar', 'navi mumbai', 'allahabad', 'howrah', 'gwalior', 'jabalpur', 'coimbatore', 'vijayawada', 'jodhpur', 'madurai', 'kota', 'solapur', 'hubli–dharwad', 'mysore', 'tiruchirappalli', 'bareilly', 'aligarh', 'tiruppur', 'gurgaon', 'moradabad', 'jalandhar', 'warangal', 'mira-bhayandar', 'jalgaon', 'guntur', 'bhiwandi', 'saharanpur', 'gorakhpur', 'bikaner', 'amravati', 'noida', 'jamshedpur', 'bhilai', 'cuttack', 'firozabad', 'kochi', 'nellore', 'bhavnagar', 'durgapur', 'asansol', 'rourkela', 'nanded', 'kolhapur', 'ajmer', 'akola', 'gulbarga', 'jamnagar', 'ujjain', 'loni', 'siliguri', 'jhansi', 'ulhasnagar', 'sangli-miraj &amp; kupwad', 'mangalore', 'erode', 'belgaum', 'kurnool', 'ambattur', 'rajahmundry', 'tirunelveli', 'malegaon', 'gaya', 'tirupati', 'udaipur', 'kakinada', 'davanagere', 'kozhikode', 'maheshtala', 'rajpur sonarpur', 'bokaro', 'south dumdum', 'bellary', 'patiala', 'gopalpur', 'bhagalpur', 'muzaffarnagar', 'bhatpara', 'panihati', 'latur', 'dhule', 'rohtak', 'sagar', 'korba', 'bhilwara', 'berhampur', 'muzaffarpur', 'ahmednagar', 'mathura', 'kollam', 'avadi', 'kadapa', 'anantapuram', 'kamarhati', 'bilaspur', 'sambalpur', 'shahjahanpur', 'satara', 'bijapur', 'rampur', 'shimoga', 'chandrapur', 'junagadh', 'thrissur', 'alwar', 'bardhaman', 'kulti', 'nizamabad', 'parbhani', 'tumkur', 'khammam', 'uzhavarkarai', 'bihar sharif', 'panipat', 'darbhanga', 'bally', 'dewas', 'ichalkaranji', 'karnal', 'bathinda', 'jalna', 'eluru', 'barasat', 'kirari suleman nagar', 'purnia', 'satna', 'mau', 'sonipat', 'farrukhabad', 'durg', 'ratlam', 'hapur', 'arrah', 'anantapur', 'karimnagar', 'etawah', 'ambarnath', 'north dumdum', 'bharatpur', 'begusarai', 'delhi', 'gandhidham', 'baranagar', 'tiruvottiyur', 'sikar', 'thoothukudi', 'rewa', 'mirzapur', 'raichur', 'pali', 'ramagundam', 'silchar', 'haridwar', 'vijayanagaram', 'tenali', 'nagercoil', 'sri ganganagar', 'karawal nagar', 'mango', 'thanjavur', 'bulandshahr', 'uluberia', 'katni', 'sambhal', 'singrauli', 'nadiad', 'secunderabad', 'naihati', 'yamunanagar', 'bidhannagar', 'pallavaram', 'bidar', 'munger', 'panchkula', 'burhanpur', 'raurkela industrial township', 'kharagpur', 'dindigul', 'hospet', 'nangloi jat', 'malda', 'ongole', 'deoghar', 'chapra', 'haldia', 'khandwa', 'nandyal', 'morena', 'amroha', 'anand', 'bhind', 'bhalswa jahangir pur', 'madhyamgram', 'bhiwani', 'berhampore', 'ambala', 'morbi', 'fatehpur', 'raebareli', 'khora, ghaziabad', 'chittoor', 'bhusawal', 'orai', 'bahraich', 'phusro', 'vellore', 'mehsana', 'raiganj', 'sirsa', 'danapur', 'serampore', 'sultan pur majra', 'guna', 'jaunpur', 'panvel', 'shivpuri', 'surendranagar dudhrej', 'unnao', 'chinsurah', 'alappuzha', 'kottayam', 'machilipatnam', 'adoni', 'udupi', 'katihar', 'proddatur', 'mahbubnagar', 'saharsa', 'dibrugarh', 'jorhat', 'hazaribagh', 'hindupur', 'nagaon', 'sasaram', 'hajipur', 'giridih', 'bhimavaram', 'kumbakonam', 'bongaigaon', 'dehri', 'madanapalle', 'siwan', 'bettiah', 'ramgarh', 'tinsukia', 'guntakal', 'srikakulam', 'motihari', 'dharmavaram', 'medininagar', 'gudivada', 'phagwara', 'pudukkottai', 'hosur', 'narasaraopet', 'suryapet', 'miryalaguda', 'tadipatri', 'karaikudi', 'kishanganj', 'jamalpur', 'ballia', 'kavali', 'tadepalligudem', 'buxar', 'tezpur', 'jehanabad', 'aurangabad', 'vasco da gama']

let cityDb = ['ahmedabad', 'surat','gandhinagar', 'pune', 'kanpur', 'nagpur', 'indore', 'thane', 'salem', 'pimpri-chinchwad', 'vadodara', 'ghaziabad', 'ludhiana', 'agra', 'nashik', 'faridabad', 'meerut', 'rajkot', 'kalyan-dombivli', 'vasai-virar', 'varanasi', 'aurangabad', 'dhanbad', 'amritsar', 'navi mumbai', 'allahabad', 'howrah', 'gwalior', 'jabalpur', 'coimbatore', 'vijayawada', 'jodhpur', 'madurai', 'kota', 'solapur', 'hubli–dharwad', 'mysore', 'tiruchirappalli', 'bareilly', 'aligarh', 'tiruppur', 'gurgaon', 'moradabad', 'jalandhar', 'warangal', 'mira-bhayandar', 'jalgaon', 'guntur', 'bhiwandi', 'saharanpur', 'gorakhpur', 'bikaner', 'amravati', 'noida', 'jamshedpur', 'bhilai', 'cuttack', 'firozabad', 'kochi', 'nellore', 'bhavnagar', 'durgapur', 'asansol', 'rourkela', 'nanded', 'kolhapur', 'ajmer', 'akola', 'gulbarga', 'jamnagar', 'ujjain', 'loni', 'siliguri', 'jhansi', 'ulhasnagar', 'sangli-miraj &amp; kupwad', 'mangalore', 'erode', 'belgaum', 'kurnool', 'ambattur', 'rajahmundry', 'tirunelveli', 'malegaon', 'gaya', 'tirupati', 'udaipur', 'kakinada', 'davanagere', 'kozhikode', 'maheshtala', 'rajpur sonarpur', 'bokaro', 'south dumdum', 'bellary', 'patiala', 'gopalpur', 'bhagalpur', 'muzaffarnagar', 'bhatpara', 'panihati', 'latur', 'dhule', 'rohtak', 'sagar', 'korba', 'bhilwara', 'berhampur', 'muzaffarpur', 'ahmednagar', 'mathura', 'kollam', 'avadi', 'kadapa', 'anantapuram', 'kamarhati', 'bilaspur', 'sambalpur', 'shahjahanpur', 'satara', 'bijapur', 'rampur', 'shimoga', 'chandrapur', 'junagadh', 'thrissur', 'alwar', 'bardhaman', 'kulti', 'nizamabad', 'parbhani', 'tumkur', 'khammam', 'uzhavarkarai', 'bihar sharif', 'panipat', 'darbhanga', 'bally', 'dewas', 'ichalkaranji', 'karnal', 'bathinda', 'jalna', 'eluru', 'barasat', 'kirari suleman nagar', 'purnia', 'satna', 'mau', 'sonipat', 'farrukhabad', 'durg', 'ratlam', 'hapur', 'arrah', 'anantapur', 'karimnagar', 'etawah', 'ambarnath', 'north dumdum', 'bharatpur', 'begusarai', 'delhi', 'gandhidham', 'baranagar', 'tiruvottiyur', 'sikar', 'thoothukudi', 'rewa', 'mirzapur', 'raichur', 'pali', 'ramagundam', 'silchar', 'haridwar', 'vijayanagaram', 'tenali', 'nagercoil', 'sri ganganagar', 'karawal nagar', 'mango', 'thanjavur', 'bulandshahr', 'uluberia', 'katni', 'sambhal', 'singrauli', 'nadiad', 'secunderabad', 'naihati', 'yamunanagar', 'bidhannagar', 'pallavaram', 'bidar', 'munger', 'panchkula', 'burhanpur', 'raurkela industrial township', 'kharagpur', 'dindigul', 'hospet', 'nangloi jat', 'malda', 'ongole', 'deoghar', 'chapra', 'haldia', 'khandwa', 'nandyal', 'morena', 'amroha', 'anand', 'bhind', 'bhalswa jahangir pur', 'madhyamgram', 'bhiwani', 'berhampore', 'ambala', 'morbi', 'fatehpur', 'raebareli', 'khora, ghaziabad', 'chittoor', 'bhusawal', 'orai', 'bahraich', 'phusro', 'vellore', 'mehsana', 'raiganj', 'sirsa', 'danapur', 'serampore', 'sultan pur majra', 'guna', 'jaunpur', 'panvel', 'shivpuri', 'surendranagar dudhrej', 'unnao', 'chinsurah', 'alappuzha', 'kottayam', 'machilipatnam', 'adoni', 'udupi', 'katihar', 'proddatur', 'mahbubnagar', 'saharsa', 'dibrugarh', 'jorhat', 'hazaribagh', 'hindupur', 'nagaon', 'sasaram', 'hajipur', 'giridih', 'bhimavaram', 'kumbakonam', 'bongaigaon', 'dehri', 'madanapalle', 'siwan', 'bettiah', 'ramgarh', 'tinsukia', 'guntakal', 'srikakulam', 'motihari', 'dharmavaram', 'medininagar', 'gudivada', 'phagwara', 'pudukkottai', 'hosur', 'narasaraopet', 'suryapet', 'miryalaguda', 'tadipatri', 'karaikudi', 'kishanganj', 'jamalpur', 'ballia', 'kavali', 'tadepalligudem', 'buxar', 'tezpur', 'jehanabad', 'aurangabad', 'vasco da gama']
let resourcesDb = ['remdesivir', 'bed', 'plasma', 'oxygen', 'beds']

exports.search_all_related_tweets = (req, res) => {
    const {
        key
    } = req.query;
    Twitter.get('search/tweets', {
        q: key,
        count: 100
    }, function (err, data, response) {
        // console.log(data.statuses);
        let tweetText = [];
        let reqDetails = [];
        data.statuses.map(tweet => {
            if (!tweetText.includes(tweet.text.split(":")[1])) {
                tweetText.push(tweet.text.split(":")[1]);
                //console.log(tweet);
                return reqDetails.push({
                    id: tweet.id,
                    id_str:tweet.id_str,
                    text: tweet.text,
                    screen_name: tweet.user.screen_name
                })
            }

        })
        return res.status(200).json({
            results: reqDetails
        });
    });
};

// exports.search_keywords_in_tweets = (req, res) => {

//     const {
//         text
//     } = req.body;

//     // convert all letter to lowercase to match the local keywords
//     var string = text,
//         regex = /[A-Z]/g;

//     var modified = string.replace(regex, function (match) {
//         return match.toLowerCase();
//     });
//     console.log(modified);

//     // spliting alll the words to compare
//     let eachKeyword = modified.split(" ");
//     console.log(eachKeyword);

//     // get the keywords from local db
//     let newArr = eachKeyword.filter(word => {
//         return db.includes(word)
//     });

//     let city = [];
//     let resource = [];

//     // convert first letter to Upper Case to match the keywords in Atlas DB

//     newArr.map(x => {
//         if (cityDb.includes(x)) return city.push(x)
//         else if (resourcesDb.includes(x)) return resource.push(x)
//     })
//     console.log(city)
//     let foundCities = city.map(word => {
//         let warray = word.split('');
//         warray[0] = warray[0].toUpperCase();
//         let newWord = '';
//         warray.map(letter => newWord += letter);
//         console.log(newWord);
//         return newWord;
//     });

//     let foundResources = resource.map(word => {
//         let warray = word.split('');
//         warray[0] = warray[0].toUpperCase();
//         let newWord = '';
//         warray.map(letter => newWord += letter);
//         return newWord;
//     })

//     console.log(foundCities, foundResources);

//     //respond with the matched keywords
//     return res.status(200).json({
//         city: foundCities,
//         resource: foundResources
//     });
// };

exports.reply = async (req, res) => {

    const {
        text,
        id,
        id_str,
        screen_name
    } = req.body;

    function getKeys(text) {
        let modif = {};
        // convert all letter to lowercase to match the local keywords
        var string = text,
            regex = /[A-Z]/g;

        var modified = string.replace(regex, function (match) {
            return match.toLowerCase();
        });
        //console.log(modified);

        // spliting alll the words to compare
        let eachKeyword = modified.split(" ");
        //console.log(eachKeyword);

        // get the keywords from local db
        let newArr = eachKeyword.filter(word => {
            return db.includes(word)
        });

        let city = [];
        let resource = [];

        // convert first letter to Upper Case to match the keywords in Atlas DB

        newArr.map(x => {
            if (cityDb.includes(x)) return city.push(x)
            else if (resourcesDb.includes(x)) return resource.push(x)
        })
        //console.log(city)
        let foundCities = city.map(word => {
            let warray = word.split('');
            warray[0] = warray[0].toUpperCase();
            let newWord = '';
            warray.map(letter => newWord += letter);
            //console.log(newWord);
            return newWord;
        });

        let foundResources = resource.map(word => {
            let warray = word.split('');
            warray[0] = warray[0].toUpperCase();
            let newWord = '';
            warray.map(letter => newWord += letter);
            return newWord;
        })
        modif.foundCities = foundCities;
        modif.foundResources = foundResources;
        //console.log(modif)
        return modif ;

    }

    try {
        botKeywordsRes = getKeys(text);
        let city = botKeywordsRes.foundCities;
        let resourceReq = botKeywordsRes.foundResources;
        console.log(city, resourceReq);


        // // making api call to db
        // let resDB = await axios.get("https://devapi.covidhelpindia.org/suppliers/1/100/Mumbai");
        // //console.log(resDB.data.results);
        // let solutions = [];
        // resDB.data.results.map(item=>{
        //     item.city === city[0] && solutions.push(item)
        // })
        
        // let responseTweet = '';
        // //console.log("solutions are here", solutions);
        // for(let i=0; i<solutions.length; i++){
        //     let x = solutions[i];
        //     console.log(x);
        //     responseTweet += `(${i+1}) ${x.name} ${x.address} near ${x.landmark} phone:${x.phone_1} oxygen: ${x.oxygen_avail}  ICU Ventilator:${x.icu_ventilator_avail}`
        // }

        // console.log("here", responseTweet);
        // /info?city=<City name>&resource=<Resource Name>
        let responseTweet = '';
        let originalTweetData = {
            id_str,
            screen_name
        }

        for(let x of resourceReq){
            responseTweet += `${webApp_domain}/info?city=${city[0]}&resource=${x} `
        }
    
        const replyFunc = function(tweet, reply) {
            let sol_res = {
              status: reply +' @' + tweet.screen_name,
              in_reply_to_status_id: tweet.id_str,
              auto_populate_reply_metadata: true
            };
            //console.log(sol_res);
    
            Twitter.post('statuses/update', sol_res,
              function(err, data, response) {

                if(err) return console.log(err);
                console.log(data);
                res.status(200).json({resp : reply, to: tweet.screen_name  });
              }
            );
          }
        
        replyFunc(originalTweetData, responseTweet);

        

        
    } catch (err) {
        res.status(400).json(err)
    }

    // const tweet= {screen_name, responseSolutions}



    //  reply(tweet);

    // Twitter.post(
    //     'statuses/retweet/:id', {
    //         id: id
    //     },
    //     function (err, data, response) {
    //         if (err) { // here
    //             console.log(err.message);
    //             return res.status(500).json({message:"some error occured"});
    //         } else {
    //             console.log("DONE");
    //             return res.status(200).json({message:"Retweeted"});
    //         }
    //     }
    // );
};