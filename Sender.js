const Twit = require("twit");
const config = require("./config");

console.log("Sender is Active");
console.log(config);

var T = new Twit({
    consumer_key: config.consumer_key,
    consumer_secret: config.consumer_secret,
    access_token: config.access_token,
    access_token_secret: config.access_token_secret,
});

// setInterval(tweetIt, 1000*60*60*24)


function tweetIt() {

    var tweet = {
        status: "Baran Deneme"
    };


    function tweeted(err, data, response) {
        if (err) {
            console.log("Something is off!");
        }
        else {
            console.log(data);
            console.log("It works well");
        }
    }
    T.post("statuses/update", tweet, tweeted,);
};

tweetIt();

