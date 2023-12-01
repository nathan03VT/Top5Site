const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

let userTop5s = [];

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

app.post('/addTop5', (req, res) => {
    const newTop5 = req.body.top5;
    userTop5s.push(newTop5);
    res.redirect('/');
});

app.get('/getTop5s', (req, res) => {
    res.json(userTop5s);
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
