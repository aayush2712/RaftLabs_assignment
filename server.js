const express = require('express');
const app = express();
const routes = require('./routes.js');
const dotenv = require('dotenv');
const connectDB = require('./db');

app.use(express.json());
app.use('/api', routes);

dotenv.config({ path: './config.env' });

connectDB();

app.listen(
  process.env.PORT,
  console.log(`Server running on port ${process.env.PORT}`)
);
