
const http = require('http');
const fs = require('fs');

// The browser first search in the dependencies and the in the builtin packages.
const url = require('url');

const myServer = http.createServer((req, res) => {
    const log = `${Date.now()}: ${req.url}: New request received\n`;
    fs.appendFile("log.txt", log, (err, data) => {
        switch(req.url)
        {
            case "/about": res.end("My Name is Ajay Kumar");
            case "/": res.end("This is a Home page");
            case "/contact": req.end("Gmail: ajaykumarnandivada@gmail.com");
            default: req.end("404 Page Not Found");
        }
    })
});

myServer.listen(3000, () => console.log("server created successfully"));


