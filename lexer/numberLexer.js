const {JSON_NUMBERS} = require('../constants/constants');

module.exports = lexNumber = string => {
  let jsonNumber = '';

  if(!JSON_NUMBERS.includes(string[0])) {
    return null;
  }
  for(let i=0;i<string.length-1;i++){
    if(JSON_NUMBERS.includes(string[i])) {
      jsonNumber += string[i];
    }

    if(string[i] === ',') {
      break;
    }
  };

  if(jsonNumber.length === 0) {
    return null;
  }

  return jsonNumber;

}
