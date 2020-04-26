const {JSON_TRUE, JSON_FALSE, TRUE_LENGTH, FALSE_LENGTH} = require('../constants/constants');

module.exports = lexBool = string => {

  if(string.length >= FALSE_LENGTH && string.substr(0,FALSE_LENGTH) === JSON_FALSE) {
    return 5;
  }else if (string.length >= TRUE_LENGTH && string.substr(0,TRUE_LENGTH) === JSON_TRUE) {
    return 4;
  }else {
    return null;
  }

}