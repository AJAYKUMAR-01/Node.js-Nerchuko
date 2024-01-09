
const http = require('http');
const fs = require('fs');

// The browser first search in the dependencies and the in the builtin packages.
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
            case "/": res.end("This is a Home page");
                break;
            case "/search": 
                const name = myUrl.query.name;
                res.end(`Hi, ${name}`);
                break;
            case "/contact": 
            {
                res.end("Gmail: ajaykumarnandivada@gmail.com");
                break;
            }
            default: res.end("404");
        }
    })
});

myServer.listen(8000, () => console.log("server created successfully"));

//Url: http://localhost:3000/about?name=ajay

// Output :
// Url {
//     protocol: null,
//     slashes: null,
//     auth: null,
//     host: null,
//     port: null,
//     hostname: null,
//     hash: null,
//     search: '?name=ajay',
//     query: 'name=ajay',
//     pathname: '/about',
//     path: '/about?name=ajay',
//     href: '/about?name=ajay'
//   }


