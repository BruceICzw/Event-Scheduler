const express = require('express')
const connectDB = require('./database/db');
const app = express();

//Conect to Database
connectDB()
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on PORT ${PORT}`);
})