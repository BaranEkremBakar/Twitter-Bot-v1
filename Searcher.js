const Twit = require("twit");
const config = require("./config");

console.log("Friendly UAV Inbound");
console.log(config);


var T = new Twit(config);
var params = { 
    q: "since:2021-11-23",
    count: 100,
    from: "ubaranzorlu",
    
};

T.get('search/tweets', params, gotData);

function gotData(err, data, response) {
    var tweets = data.statuses;
    for (var i = 0; i < tweets.length; i++) {        
    }
    console.log(data)
};
   
