import url from 'node:url'
import path from 'node:path'
import fs from 'node:fs'
import * as glob from 'glob'

const __dirname = path.dirname(url.fileURLToPath(import.meta.url))

void async function main() {
  const packages = glob.sync('packages/**/*/package.json', { cwd: path.normalize(path.join(__dirname, '..', '..', '..', 'atlaspack')) })
  const rootPkg: { name: string, version: string, overrides: Record<string, string>, dependencies: Record<string, string> } = {
    name: "@alshdavid/atlaspack-bench",
    version: "1.0.0",
    overrides: {},
    dependencies: {
      '@swc/helpers': "*"
    }
  }

  rootPkg.overrides = {}
  rootPkg.dependencies = {}

  for (const pkg of packages) {
    if (pkg.includes('node_modules/')) continue
    if (pkg.includes('test/')) continue
    if (pkg.includes('examples/')) continue
    if (pkg.includes('example/')) continue
    if (pkg.includes('templates/')) continue
    if (pkg.includes('dev/')) continue

    const absPkg = path.normalize(path.join(__dirname, '..', '..', '..', 'atlaspack', pkg))
    const json = JSON.parse(fs.readFileSync(absPkg, 'utf8'))
    
    rootPkg.overrides = {
      ...(rootPkg.overrides || {}),
      [json['name']]: `file:${path.dirname(absPkg)}`
    }

    rootPkg.dependencies = {
      ...(rootPkg.dependencies || {}),
      [json['name']]: `file:${path.dirname(absPkg)}`
    }
  }

  fs.writeFileSync(path.normalize(path.join(__dirname, '..', '..', 'package.json')), JSON.stringify(rootPkg, null, 2), 'utf8')
}()