const jwt = require('jsonwebtoken');
const config = require('../config/config');

//Verify token
exports.userAuth = (req, res, next) => {
    const token = req.cookies.jwt;

    if (token) {
        jwt.verify(token, config.jwtSecret, (err, decodedToken) => {
            if (err) {
                return res.status(401).json({ message: err.message }
                )
            } else {
                if (decodedToken && decodedToken.id) {
                    next();
                } else {
                    return res.status(401).json({ message: 'Not authorized' })
                }
            }
        })
    } else {
        return res
            .status(401)
            .json({ message: 'Not authorized, token not available' })
    }
}