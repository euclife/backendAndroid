const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
dotenv.config();

const User = require('../Models/user');

module.exports.getUser = (req, res) => {
    User.findAll({
        where: {
        role:"user"
        }
    })
        .then((user)=>{
            res.json({
            "status" : 200,
            "message" : "success",
            "user" : user
           })
        })
        .catch((error) => {
            console.log(error);
    })
}

module.exports.postRegister = (req, res) => {
    console.log(req.body.password);
    var salt = bcrypt.genSaltSync(10);
    var hash = bcrypt.hashSync(req.body.password, salt);
    // if (req.body.voucher == "") {}
    User
        .findOrCreate({
            where: { email: req.body.email },
            defaults: {
                nama: req.body.nama,
                email: req.body.email,
                password: hash,
                role: req.body.role
            }
        })
        .then((user)=>{
           res.json({
            "status" : 200,
            "message" : "success",
            "user" : user
           })
        })
        .catch((error)=>{
            res.json(error);
        })
}

module.exports.postLogin = (req, res) => {
    User.findOne({
        where: {
            email: req.body.email
        }
    }).then(user => {
        if (!user) {
            res.json({
                "status" : 400,
                "message": "User Tidak ditemukan"
            })
        }

        bcrypt.compare(req.body.password, user.get('password'), function (err, isMatch){
            if (err) {
                res.json({
                "status" : 400,
                "message": "Password Salah"
            })
            };

            if(isMatch) {
                jwt.sign({ 
                    id: user.get('id'),
                    nama: user.get('nama'),
                    role: user.get('role')
                    }, process.env.SECRETKEY, (error, token) => {
                    res.json({ 
                        "status" : 200,
                        "message": "success",
                        "token" : token ,
                        "user" : user
                    });
                })
            } else {
                 res.json({
                "status" : 400,
                "message": "Password Salah"
            })
            }
        })
    })
}