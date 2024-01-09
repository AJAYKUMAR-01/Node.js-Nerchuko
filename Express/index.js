//Below Line is not needed.
// const http = require('http'); 
const express = require('express');

//Acts as a Handling Function
const app = express();

//executes if '/' route requested
app.get('/', (req, res) => {
    res.send("This is a Home Page");
});

app.get('/about', (req, res) => {
    res.send(`Hey ${req.query.name}, you are ${req.query.age}`);
});
//to create a server
// const myServer = http.createServer(app);

// //listen at a port
// myServer.listen(8000, (data, err) => {
//     console.log("Server started!");
// })

//The aboue 2 line "createServer" and "listen" is not needed.. we can directly 
app.listen(8000, () => console.log("Server Started!"));