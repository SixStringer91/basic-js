const CustomError = require("../extensions/custom-error");

module.exports = function calculateHanoi(x, y) {
  const turns = [...Array(x)].reduce(a => (a * 2) + 1, 0);
  const seconds = Math.floor(3600 / y * turns);
  return {
    turns,
    seconds
  };
};