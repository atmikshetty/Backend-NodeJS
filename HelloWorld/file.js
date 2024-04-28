const fs = require('fs')
const os = require("os")

// console.log(os.cpus().length);

// // Sync...Blocking Operation
// fs.writeFileSync('./test.txt', 'Hello First File');

// // Async... Non Blocking Operation
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

// // Status of a file
// console.log(fs.statSync('./test.txt'));