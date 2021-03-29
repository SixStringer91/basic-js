const CustomError = require("../extensions/custom-error");

module.exports = function countCats(matrix) {
  return matrix.reduce((a,b)=>a += b.filter(el => el==='^^').length, 0)
};
