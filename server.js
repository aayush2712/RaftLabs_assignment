const express = require('express');
const app = express();
const routes = require('./routes.js');
const dotenv = require('dotenv');
const connectDB = require('./db');

app.use('/api', routes);
// app.use(express.json());

dotenv.config({ path: './config.env' });

connectDB();

app.listen(5000, console.log(`Server running on port 5000`));
