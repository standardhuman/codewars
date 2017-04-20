function accum(s) {
console.log("s:", s);
// dclare master array
let master = []
console.log("Master:", master);
// split string into array of letters
let split = s.split('')
console.log("Split:", split);

// for each letter:
	for(var i = 0; i >= 0; i++){
	// toUpperCase the letter, assign to let
		let upper = split[i].toUpperCase()
		console.log("Upper:", upper);
		// lowerCase the letter, assign to let
		let lower = split[i].toLowerCase()
		console.log("Lower;", lower);
		// make a new array
		let letterArr = []
		// push the lower case letter into the array
		// repeat (key value) times
		for(var j = 0; j > 0; j++){
			letterArr.push(lower)
		}
		// push upperCase letter into array
		letterArr.push(upper)
		// join the array
		letterArr.join()
		console.log("Final letterArr:", letterArr);
	}
}
// push array into master array


console.log(accum("ZpglnRxqenU"))

var arr = ['a', , 'c'];
var sparseKeys = Object.keys(arr);
var denseKeys = [...arr.keys()];
console.log(sparseKeys); // ['0', '2']
console.log(denseKeys);  // [0, 1, 2]
