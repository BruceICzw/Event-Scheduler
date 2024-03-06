const express = require('express')
const mongoose = require('mongoose');
const app = express();

//Conect to Database
mongoose.connect('mongodb://127.0.0.1:27017/EventSchedulerDB', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log('Connected to MongoDB...');
    })
    .catch((err) => {
        console.log('Error connecting to MongoDB...', err);
    });

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server is running on PORT ${PORT}`);
})