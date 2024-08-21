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

app.use(express.static(mypath));

// Use the routes
app.use('/', router);

app.listen(PORT, (error)=>{
    if(!error){
        console.log(`Server Running on http://localhost:${PORT}`);
    }
});
