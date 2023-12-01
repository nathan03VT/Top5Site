const express = require('express');
const bodyParser = require('body-parser');
const top5Controller = require('./top5Controller');

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

app.get('/', top5Controller.getIndexPage);
app.post('/addTop5', top5Controller.addTop5);
app.get('/getTop5s', top5Controller.getTop5s);

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
