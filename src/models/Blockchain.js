// Blockchain
class Blockchain {
  // 1. 完成构造函数及其参数
  /* 构造函数需要包含 
      - 名字
      - 创世区块
      - 存储区块的映射
  */
  constructor(name) {
  this.name=name
  this.genesis=genesis
  this.blocks=blocks// 后一个区块的hash，map结构
}

  // 2. 定义 longestChain 函数
  /* 
    返回当前链中最长的区块信息列表
  */
  longestChain() {//将信息放到一个map中
  var a1=new Map()
  var a2=new Map()
  //将各链上数据加到map中
  //从头开始遍历区块
  while (blockchain.blocks!=null){
      if(genesis.blocks.size==1){//是一个map
      a1.putAll(genesis.blocks)
      a2.putAll(genesis.blocks)
      }else{//遍历blocks集合里面的值
         a1.set(genesis.blocks[0])
         a2.set(genesis.blocks[1])
      }
      genesis=genesis.blocks
  }
  //选择加谁
  if (a1.size>a2.size){
  return a1
  }else{
  return  a2
  }

  }
}

export default Blockchain
