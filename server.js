const express = require('express')
const connectDB = require('./database/db');
const app = express();
const authMiddleware = require('./middleware/authMiddleware');
const cookieParser = require('cookie-parser');

//Middlewares
app.use(express.json())
app.use(cookieParser())
app.use('/api/auth', require('./Auth/Route'))
app.use('/api/events', require('./routes/eventsRoutes'))
app.use('/api/user', require('./routes/userRoutes'))

//Conect to Database
connectDB()
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on PORT ${PORT}`);
})