# Atlaspack Benchmark

Update the path for atlaspack in the `package.json` to suit then run

```bash
npm install
```

To run the benchmark, compile the Atlaspack sources and run:

```bash
npm run build
npm run build:v3

# Use the Atlaspack sources directly
npm run build:dev
npm run build:v3:dev
```

To compile the atlaspack sources:

```bash
yarn build-native-release
yarn build

# Optional
yarn build-ts
```

To adjust the number of three-js copies:

```bash
npm run build:10
npm run build:10:v3

npm run build:20
npm run build:20:v3:

# ... increments of 10

npm run build:100
npm run build:100:v3
```