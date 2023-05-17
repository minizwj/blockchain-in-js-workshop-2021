class Block {
  // 1. 完成构造函数及其参数
  /* 构造函数需要包含
      - 名字
      - 创世区块
      - 存储区块的映射
  */
  constructor(name,prehash,index,sha256(new Date().getTime().toString()).toString()) {
    this.name=name
    this.prehash=prehash
    this.index=index
    this.hash=sha256(new Date().getTime().toString()).toString()
  }
}

export default Block
