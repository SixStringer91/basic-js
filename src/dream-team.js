const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(arr) {
  return Array.isArray(arr) ? arr.filter(el => typeof el ==='string').map(el => el.trim()[0].toUpperCase()).sort().join('') : false;
};
