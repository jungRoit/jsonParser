const {JSON_NULL, NULL_LENGTH} = require('../constants/constants');

module.exports = lexNull = string => {

  if(string.length >= NULL_LENGTH && string.substr(0,NULL_LENGTH) === JSON_NULL) {
    return 4;
  }else {
    return null;
  }
}