console.log(new Date())

import { promises as fs } from 'fs'

fs.writeFile('README.md', '# ' + new Date().toUTCString())
