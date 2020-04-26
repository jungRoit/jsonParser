const {JSON_QUOTE} = require('../constants/constants');
const CustomError = require('../errors');

module.exports = lexString = string => {
  let jsonString = '';

  if(string[0] === JSON_QUOTE) {
    string = string.substr(1);
  }else {
    return null;
  }
  for(let i=0;i<string.length;i++) {
    if(string[i] === JSON_QUOTE) {
      return jsonString;
    }else {
      jsonString +=string[i];
    }
  }

  throw new CustomError('Lexing Error', 'Expected end-of-string quote');
}
