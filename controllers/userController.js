const User = require('../models/User');


//Get User profile
exports.getProfile = async (req, res) => {
    try {
        const userId = req.user.UserId;
        const user = await User.findById(userId);

        res.status(200).json(user);
    } catch (err) {
        res.status(500).json({ error: err.message })
    }
}

//Update user Profile

exports.updateProfile = async (req, res) => {
    try {
        const userId = req.user.userId;
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