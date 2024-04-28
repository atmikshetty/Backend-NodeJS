// Creating a mini logger of reqs recieved

const http = require('http')
const fs = require('fs')

const atmikServer = http.createServer((req,res) => {
    const log = `${Date.now()}: New Request Recieved \n`
    fs.appendFile('log.txt', log, (err, data)=> {
        if(err){
            console.log(err);
        }else{
            res.end('Hello From The Server');
        }
    });
});

atmikServer.listen(8000, () => {
    console.log('Server Active');
})