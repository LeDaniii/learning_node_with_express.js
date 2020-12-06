// https://www.youtube.com/watch?v=-HPZ1leCV8k&t=248s

const http = require('http');
const fs = require('fs');
const _ = require('lodash');

const server = http.createServer((req, res) => {
    // console.log(req.url, req.method);

    // lodash
    const num = _.random(0, 20);
    console.log(num);
    const greet = _.once(() => {
        console.log('Hello');
});

    greet();
    greet();

    // set header content type
    res.setHeader('Content-Type', 'text/html');

    let path = '../views';

    switch (req.url) {
        case '/':
            path += '/index.html';
            res.statusCode = 200;
            break;
        case '/about':
            path += '/about.html';
            res.statusCode = 200;
            break;
        case '/about-me':
            res.statusCode = 301;
            res.setHeader('Location', '/about');
            res.end;
            break;
        default:
            path += '/404.html';
            res.statusCode = 404;
    }

    // res.write('<head><link rel="stylesheet" href="#"></head>');
    // res.write('<p>hello, whats  up</p>');
    // res.write('<p>hello, whats  up again</p>');
    // res.end();

    // send a html file
//     fs.readFile('../views/index.html', (err, data) => {
//         if (err) {
//             console.log(err);
//             res.end();
//             console.log(data);
//         } else {
//             console.log(data);
//             // res.write(data);
//             res.end(data);
//         }
//     });
//     // res = response
// });

    fs.readFile(path, (err, data) => {
        if (err) {
            // console.log(err);
            res.end();
            // console.log(data);
        } else {
            // console.log(data);
            // res.write(data);
            
            res.end(data);
        }
    });
    // res = response
});

server.listen(3000, 'localhost', () => {
    console.log('listening for request on port 3000')
});