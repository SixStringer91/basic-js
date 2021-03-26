const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, { repeatTimes, addition, additionRepeatTimes, additionSeparator, separator }) {
  const additionArr = [...Array(+additionRepeatTimes || 1)]
    .map(() => addition || typeof addition === 'boolean' || addition === null ? `${addition}` : '')
    .join(additionRepeatTimes && additionSeparator ? additionSeparator : '|');
  return [...Array(+repeatTimes || 1)]
    .map(() => str + additionArr)
    .join((separator ? separator : '+'));
};
