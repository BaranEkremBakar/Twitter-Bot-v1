console.log("MuhabirDev Aktif");

var Twit = require("twit");

var config = require('./config');
console.log(config);
var T = new Twit({
})


T.post('statuses/update', { status: '“If I don’t have some cake soon, I might die.” – Stanley Hudson' }, function (err, data, response) {
    console.log(data)
});