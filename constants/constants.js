const JSON_TOKENS = require('./jsonTokens');

exports.JSON_QUOTE = '"';
exports.JSOM_WHITESPACE = [' ', '\t', '\b', '\n', '\r'];

exports.TOKENS = Object.values(JSON_TOKENS);

exports.JSON_NUMBERS = ['0','1','2','3','4','5','6','7','8','9','.','-'];