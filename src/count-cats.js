const CustomError = require("../extensions/custom-error");

module.exports = function countCats(matrix) {
  return matrix.reduce((a,b)=>{
    const cats = b.filter(el => el==='^^');
        return a += cats.length;
  },0)
 
};
