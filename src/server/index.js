// Use environment variables to hide personal API key
const dotenv = require('dotenv');
dotenv.config();

var path = require('path');
const express = require('express');

// node-fetch to use fetch on Node.js runtime
const fetch = require('node-fetch');

const app = express();

// Body parser for Express POST requests
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(bodyParser.text());

// Cors for cross origin allowance
const cors = require('cors');
app.use(cors());

// Initialize main project folder
app.use(express.static('dist'));

console.log(__dirname);

app.get('/', function (req, res) {
    // res.sendFile('dist/index.html')
    res.sendFile(path.resolve('src/client/views/index.html'));
});

// designates what port the app will listen to for incoming requests
app.listen(8081, function () {
    console.log('Example app listening on port 8081!');
});

app.post('/test', function (req, res) {
    let data = req.body;
    console.log(`Server received data:`);
    console.log(data);

    // Construct the API endpoint
    const endpoint = `${process.env.API_URL}?key=${process.env.API_KEY}&of=json&txt=${data}&lang=en`;
    console.log(`Endpoint: ${endpoint}`);

    fetch(endpoint, {
        method: 'POST',
        body: data,
    })
    .then(response => response.json()) // Parse JSON response into native JavaScript object
    .then(data => {
        console.log(data);
        res.send(data);
    })
});
