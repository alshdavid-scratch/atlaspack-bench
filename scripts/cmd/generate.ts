import url from 'node:url'
import path from 'node:path'
import fs from 'node:fs'

const COPIES = 200

const __dirname = path.dirname(url.fileURLToPath(import.meta.url))
const rootPath = path.normalize(path.join(__dirname, '..', '..'))
const vendorPath = path.normalize(path.join(__dirname, '..', 'three-js'))

void async function main() {
  fs.rmSync(path.join(rootPath, 'src'), { recursive: true, force: true })
  fs.mkdirSync(path.join(rootPath, 'src'))
  fs.mkdirSync(path.join(rootPath, 'src', 'copies'))

  for (let i = 1; i <= COPIES; i++) {
    fs.cpSync(vendorPath, path.join(rootPath, 'src', 'copies', `${i}`), { recursive: true, force: true })
  }

  for (let i = 10; i <= COPIES; i+=10) {
    let file = ''

    for (let j = 1; j <= i; j++) {
      file += `import * as tjs_${j} from './copies/${j}/Three.js'; export { tjs_${j} }; window.tjs_${j} = tjs_${j};\n`
    }

    fs.writeFileSync(path.join(rootPath, 'src', `index_${i}.js`), file, 'utf8')
  }
}()