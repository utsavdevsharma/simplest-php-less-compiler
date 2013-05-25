console.error("@");
var fs = require('fs');
var lessCss = fs.readFile("../less/style.less", function read(err, data){
    if(err) {
        return console.error(err);
    }
    console.error(data+"#");
});
console.error(lessCss+"@");