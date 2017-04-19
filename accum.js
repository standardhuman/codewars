function accum(s) {
	// your code
	const split = s.split('')
	let index = Object.keys(split)
	console.log(index);

  for(let letter in split){
		// determine the index number of letter
		// need to use keys here
		// set letter to uppercase
		let upper = letter.toUpperCase()
		// get lower case version of letter
		let lower = letter.toLowerCase()
		// add lower to upper index number of times
		let combined = upper + lower
		// console.log(combined);
}
	return split;
//   split s
//  push(print each index value toUpperCase + print x index value)
// join
}

console.log(accum("ZpglnRxqenU"));

var arr = ['a', , 'c'];
var sparseKeys = Object.keys(arr);
var denseKeys = [...arr.keys()];
console.log(sparseKeys); // ['0', '2']
console.log(denseKeys);  // [0, 1, 2]
