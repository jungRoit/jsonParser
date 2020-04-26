const lex = require('./lexer');
const Parser = require('./parser');

module.exports = parseJson = input => {
  
  const tokens = lex(input);
  const parseData =  parse(tokens);
  return parseData;
}
