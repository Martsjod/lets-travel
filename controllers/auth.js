let jwt = require('jsonwebtoken');
let secret = 'gegosdhgg78dsgysdhgis8';

function generateToken(user) {
    let payload = {
        email: user.email,
        password: user.password
    }
    return jwt.sign(payload, secret);
}

function checkToken(token) {
    return jwt.verify(token, secret);
}

module.exports = { generateToken, checkToken};