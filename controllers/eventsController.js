const Event = require('../models/Event');
const jwt = require('jsonwebtoken');
const jwtSecret = require('../config/config')

exports.createEvent = async (req, res) => {
    const token = req.cookies.jwt;

    if (!token) {
        return res.status(401).json({ message: 'Not authorized' })
    }
    let userId
    try {
        const decodedToken = jwt.verify = (token, jwtSecret)
        userId = decodedToken.id;
    } catch (error) {
        return res.status(401).json({ message: 'Not authorized' })
    }

    try {
        const { title, description, date, time } = req.body;
        const event = new Event({
            title,
            description,
            date,
            time,
            user: userId
        })
        await event.save();
        res.status(200).json({ message: 'Event Created Successfully' })

    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}

exports.getAllEvents = async (req, res) => {
    try {
        let events = await Event.find()
        res.status(200).json(events);

    } catch (error) {
        res.status(500).json({ error: error.message })

    }
}