import sha256 from 'crypto-js/sha256.js'

export const DIFFICULTY = 2

class Block {
  // 1. 完成构造函数及其参数
 constructor(blockchain, previousHash, height, timestamp) {
    this.blockchain = blockchain
    this.previousHash = previousHash
    this.height = height
    this.timestamp = timestamp //输出时间戳
    this.hash = this.calculateHash()

  }
//计算hash值
  calculateHash () {
    return sha256(this.previousHash, this.timestamp).toString()
  }
  isValid() {  //判断是否符合难度值
      if (this.calculateHash().substring(0,DIFFICULTY))==Array(DIFFICULTY+1).join("0")){
      //                        这里是根据难度值截取0           判断是否符合难度值
      return true
      }
 }
  setNonce(nonce) {
  //nonce是传的一个参数，不是随机数，为了加快hash的计算
  this.nonce++
  return  sha256(this.nonce+nonce+DIFFICULTY+this.timestamp+this.previousHash+this.height)
  }
  
}

export default Block
