import '@atlaspack/babel-register/index.js'
import * as fs from "node:fs"
import * as path from "node:path"
import { Atlaspack } from './atlaspack/core.mjs'
import { Paths } from './paths.mjs'

fs.rmSync(path.join(Paths.__root, '.parcel-cache'), { force: true, recursive: true })
fs.rmSync(path.join(Paths.__root, 'dist', 'v2'), { force: true, recursive: true })

const atlaspack = new Atlaspack({
  // @ts-expect-error
  nodeWorkers: 1,
  shouldDisableCache: true,
  config: path.join(Paths.__root, '.parcelrc'),
  entries: [path.join(Paths.__root, 'src_2', 'index.html')],
  defaultTargetOptions: {
    distDir: path.join(Paths.__root, "dist", 'v2'),
    outputFormat: 'esmodule',
  },
  targets: {
    default: {
      distDir: path.join(Paths.__root, "dist", 'v2'),
      outputFormat: 'esmodule',
    }
  },
})

const result = await atlaspack.run()
