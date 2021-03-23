const CustomError = require("../extensions/custom-error");
module.exports = class DepthCalculator {
  calculateDepth = (arr,depth=0) => {
    depth++;
    const newDepth = arr.filter(el => Array.isArray(el));
    if(newDepth.length){
    return this.calculateDepth(newDepth.reduce((a,b)=>a.concat(b)),depth);
      }
      else return depth;
    }
};
