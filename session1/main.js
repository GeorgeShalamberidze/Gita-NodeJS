var fs = require('fs'); //fs is module
// include 
// import

console.log("Hello world ...");
// 3-4 lines
// JS
// a = 90 //number 
// a = "Vivek" //string 
// a = true //boolean 
// a = function(){} //function 
// a = () => {} //function 
// a = {}  or [] //object 

var commands = {
'pwd': function () {
	console.log(process.cwd());
},
'ls': function (args) { // New property added here.
	fs.readdir(args[0] || process.cwd(), function (err, entries) {
		entries.forEach(function (e) {
			console.log(e);
		});
	});
},
'sum':function(args){
	console.log("sum is "+(parseInt(args[0]) +parseInt(args[1])));
},
'add': function(args) {
    var sum = 0
    args.forEach((a) => {
        if (!isNaN(a)) {
            sum += parseInt(a)
        }
    })
    console.log('sum is :', sum)
}	
};


process.stdin.on('data', function (input) {
	var matches = input.toString().match(/(\w+)(.*)/);
	var command = matches[1].toLowerCase();
	var args = matches[2].trim().split(/\s+/);
	try{
		commands[command](args);	
	}catch(e){
		console.log("Error:"+e);
	}
});