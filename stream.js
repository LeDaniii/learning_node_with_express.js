// fs = File System
const fs = require('fs');

// const readStream = fs.createReadStream('./docs/blog3.txt', { encoding: 'utf8'});
const readStream = fs.createReadStream('./docs/blog3.txt');
const writeSream = fs.createWriteStream('./docs/blog4.txt');

// readStream.on('data', (chunk) => {
//     console.log('----- New Chunk -----');
//     // console.log(chunk.toString());
//     console.log(chunk);
//     writeSream.write('\n\n ---------- New Chunk ----------\n\n');
//     writeSream.write(chunk);
// })

// piping is doing the same like above

// piping
readStream.pipe(writeSream);