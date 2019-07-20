const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json()); // support json encoded bodies

// routes
const sequelize = require('./configs/sequelize');
const userRouter = require('./routes/user');
const soalRouter = require('./routes/soal');
const jawabanRouter = require('./routes/jawaban');
const scoreRouter = require('./routes/score');


// Models
const Score = require('./models/score');
const Jawaban = require('./models/jawaban');
const User = require('./models/user');
const Soal = require('./models/soal');


app.use('/score', scoreRouter);
app.use('/jawaban', jawabanRouter);
app.use('/', userRouter);
app.use('/soal', soalRouter);

app.listen(1515, () => {
    console.log('server started');
    sequelize.sync();
})