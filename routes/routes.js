const express = require('express');
const routes = express.Router();

routes.get('/', (req, res)=>{
    res.render('index');
});


routes.get('/', (req, res)=>{
    res.render('/index');
})

routes.get('/about', (req, res)=>{
    res.render('about');
});

routes.get('/e-shopping', (req, res)=>{
    res.render('e-shopping');
});

routes.get('/gallery', (req, res)=>{
    res.render('gallery');
});

routes.get('/contact', (req, res)=>{
    res.render('contact');
});


module.exports = routes;