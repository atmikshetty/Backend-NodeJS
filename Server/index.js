// Creating a mini logger of reqs recieved

const http = require('http')
const fs = require('fs');
const url = require('url');

const atmikServer = http.createServer((req,res) => {

    if(req.url === "/favicon.ico") return res.end();
    const myUrl = url.parse(req.url, true);
    console.log(myUrl);

    const log = `${Date.now()}: ${req.url} New Request Recieved \n`
    fs.appendFile('log.txt', log, (err, data)=> {

        switch(myUrl.pathname){
            case '/':
                res.end("Home Page")
                break;
            case '/about':
                const name = myUrl.query.myName;
                const rollNo = myUrl.query.rollNo;
                res.end(`Hello ${name} Roll No: ${rollNo}`)
                break;
            case '/contacts':
                res.end("Welcome to contact page")
                break;
            default:
                res.end('404 Route not found')
        }

        // if(err){
        //     console.log(err);
        // }else{
        //     res.end('Hello From The Server');
        // }
    });
});

atmikServer.listen(8000, () => {
    console.log('Server Active');
})