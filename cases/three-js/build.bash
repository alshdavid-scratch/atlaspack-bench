rm -rf .parcel-cache dist
node \
  /home/ubuntu/development/atlassian-labs/atlaspack/packages/core/cli/bin/atlaspack.js build \
  --feature-flag atlaspackV3=true \
  ./src/index_50.js | tee