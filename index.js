const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const cms1 = require('./cms1');
const datastore = require('./datastore');
const site = require('./site');

const app = express();

const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(bodyParser.json({ limit: '50mb'}));

cms1(app);
datastore();
site(app);

app.listen(PORT, () => console.log("Listening at port " + PORT));