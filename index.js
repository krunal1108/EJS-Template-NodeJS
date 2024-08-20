const express = require('express');
const path = require('path');
const app = express();

const env = require('dotenv');
env.config();
const PORT = process.env.PORT || 3000;
const router = require('./routes/routes');
const mypath = path.join(__dirname, 'views');

// Templating Engine
app.set('view engine', 'ejs');
app.set('views',mypath);

// Views Directory
app.set('views', path.join(__dirname, '/views'));




// Set up Static Files (css, images, etc.)
// app.use(express.static(path.join(__dirname, 'views')));


app.use(express.static(mypath));

// Use the routes
app.use('/', router);



// app.get('/', (req, res)=>{
//     console.log("Home Route");
//     res.render('index');
// });

// app.get('/about', (req, res)=>{
//     console.log("About Route");
//     res.render('about');
// });

// app.get('/gallery', (req, res)=>{
//     console.log("Gallery Route");
//     res.render('gallery');
// });


// app.get('/e-shopping', (req, res)=>{
//     console.log("e-shopping Route");
//     res.render('e-shopping');
// });


// app.get('/contact', (req, res)=>{
//     console.log("contact Route");
//     res.render('contact');
// });


// 404 Error Handling Middleware
// app.use((req, res, next) => {
//     res.status(404).render('404', { title: '404 - Page Not Found' });
// });





app.listen(PORT, (error)=>{
    if(!error){
        console.log(`Server Running on http://localhost:${PORT}`);
    }
});