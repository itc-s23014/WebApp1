const file = '/dev/stdin'
const stream = require('fs')
  .readFileSync(file, 'utf8')
  .trim()
const lines = stream.split('\n')
const a = lines[0]
const b = lines[1]
const c = lines[2]
console.log(a)
console.log(b)
console.log(c)
