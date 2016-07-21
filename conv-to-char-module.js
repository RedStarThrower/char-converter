// (FOR BOTH FORMATS) Helper function to convert unicode to symbols

function strConverter(text) {
   return text.replace(/\\u[\dA-F]{4}/gi, 
          function (match) {
               return String.fromCharCode(parseInt(match.replace(/\\u/g, ''), 16));
          });
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
