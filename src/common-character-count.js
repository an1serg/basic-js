const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  let commonCount = 0;

  const arrS1 = s1.split('');
  const arrS2 = s2.split('');

  for (const char of arrS1) {
    const indexInS2 = arrS2.indexOf(char);

    if (indexInS2 !== -1) {
      commonCount++;
      arrS2.splice(indexInS2, 1);
    }
  }

  return commonCount;
}

module.exports = {
  getCommonCharacterCount,
};
