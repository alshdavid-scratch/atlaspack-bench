const { Transformer } = require('./api')

module.exports = new Transformer({
  async transform({ asset }) {
    let code = await asset.getCode();

    // Extract inline assets to return in addition to this asset.
    let assets = [asset];

    let uniqueKey = `${asset.id}-style`;
    assets.push({
      type: 'css',
      content: 'body { background: green }',
      uniqueKey,
      // bundleBehavior: 'inline'
    });

    // Add a dependency, using the uniqueKey as a specifier.
    asset.addDependency({
      specifier: uniqueKey,
      specifierType: 'esm'
    });

    console.log(assets)

    return assets;
  }
})
