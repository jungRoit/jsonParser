const lexString = require('./stringLexer');
const lexNumber = require('./numberLexer');
const lexBool = require('./boolLexer');
const {JSOM_WHITESPACE, TOKENS} = require('../constants/constants');
const CustomError = require('../errors');

module.exports = lex = string => {
  const tokens = [];

  while (string) {
    let jsonString = lexString(string);
    if(jsonString) {
      string = string.substr(jsonString.length+2);
      tokens.push(jsonString);
      continue;
    }
    let jsonNumber = lexNumber(string);
    if(jsonNumber){
      string = string.substr(jsonNumber.length);
      const number = jsonNumber.includes('.')? parseFloat(jsonNumber):parseInt(jsonNumber);
      tokens.push(number);
      continue;
    }

    let jsonBool = lexBool(string);
    console.log('bool',jsonBool, string);
    if(jsonBool) {
      string = string.substr(jsonBool);
      tokens.push(jsonBool === 5? false:true);
      continue;
    }

    if(JSOM_WHITESPACE.includes(string[0])) {
      string = string.substr(1);
    }else if (TOKENS.includes(string[0])) {
      tokens.push(string[0]);
      string = string.substr(1);
    }else {
      throw new CustomError('Unexpected Token', `Unexpected Token: ${string[0]}`)
    }
  };

  return tokens;
}
