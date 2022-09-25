
process.stdin.on('data', function (input) {
	console.log("Hello:1: ", input);
});

process.stdin.on('data', 
	function (input) { //funct 2
		if(input.toString().startsWith("exit")){
			process.exit(0);
		}
});

// Buffer
var buf = Buffer.from('Hello')
console.log("Buf1", buf) 
console.log("Buf1", buf.length) // Length of Buffer
console.log(buf.toString('utf-8'))

var uBuf = Buffer.alloc(7) // Uninitialized Buffer
console.log("uBuf: ", uBuf)

// Pipe to give back same data
// stdin/stdout - both are streams
process.stdin.pipe(process.stdout)