var fs = require('fs');
var files = fs.readdirSync('./assets/');
var outputArray = []
for(var i = 0; i < files.length; i++) {
    outputArray.push(files[i])
}

fs.writeFile("./namesArray.txt", "var fileNames = " + JSON.stringify(outputArray), function(err) {
    if(err) {
        return console.log(err);
    }
    s
    console.log("The file was saved!");
});