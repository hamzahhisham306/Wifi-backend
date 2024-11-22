'use strict';



const { UserModel } = require('../models');


const createnewUser = async (req, res) => {
    try {


        let newUser = {}

        newUser = {
            username: req.body.username,
            email: req.body.email,
            phonenumber: req.body.phonenumber,
        };

        console.log("Req>>>>>>>>>>",req.body
        )




        const user = await UserModel.create(newUser);
        if (user) res.status(201).json(user);
    }
    catch (error) {

        console.log(error);

    }
}



const getAllUsers = async (req, res) => {
    try {
        const user = await UserModel.findAll({ include: { all: true } });
        res.status(200).json(user);
    } catch (error) {
        res.status(500).json({ message: `${error}` });
    }
}











module.exports = {

    getAllUsers,
    createnewUser,

};