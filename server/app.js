const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');


// express app
const app = express();

// connect to mongodb
const dbURI = 'mongodb+srv://LeDaniii:test1234@cluster0.4q5gt.mongodb.net/node-tuts?retryWrites=true&w=majority';
mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then((result) => app.listen(3000))
    .catch((err) => console.log(err));

// register viwe engine
app.set('view engine', 'ejs');
// app.set('views', 'myviews');
// ^^^^ if you have a different folder than views

// listen for request
// app.listen(3000);
// ^^^^^ moves to .then mongodb


// middleware & static files
app.use(express.static('public'))

app.use(morgan('dev'));

// app.use((req, res, next) => {
//     console.log('new request made:');
//     console.log('host: ', req.hostname);
//     console.log('path: ', req.path);
//     console.log('method: ', req.method);
//     next();
//     // topic middleware
//     // with next we say--> ney express.js pls move on
// })
// app.use((req, res, next) => {
//     console.log('in the next middleware');
//     next();
//     // topic middleware
//     // with next we say--> ney express.js pls move on
// })



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

// test1234 mongodb
// IP 77.119.129.81