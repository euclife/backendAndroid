const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json()); // support json encoded bodies

// routes
const scoreRouter = require('./Routes/score');
const userRouter = require('./Routes/user');
const soalRouter = require('./Routes/soal');
const jawabanRouter = require('./Routes/jawaban');

const sequelize = require('./Configs/sequelize');

// Models
const Score = require('./Models/score');
const Jawaban = require('./Models/jawaban');
const User = require('./Models/user');
const Soal = require('./Models/soal');


app.use('/score', scoreRouter);
app.use('/jawaban', jawabanRouter);
app.use('/', userRouter);
app.use('/soal', soalRouter);

app.listen(3000, () => {
    console.log('server started');
    sequelize.sync();
})