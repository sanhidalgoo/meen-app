const express = require('express');
const path = require('path');
const ejs = require('ejs');
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/my_database', { useNewUrlParser: true });

const app = new express();

app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded());

const BlogPost = require('./models/BlogPost');

app.listen(4000, () => {
    console.log('App listening on port 4000');
})


app.get('/', async (req, res) => {
    const blogposts = await BlogPost.find({});
    console.log(blogposts);
    res.render('index', {
        blogposts
    });
});

app.get('/about', (req, res) => {
    res.render('about');
});

app.get('/contact', (req, res) => {
    res.render('contact');
});

app.get('/post', (req, res) => {
    res.render('contact');
});

app.get('/posts/new', (req, res) => {
    res.render('create');
});


app.post('/posts/store', async (req, res) => {
    await BlogPost.create(req.body);
    res.redirect('/');
})