if (process.env.ATLASPACK_SRC === 'true') {
  module.exports = require('@atlaspack/plugin/src/PluginAPI.js')
} else {
  module.exports = require('@atlaspack/plugin')
}
