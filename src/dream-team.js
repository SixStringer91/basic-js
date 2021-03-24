const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(arr) {
  if(!Array.isArray(arr)) return false;
  return arr.filter(el => typeof el ==='string').map(el=>el.trim()).map(el => el[0].toUpperCase()).sort().join('');
};
