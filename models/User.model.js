'use strict';

const jwt = require('jsonwebtoken');

module.exports = (sequleize, DataTypes) => {
    const User = sequleize.define("userswifi", {
        username: {
            type: DataTypes.STRING,
            allowNull: true
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
            isEmail: true,
        },
    
        token: {
            type: DataTypes.VIRTUAL,
            get: function () {
                return jwt.sign({
                    username: this.username
                }, process.env.JWT_SECRET)
            },
            set(tokenObj) {
                return jwt.sign(tokenObj, process.env.JWT_SECRET)
            }
        },
   
        phonenumber: {
            type: DataTypes.STRING,
            allowNull: true,
        },
    
    });
    User.authenticateToket = (token) => {
        return jwt.verify(token, process.env.JWT_SECRET, (err, decode) => {
            if (err) {
                return err;
            } else {
                return decode;
            }
        })
    }
    return User;
}