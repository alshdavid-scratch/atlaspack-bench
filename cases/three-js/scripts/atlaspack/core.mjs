const ATLASPACK_DEV = process.env.ATLASPACK_DEV === 'true'

/** @type {typeof import('@atlaspack/core/index.d.ts').Atlaspack} */
export let Atlaspack 

/** @type {typeof import('@atlaspack/core/index.d.ts').AtlaspackV3} */
export let AtlaspackV3 

let core

if (ATLASPACK_DEV) {
  await import('@atlaspack/babel-register/index.js')
  core = (await import('@atlaspack/core/src/index.js')).default
} else {
  core = await import('@atlaspack/core')  
}

Atlaspack = core.Atlaspack
AtlaspackV3 = core.AtlaspackV3
