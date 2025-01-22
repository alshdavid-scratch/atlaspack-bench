# for i in `seq 3 200`; do
#   echo $i
#   mv ./copy_$i ./copies/copy_$i
#   # cp -r ./copy_1 ./copy_$i
# done 

limit=200
target="./src/entries/index_${limit}.js"

mkdir -p ./src/entries
rm -rf $target
touch $target

for i in `seq 1 ${limit}`; do
  echo "import * as tjs_$i from '../copies/copy_$i/Three.js'; export { tjs_$i }; window.tjs_$i = tjs_$i;" >> $target
done 