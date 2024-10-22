PATH_SCRIPT="$( cd -- "$(dirname "$0")" >/dev/null 2>&1 ; pwd -P )"
PATH_ROOT="$(dirname $(dirname "$PATH_SCRIPT"))"

source "$PATH_ROOT/scripts/args.bash"

rm -rf .parcel-cache dist

# node \
#   --conditions="@atlaspack::sources" \
#   "$ATLASPACK_BIN" build \
#   $ATLASPACK_V3 \
#   --feature-flag importRetry=true \
#   --cache-dir="./.parcel-cache" | tee

# npx prettier -w ./dist/**/*

node \
  --conditions="@atlaspack::sources" \
  "$ATLASPACK_BIN" build \
  $ATLASPACK_V3 \
  --feature-flag importRetry=true \
  --cache-dir="./.parcel-cache" | tee

# node \
#   --conditions="@atlaspack::sources" \
#   -e "console.log(process)"