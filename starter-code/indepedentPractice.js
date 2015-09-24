//  1. Write a function `lengths` that accepts a single parameter as an argument, namely
// an array of strings. The function should return an array of numbers where each
// number is the length of the corresponding string.

// your code here
var words = ["hello", "what", "is", "up", "dude"]
function lengths(strArr){
	rtnStr = [];
	for (i=0;i<strArr.length;i++){
		rtnStr.push(strArr[i].length);
	}
	return rtnStr;
}

// 2. Write a Javascript function called `transmogrifier`
// This function should accept three arguments, which you can assume will be numbers.
// Your function should return the "transmogrified" result
//
// The transmogrified result of three numbers is the product of the first two numbers,
// raised to the power of the third number.

// your code here
function transmogrifier(a,b,c){
	return Math.pow((a*b),c)
}

// 3. Write a function `wordReverse` that accepts a single argument, a string. The
// method should return a string with the order of the words reversed. Don't worry
// about punctuation.

// your code here
function wordReverse(str){
	var strSplit = str.split(' ');
	rtnStr = "";
	for (i=strSplit.length-1;i>=0;i--){
		rtnStr = rtnStr + strSplit[i] + " ";
	}
	return rtnStr;
}
