
export ATLASPACK_BIN="/home/ubuntu/development/atlassian-labs/atlaspack/packages/core/cli/bin/atlaspack.js"
export ATLASPACK_V3=""
export ARGS=()

for arg in "$@"
do
  #ATLASPACK_BIN
  if [ "$arg" = "dev" ]; then
    export ATLASPACK_BIN="/home/ubuntu/development/atlassian-labs/atlaspack/packages/core/cli/bin/dev-bin.js"
  elif [ "$arg" = "prod" ]; then
    export ATLASPACK_BIN="/home/ubuntu/development/atlassian-labs/atlaspack/packages/core/cli/bin/atlaspack.js"
  elif [ "$arg" = "main" ]; then
    export ATLASPACK_BIN="/home/ubuntu/development/atlassian-labs/atlaspack-main/packages/core/cli/bin/atlaspack.js"
  elif [ "$arg" = "maindev" ]; then
    export ATLASPACK_BIN="/home/ubuntu/development/atlassian-labs/atlaspack-main/packages/core/cli/bin/dev-bin.js"

  #ATLASPACK_V3
  elif [ "$arg" = "v3" ]; then
    export ATLASPACK_V3="--feature-flag atlaspackV3=true"
  fi
done