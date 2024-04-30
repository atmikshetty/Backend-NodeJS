const express = require('express');

const app = express();

app.get('/', (req,res) => {
    res.send("Welcome "+ req.query.name+ "To Home page");
})

app.get('/about', (req,res) => {
    res.send("Welcome "+ req.query.name+ "To Home page");
})

app.listen(8000, ()=> console.log('Success'));

// Not Required with Express
// const atmikServer = http.createServer(app);

// atmikServer.listen(8000, () => {
//     console.log('Server Active');
// })