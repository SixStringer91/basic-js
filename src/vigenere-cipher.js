const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {
  constructor(reverse = true){
    this.reverse = reverse;
    this.baseString = 'abcdefghijklmnopqrstuvwxyz'.split('');
    this.maper = (sym)=>{
      const finded =  this.baseString.findIndex(el => el === sym);
      return finded !==-1 ? finded : String(sym);
    };
  };
  encrypt(a,b) {
    const message = a.toLowerCase().split('').map((sym) => this.maper(sym));
    const key = b.toLowerCase().split('').map((sym) => this.maper(sym));
    const result = message.filter(el => typeof el !=='string').map((el,i) => {
      const keyIndex = i>key.length-1 ? key[i-(Math.floor(i/key.length)*key.length)] : key[i];
      let summ = keyIndex+el;
      if(summ>this.baseString.length-1) summ -= this.baseString.length;
      return summ;
    });
    const finalMessage = message.map(el => typeof el === 'string' ? el : this.baseString[result.shift()]).join('').toUpperCase();
    return this.reverse ? finalMessage : finalMessage.split('').reverse().join('');
  }; 
  decrypt(a,b) {
    const message = a.toLowerCase().split('').map((sym) => this.maper(sym));
    const key = b.toLowerCase().split('').map((sym) => this.maper(sym));
    const result = message.filter(el => typeof el !=='string').map((el,i) => {
      const keyIndex = i>key.length-1 ? key[i-(Math.floor(i/key.length)*key.length)] : key[i];
      let summ = el-keyIndex;
      if(summ<0) summ += this.baseString.length;
      return summ;
    });
    const finalMessage = message.map(el => typeof el === 'string' ? el : this.baseString[result.shift()]).join('').toUpperCase();
    return this.reverse ? finalMessage : finalMessage.split('').reverse().join('');
  }; 
}

module.exports = VigenereCipheringMachine;
