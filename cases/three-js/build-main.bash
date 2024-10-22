#!/bin/bash

PATH_SCRIPT="$( cd -- "$(dirname "$0")" >/dev/null 2>&1 ; pwd -P )"
PATH_ROOT="$(dirname $(dirname "$PATH_SCRIPT") )"

echo $PATH_ROOT

bin_dev="${PATH_ROOT}/node_modules/@atlaspack/cli/bin/dev-bin.js"
bin_prod="${PATH_ROOT}/node_modules/@atlaspack/cli/bin/atlaspack.js"

rm -rf .parcel-cache dist
node \
  $bin_dev build \
  --feature-flag atlaspackV3=true \
  ./src/index_100.js | tee