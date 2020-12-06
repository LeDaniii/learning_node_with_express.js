const express = require('express');

// express app
const app = express();

// register viwe engine
app.set('view engine', 'ejs');
// app.set('views', 'myviews');
// ^^^^ if you have a different folder than views

// listen for request
app.listen(3000);

let path = require('path');
// console.log(path);

app.get('/', (req, res) => {
    // res.send('<p>Homepage</p>');
    // res.sendFile('../views/index.html', { root: __dirname });
    // ^^^^^laut Stackoverflow ist das ../ considered malicious deswegen wirft es einen Error bzw. maybe a hacker's first try
    // https://stackoverflow.com/questions/14594121/express-res-sendfile-throwing-forbidden-error/14594282
    // mit path funktioniert es
    // ###########################################################
    // res.sendFile(path.resolve('../views/index.html'));  //#####
    // ###########################################################
    // console.log(__dirname)
    // express sucht von einem absolut wert also start von C//  deswegen brauchen wir ein object das auf root: __dirname verweißt (directoryname)
        const blogs = [
        // {title: 'yoshi finds eggs', snippet: 'Lorem ipsum dolor sit amet consectetur'},
        // {title: 'mario finds stars', snippet: 'Lorem ipsum dolor sit amet consectetur'},
        // {title: 'how to defeat bowser', snippet: 'Lorem ipsum dolor sit amet consectetur'},
    ];
    res.render('index', { title: 'Home', blogs });
    // normalerweise schreibt man blogs : blogs aber dadurch das beides gleich heißt reicht ein blog tum asignen
});


app.get('/about', (req, res) => {
    // res.send('<p>about page</p>');
    // res.sendFile('../views/about.html', { root:__dirname });
    // res.sendFile(path.resolve('../views/about.html'));

    res.render('about', { title: 'About'});
});

// // redirections

// app.get('/about-us', (req, res) => {
//     res.redirect('/about')
//     // res.redirect(path.resolve('../views/about.html'));

// });

app.get('/blogs/create', (req, res) => {
    res.render('create', { title: 'Create'});
});

// 404 page
// res = response!!!!!!!!!!!!!!!!!!!!!!!!! ffs
// req = request !!!!!!!!!!!!!!!!!!!!!!!!! ffs

// use => use this function for every incomming request 
// Der Code läuft von oben nach unten die get-requests ab und falls keine get zb. / , /about dabei ist use is firing for everything
// Positioning is IMPORTANT!!!--> not scopet with get

app.use((req, res) => {
    // res.sendFile(path.resolve('../views/404.html'));
    // res.status(404).sendFile(path.resolve('../views/404.html'));
    res.status(404).render('404', { title: '404'})
})