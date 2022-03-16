const express = require('express');
const app = express();
app.use(express.static('public'));
const path = require('path');

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
    console.log('Servidor funcionando');
});

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/views/home.html'));
});

app.get('/register', (req, res) => {
    res.sendFile(path.join(__dirname, '/views/register.html'));
});

app.get('/login', (req, res) => {
    res.sendFile(path.join(__dirname, '/views/login.html'));
});