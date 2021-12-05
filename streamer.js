const Twit = require("twit");
const config = require("./config");
var fs = require("fs");
// const tweetIt = require("./Sender");

var T = new Twit(config);

//Setting up a user stream
var stream = T.stream('statuses/filter', { track: '@Baranekrembakar' });


//anytime someone follows
function tweetEvent(eventMsg) {
    var json = JSON.stringify(eventMsg);
    fs.writeFileSync("tweet.json", json);

};
stream.on("tweet", tweetEvent);




