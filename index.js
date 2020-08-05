const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const cms1 = require('./cms1');
const datastore = require('./datastore');
const site = require('./site');

const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const PORT = process.env.PORT || 3000;

app.set('views', __dirname);
app.set('view engine', 'pug');

cms1(app);
datastore(app);
site(app);

app.listen(PORT, () => console.log("Listening at port " + PORT));