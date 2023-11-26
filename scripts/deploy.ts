import { ethers } from 'hardhat'

async function main() {
  if (!process.env.RPC_ENDPOINT || !process.env.PKEY) {
    throw 'Missing PRC or PKey!'
  }

  const [owner] = await ethers.getSigners()
  var signer = owner

  console.log('xxx signer address', signer.address)

  // const UniswapV2Factory = await ethers.getContractFactory('UniswapV2Factory')
  // const uniswapV2Factory = await UniswapV2Factory.deploy(signer.address)
  // var fs = require('fs')
  // fs.writeFileSync('address.json', JSON.stringify({ uniswapV2Factory: uniswapV2Factory.target }, null, 4))

  const Token = await ethers.getContractFactory('Token')
  const token = await Token.deploy('K888', 'k888')

  console.log('token adress', token.target)
}

main().catch(error => {
  console.error(error)
  process.exitCode = 1
})
