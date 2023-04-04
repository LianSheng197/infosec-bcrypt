'use strict';
const helmet = require('helmet');
const bcrypt = require('bcrypt');
const express = require('express');
const bodyParser = require('body-parser');
const fccTesting = require('./freeCodeCamp/fcctesting.js');
const app = express();
app.use(helmet.noCache());
fccTesting(app);
const saltRounds = 12;
const myPlaintextPassword = 'sUperpassw0rd!';
const someOtherPlaintextPassword = 'pass123';

app.get("/", (req, res) => {
    res.send("Damn it, CloudFlare cached my old content. <br>Even if I changed the settings still fails the freeCodeCamp test...");
})


//START_ASYNC -do not remove notes, place code between correct pair of notes.
bcrypt.hash(myPlaintextPassword, saltRounds, (err, hash) => {
    console.log(hash);

    bcrypt.compare(myPlaintextPassword, hash, (err, res) => {
        console.log(res);
    });
});
//END_ASYNC

//START_SYNC



//END_SYNC






























app.listen(process.env.PORT || 60002, () => { });
