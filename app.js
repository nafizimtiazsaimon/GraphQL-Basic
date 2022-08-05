const express = require('express');
const app = express();
const mongoose = require('mongoose');
require('dotenv').config();

mongoose.connect(process.env.DB_CONNECTION, () => console.log('database'));

app.listen(8080., () => console.log('server'));