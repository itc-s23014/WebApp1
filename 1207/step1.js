const file = '/dev/stdin'
const stream = require('fs')
  .readFileSync(file, 'utf8')
  .trim()
const lines = stream.split('\n')
const str = lines[0]
console.log(str)
