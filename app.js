const express = require('express');
const logger = require('morgan');

const jobsRouter = require('./routes/jobs');
const auth = require('./middleware/auth.middleware');

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(auth);

app.use('/jobs', jobsRouter);
module.exports = app;
