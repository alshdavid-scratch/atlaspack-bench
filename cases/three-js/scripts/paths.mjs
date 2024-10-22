import * as fs from "node:fs"
import * as path from "node:path"
import * as url from "node:url"

const __dirname = url.fileURLToPath(new URL('.', import.meta.url))
const __root = path.dirname(__dirname)

export const Paths = {
  __dirname,
  __root,
}