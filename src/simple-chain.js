const CustomError = require("../extensions/custom-error");

const chainMaker =  {
  chain: [],

  getLength() {
  return this.chain.length;
  },

  addLink(value) {
    this.chain.push(`( ${String(value) ? String(value) : ' '} )`)
    return this
  },

  removeLink(position) {
    if(typeof position !== 'number'&&this.getLength()) {
        this.chain = [];
        throw new Error();
    }
    else this.chain.splice(position-1, 1);
    return this
  },
  reverseChain() {
    if(this.getLength()) this.chain.reverse();
    return this
  },
  finishChain() {
    if(this.getLength()){
    const stringedChain = this.chain.join('~~');
    this.chain = [];
    return stringedChain;
  }
  }
};

console.log(chainMaker.addLink('GHI').addLink(null).reverseChain().addLink(333).reverseChain().reverseChain().addLink(0).reverseChain().reverseChain().addLink('GHI').finishChain(), '( null )~~( GHI )~~( 333 )~~( 0 )~~( GHI )')


module.exports = chainMaker;
