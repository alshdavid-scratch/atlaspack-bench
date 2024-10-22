for i in `seq 3 200`; do
  echo $i
  mv ./copy_$i ./copies/copy_$i
  # cp -r ./copy_1 ./copy_$i
done