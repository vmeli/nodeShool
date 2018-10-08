var fs = require('fs');
var file = process.argv[2];

function callback(err, data) {
	if(err) {
		return console.log(err);
	}
	console.log(data.toString().split('\n').length - 1);
}

var buf = fs.readFile(file, callback);
