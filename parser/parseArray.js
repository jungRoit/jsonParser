const JSON_TOKENS = require('../constants/jsonTokens');
const Parser = require('./index');
const CustomError = require('../errors');

module.exports = parseArray = tokens => {
  let jsonArray = [];

  if(tokens[0] == JSON_TOKENS.RIGHT_BRACKET) {
    return jsonArray;
  }

  while(true) {
    const parsedValue = parse(tokens);
    jsonArray.push(parsedValue[0]);
    tokens = parsedValue[1];

    if(tokens[0] === JSON_TOKENS.RIGHT_BRACKET) {
      tokens = tokens.slice(1);
      return [jsonArray, tokens];
    }else if (tokens[0] !== JSON_TOKENS.COMMA) {
      throw new CustomError('Array Error','Expected comma after object in array');
    }else {
      tokens = tokens.slice(1);
    }
  }
}
