const http = require('http');
const fs = require('fs');
const url = require('url');

const myServer = http.createServer((req, res) => {
    if(req.url === "/favicon.ico") res.end();
    const log = `${Date.now()}: ${req.url}: New request received\n`;
    const myUrl = url.parse(req.url, true);
    console.log(myUrl);
    fs.appendFile("log.txt", log, (err, data) => {
        switch(myUrl.path)
        {
            case "/about": res.end("My Name is Ajay Kumar");
                break;

            case "/": 
                if(req.method === 'GET')
                {
                    res.end("This is a Home page");
                }
                
                break;

            case "/search": 
                const query = myUrl.query;
                res.end(`Hi, ${query.name}`);
                break;

            case "/contact": 
                res.end("Gmail: ajaykumarnandivada@gmail.com");
                break;
            case "/signup":
            {
                if(req.method === 'GET') res.end('This is a signup form');
                else if(req.method === 'POST')
                {
                    //DB Query
                    res.end("Successful");
                }  
                break;
            }
            
            default: res.end("404");
        }
    })
});

myServer.listen(8000, () => console.log("server created successfully"));