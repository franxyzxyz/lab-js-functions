// Question 1
function maxOfTwoNumbers(a,b) {
	if (a>b){
		return a;
	}else{
		return b;
	}
}

// Question 2
function maxOfThree(a,b,c) {
	return Math.max(a,b,c);
}

// Question 3
function isCharacterAVowel(a) {
	if (a.length>1){
		return "This is not a character";
	}else{
		if (a == "a" || a == "e"){
			return true;
		}else{
			return false;
		}
	}
}

// Question 4
function sumArray(Arr) {
    var sum = 0;
	if (typeof(Arr) == 'object'){
        Arr.every(elem => sum +=elem);
	}
	return sum;
}


// Question 4
function multiplyArray(Arr) {
  var sum = 1;
	if (typeof(Arr) == 'object'){
        Arr.every(elem => sum * elem);
	}
	return sum;
}


// Question 5
var numberOfArguments = function(){
    console.log(arguments.length)
}



// Question 6
var reverseString = function(str){
  var rtnStr = "";
  for(var i=str.length-1;i>=0;i--){
  	rtnStr += str[i];
  }
  return rtnStr;
};


// Question 7
var arrWords = ['apple','orange','pineapple'];
function findLongestWord (arrWords) {
  var rtnArr = []; 
	arrWords.forEach(function(element){
		rtnArr.push(element.length);
	})
	return arrWords[rtnArr.indexOf(Math.max.apply(this,rtnArr))];
}


// Question 8
function filterLongWords (Arr,i) {
	Arr.forEach(function(element){
		if(element.length>i){
			console.log(element);
		}
	})  
}


// Bonus 1
//??????
String.prototype.reverseString = function(){
  var str = this;
  var rtnStr = "";
  for(var i=str.length-1;i>=0;i--){
  	rtnStr += str[i];
  }
  return rtnStr;
}


// Bonus 2
function charactersOccurencesCount(str) {
    str = (str.toLowerCase()).replace(" ","");
  for (i=0;i<str.length;i++){
    this[str[i]] = (str.split(str[i])).length-1;
  }
}
var result = new charactersOccurencesCount("General Assembly");