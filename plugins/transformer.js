const { Transformer } = require('./api')

module.exports = new Transformer({
  transform({ asset }) {
    console.log(asset)
    return [ asset ]
  }
})
