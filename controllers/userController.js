
const User = require('../models/User');
const jwt = require('jsonwebtoken');
const { jwtSecret } = require('../config/config')

//Get User profile
exports.getProfile = async (req, res) => {
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
        const user = await User.findById(userId);

        res.status(200).json(user);
    } catch (err) {
        res.status(500).json({ error: err.message })
    }
}

//Update user Profile

exports.updateProfile = async (req, res) => {
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
        const updatedUser = await User.findByIdAndUpdate(userId, req.body, { new: true });
        res.status(200).json(updatedUser)
    } catch (error) {
        res.status(500).json({ error: error.message });

    }
}

//Delete user Profile

exports.deleteProfile = async (req, res) => {
    try {
        const userId = req.params.id
        await User.findByIdAndDelete(userId);
        res.status(200).json({ message: 'User deleted successfully' })

    } catch (error) {
        res.status(500).json({ error: error.message });

    }
}