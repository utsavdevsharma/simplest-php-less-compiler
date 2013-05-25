var less = require('less'), fs = require('fs');
var parser = new(less.Parser)({
    filename: "less/style.less"
});
fs.readFile("less/style.less", function read(err, data){
    if(err) {
        return console.error(err);
    }
    parser.parse(data.toString(), function (err, tree){
        try {
            var css = tree.toCSS({ compress: true });
        } catch(ex) {
            return console.error(ex);
        }
        fs.writeFile("css/style.css", css);
        if (err) {
            return console.error(err);
        }
    });
});