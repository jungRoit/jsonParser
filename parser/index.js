const JSON_TOKENS = require('../constants/jsonTokens');
const parseArray = require('./parseArray');
const parseObject = require('./parseObject');

 parse = tokens => {
  if(tokens[0] === JSON_TOKENS.LEFT_BRACKET) {
    // parse array
    tokens = tokens.slice(1);
    return parseArray(tokens);
  }else if (tokens[0] === JSON_TOKENS.LEFT_BRACE) {
    // parse object
    tokens = tokens.slice(1);
    return parseObject(tokens);

  }else {
    let t = tokens[0];
    tokens = tokens.slice(1);
    return [t, tokens];
    
  }
}

module.exports = {
  
}
