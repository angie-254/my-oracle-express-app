const express = require('express');
const app = express();
const incomingmailRouter = require('./routes/incomingmails-router');
const outgoingmailRouter = require('./routes/outgoingmails-router');

const port = 3000;


app.use('/incomingMails', incomingmailRouter);

app.use('/outgoingMails', outgoingmailRouter);

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)});