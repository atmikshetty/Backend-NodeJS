const fs = require('fs')

// // Sync
// fs.writeFileSync('./test.txt', 'Hello First File');

// // Async
// fs.writeFile('./test.txt', 'Hello Async File', (err) => {})

// // Reading Sync
// const result = fs.readFileSync('./contacts.txt', "utf-8");
// console.log(result);

// // Async reading Sync
// fs.readFile('./contacts.txt', "utf-8", (err, result) => {
//     if(err){
//         console.log(err);
//     }else{
//         console.log(result);
//     }
// })

// // Append File Sync
// fs.appendFileSync('./test.txt', `Atmik SHETTTTYYYYYYYYYYY\n`);

// // Copy file
// fs.cpSync('./contacts.txt', './copy.txt')

// // Delete Fike
// fs.unlinkSync('./copy.txt')

// Status of a file
console.log(fs.statSync('./test.txt'));