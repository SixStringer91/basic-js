const CustomError = require("../extensions/custom-error");

module.exports = transform = (arr) => {

  if(!Array.isArray(arr))
  throw new Error('Not implemented');
  const newArr = [];
  for(let i = 0; i<arr.length;i++){
    switch (arr[i]) {
        case '--discard-next':
        if(i!==arr.length-1)
        newArr.push('discard')
        i+=1;
        break;
        case '--discard-prev':
        if(i>=0)
        newArr.pop();
        break;
        case '--double-next':
        if(i!==arr.length-1)
        newArr.push(arr[i+1])
        break;
        case '--double-prev':
        if(i!==0&&newArr[newArr.length-1]!=='discard')
        newArr.push(arr[i-1])
        break;
    
      default:
      newArr.push(arr[i])
        break;
  }
}
return newArr.filter (el=>el!=='discard')
}