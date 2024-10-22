# Atlaspack Benchmark

Update the path for atlaspack in the `package.json` to suit then run

```bash
./taskfile setup
npm install
```

To run the benchmark, compile the Atlaspack sources and run:

```bash
./taskfile build
./taskfile build-v3

# Use the Atlaspack sources directly
./taskfile build-dev
./taskfile build-v3-dev
```

To adjust the number of three-js copies:

```bash
./taskfile build 10
./taskfile build-v3 10

./taskfile build 20
./taskfile build-v3 20

# ... increments of 10

./taskfile build 100
./taskfile build-v3 100
```