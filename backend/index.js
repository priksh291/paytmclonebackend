const express = require("express");
const mainRouter  = require('../backend/routes/index');
const cors = require('cors');
const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(cors());
const app = express();

app.use('./api/v1', mainRouter);
app.listen(3000);


