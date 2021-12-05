const Twit = require("twit");
const config = require("./config");

var T = new Twit(config);

var twit = new Twit(config);
var stream = twit.stream('statuses/filter', {follow: ['826500675899101189', '614527166']});

stream.on('tweet', tweet => {
  if(tweet.retweeted || tweet.retweeted_status || tweet.in_reply_to_status_id || tweet.in_reply_to_user_id || tweet.delete) {
    // skip retweets and replies
    return;
  }
  console.log(`${tweet.user.name} posted: ${tweet.text}`);
});
