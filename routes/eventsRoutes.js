const express = require('express');
const eventsController = require('../controllers/eventsController');
const Auth = require('../middleware/authMiddleware');

const router = express.Router();

//Get all Events
router.get('/', Auth.userAuth, eventsController.getAllEvents)
//Create a new Event
router.post('/upload', Auth.userAuth, eventsController.createEvent)

//Update an event
router.put('/:id')
//Delete an event
router.delete('/delete/:id', Auth.userAuth, eventsController.deleteEvent)

module.exports = router