require('./config/dbconnect');
const expess = require('express');
const bodyParser = require('body-parser');

const cors = require('cors');
const gift = require('./routes/gift.route');
const app = expess();
const port = 3000;

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use('/gift', gift);

app.listen(port, (req, res) => {
    console.log('Server running in port ' + port);
});