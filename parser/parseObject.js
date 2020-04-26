const JSON_TOKENS  = require('../constants/jsonTokens');
const CustomError = require('../errors');
const Parser = require('../parser');

module.exports = parseObject = tokens => {
  let jsonObject = {};

  if(tokens[0] == JSON_TOKENS.RIGHT_BRACE) {
    return jsonObject;
  }

  while(true) {
    let key = tokens[0];

    if(typeof key == 'string') {
      tokens = tokens.slice(1);
    }else {
      throw new CustomError('Invalid key',`Expected string key, got:${key}`);
    }

    if( tokens[0] != JSON_TOKENS.COLON) {
      throw new CustomError('Invalid input',`Expected : after the key`);
    }

    tokens = tokens.slice(1);
    let parsedValue = parse(tokens);
    jsonObject[key] = parsedValue[0];
    tokens = parsedValue[1];

    if(tokens.length === 0) {
      return;
    }

    if(tokens[0] == JSON_TOKENS.RIGHT_BRACE) {
      tokens = tokens.slice(1);
      return [jsonObject, tokens];
    }
    if( tokens[0] != JSON_TOKENS.COMMA) {
      throw new CustomError('Invalid input',`Expected , after each key/value pair`);
    }

    tokens = tokens.slice(1);

  }
}