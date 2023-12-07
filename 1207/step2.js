  1 const file = '/dev/stdin'                                                                            
  2 const stream = require('fs')                                                                         
  3   .readFileSync(file, 'utf8')                                                                        
  4   .trim()                                                                                            
  5 const lines = stream.split('\n')                                                                     
  6 const str = lines[0]
  7 console.log(str)

