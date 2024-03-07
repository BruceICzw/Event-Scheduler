const jwt = require('jsonwebtoken');
const jwtSecret = require('../config/config');

//Verify token
exports.userAuth = (req, res, next) => {
    const token = req.cookies.jwt;

    if (token) {
        jwt.verify(token, jwtSecret, (err, decodedToken) => {
            if (err) {
                return res.status(401).json({ message: 'Not authorized' }
                )
            } else {
                if (decodedToken.id = '') {
                    return res.status(401).json({ message: 'Not authorized' })
                } else {
                    next();
                }
            }
        })
    } else {
        return res
            .status(401)
            .json({ message: 'Not authorized, token not available' })
    }
}