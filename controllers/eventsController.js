const Event = require('../models/Event');
const jwt = require('jsonwebtoken');
const { jwtSecret } = require('../config/config')

exports.createEvent = async (req, res) => {
    const token = req.cookies.jwt;

    if (!token) {
        return res.status(401).json({ message: 'Not authorized' })
    }
    let userId
    try {
        const decodedToken = jwt.verify(token, jwtSecret)
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
    exports.updateEvent = async (req, res) => {
        try {
            const { id } = req.params;
            const { title, description, date, time } = req.body;

            const event = await Event.findById(id);

            if (!event) {
                return res.status(404).json({ message: 'Event not found' });
            }

            event.title = title;
            event.description = description;
            event.date = date;
            event.time = time;

            await event.save();

            res.status(200).json({ message: 'Event updated successfully' });
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }
}
exports.deleteEvent = async (req, res) => {

    try {
        const { id } = req.params;
        await Event.findByIdAndDelete(id);
        res.status(200).json({ message: 'Event deleted successfully' })

    } catch (error) {
        return res.staus(401).json({ error: error.message })

    }
}