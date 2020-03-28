const express = require('express');
const logger = require('morgan');
const cors = require('cors')

const jobsRouter = require('./routes/jobs');
const auth = require('./middleware/auth.middleware');

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(cors());
app.use(auth);

app.use('/jobs', jobsRouter);
module.exports = app;
