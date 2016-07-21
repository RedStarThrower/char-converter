// (FOR BOTH FOMRATS) Helper function to test for ASCII characters and convert non-ASCII characters to unicode

function strConverter(str){
	var unicodeStr = ""
    for(var i=0;i<str.length;i++){
		if (str.charCodeAt(i) <128) {
			var asciiChar = str[i]
			unicodeStr += asciiChar 
		}
        if(str.charCodeAt(i)>127){
        	var nonAsciiChar = str.charCodeAt(i).toString(16).toUpperCase()
            while (nonAsciiChar.length < 4) {
			  nonAsciiChar = '0' + nonAsciiChar;
			}
			nonAsciiChar = '\\u' + nonAsciiChar;
			unicodeStr += nonAsciiChar;
		  }
    }
    return unicodeStr;
}

// (For .properties): Main function that takes in an array of strings to return an array with converted strings

const arrConverter = (arr) => {
	var outputArr =[];

	for (var i = 0; i < arr.length; i++) {
		var string = arr[i]
		var convertedString = strConverter(string)
		outputArr.push(convertedString)
	}
	return outputArr;
}


// (For .json): Main function that takes in an object, and returns an object with converted values

const objConverter = (inputObj) => {
  var outputObj = {}
  
  for (var prop in inputObj) {
    var valueString = inputObj[prop]
    var convertedString = strConverter(valueString)    
    outputObj[prop] = convertedString
  }
  return outputObj
}

module.exports = {strConverter, arrConverter, objConverter}


