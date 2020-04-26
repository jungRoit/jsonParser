const {JSON_QUOTE} = require('../constants/constants');
const CustomError = require('../errors');

exports.lexString = string => {
  let jsonString = '';

  if(string[o] === JSON_QUOTE) {
    string = string.subStr(1);
  }else {
    return null;
  }
  for(let i=0;i<string.length;i++) {
    if(string[i] === JSON_QUOTE) {
      jsonString +=string[i];
      return jsonString;
    }else {
      jsonString +=string[i];
    }
  }

  throw new CustomError('Lexing Error', 'Expected end-of-string quote');
}