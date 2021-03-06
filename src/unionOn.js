const unionOn$ = require('./unionOn$');

/**
 * Gives union of first array with another.
 * @param {Array} x an array
 * @param {Array} y another array
 * @param {function?} fn map function (v, i, x)
 * @param {object?} ths this argument
 * @returns {Array}
 */
function unionOn(x, y, fn, ths=null) {
  return unionOn$(x.slice(), y, fn, ths);
}
module.exports = unionOn;
