// To inmport http package
const http = require('http');
const fs = require('fs');
// To create a http server
// inner callback func. is to process the req from the client[request handler].
// req contains all info about the client and the data needed.
// res variable can be used to respond to the request

const myServer = http.createServer((req, res) => {
    // Gives you client details
    // console.log(req.headers);
    // Every Time the req hit the server we log the time and user IP
    const log = `${Date.now()}: ${req.url}: New request received\n`;
    fs.appendFile("log.txt", log, (err, data) => {
        // res.end("Hello Client");
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


