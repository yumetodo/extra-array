const map = require('./_map');
const id = require('./_id');

/**
 * Checks if arrays have no value in common.
 * @param {Array} x an array
 * @param {Array} y another array
 * @param {function?} fn map function (v, i, x)
 * @param {object?} ths this argument
 * @returns {boolean} true if disjoint
 */
function isDisjointOn(x, y, fn=null, ths=null) {
  var s = map(x, fn, ths);
  var fn = fn||id, i = -1;
  for(var v of y) {
    var v1 = fn.call(ths, v, ++i, y);
    if(s.has(v1)) return false;
  }
  return true;
}
module.exports = isDisjointOn;
