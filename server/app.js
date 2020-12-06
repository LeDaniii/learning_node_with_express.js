const express = require('express');

// express app
const app = express();

// listen for request
app.listen(3000);

let path = require('path');
// console.log(path);

app.get('/', (req, res) => {
    // res.send('<p>Homepage</p>');
    // res.sendFile('../views/index.html', { root: __dirname });
    // ^^^^^laut Stackoverflow ist das ../ considered malicious deswegen wirft es einen Error
    // https://stackoverflow.com/questions/14594121/express-res-sendfile-throwing-forbidden-error/14594282
    // mit path funktioniert es

    res.sendFile(path.resolve('../views/index.html'));
    // console.log(__dirname)
    // express sucht von einem absolut wert also start von C//  deswegen brauchen wir ein object das auf root: __dirname verweißt (directoryname)
});
app.get('/about', (req, res) => {
    // res.send('<p>about page</p>');
    // res.sendFile('../views/about.html', { root:__dirname });
    res.sendFile(path.resolve('../views/about.html'));

});