// ----------------- SET: VARIABLES ----------------- //

// FILES PATHS
'use strict';
const fs = require('fs');
const propPath = `${process.env.HOME}/Workspace/iOfficeConnect/src/main/resources/iOfficeConnect_ru_RU.properties`;
const jsonPath = `${process.env.HOME}/Workspace/iOfficeConnect/src/main/webapp/include/javascript/i18n/ru_RU.json`;

// FILES (CONTENTS)

// (For .properties): Taking the properties draft file and turning it into an array split by line break; ex: ["desktop.Desktop=Рабочий Стол"]
const propertiesContentArr = fs.readFileSync(propPath, 'utf-8').split('\n');

// (For .json): Taking the json draft file, and turning it into an object; ex: { Filter_Categories: 'Фильтровать Категории...', Code: 'Код:' }
const jsonContentStr = fs.readFileSync(jsonPath, 'utf-8')
const jsonContentObj = JSON.parse(jsonContentStr)


// MODULES
const {strConverter, arrConverter, objConverter} = require('./conv-to-code-module')

// ----------------- GO! (executing functions) ----------------- //

// (STEP 1. CONVERSION - PROPERTIES)
	// Create an array with converted strings; ex: ["Add_Parameters=\u0414\u043E\..."]
	var propResultArr = arrConverter(propertiesContentArr)

	// Recreate the line break in the array
	var propResult = propResultArr.join('\n') 

	// Write the resulting properties array to the properties file in the repo
	console.log ("Rewriting iOfficeConnect_ru_RU.properties")
	fs.writeFileSync(propPath, propResult);

// (STEP 2. CONVERSION - JSON)
	// Create an object with converted values; ex: { Code: '\\u041A\\u043E\\u0434:' }
	var jsonResult = objConverter(jsonContentObj)
	
	// Write the resulting json object to the json file in the repo with a line break;  NOTE: (will need to replace "\\u" with "\u" in IntelliJ)
	console.log ("Rewriting ru_RU.json")
	fs.writeFileSync(jsonPath, JSON.stringify(jsonResult, null, 2));