const express = require('express');
const cors = require('cors');
const livroRouter = require('./routes/livros');

const app = express(); // <- esta linha deve vir antes de qualquer uso de 'app'

app.use(cors());
app.use(express.json());
app.use('/livros', livroRouter);

module.exports = app;
