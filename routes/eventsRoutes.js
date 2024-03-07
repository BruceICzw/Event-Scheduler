const express = require('express');
const eventsController = require('../controllers/eventsController');
const Auth = require('../middleware/authMiddleware');

const router = express.Router();

//Get all Events
router.get('/', Auth.userAuth, eventsController.getAllEvents)
//Create a new Event
router.post('/upload', Auth.userAuth, eventsController.createEvent)
