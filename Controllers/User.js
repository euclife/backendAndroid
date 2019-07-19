const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
dotenv.config();

const User = require('../Models/user');


module.exports.postRegister = (req,res) =>{

    var salt = bcrypt.genSaltSync(10);
    var hash = bcrypt.hashSync(req.body.password, salt);
    var tokens = "";
    var key1 = 'status';
    var key2 = 'message';
    var key3 = 'result';
    var o = {} 
    User 
        .findOrCreate({
            where:{
               email: req.body.email
            },
            defaults:{
                nama: req.body.nama,
                password: hash,
                roles: req.body.roles
            }
        })
        .then((user)=>{
            jwt.sign({
                id:user.get('id'),
                nama:user.get('nama'),
                roles: user.get('roles')
                }, process.env.SECRETKEY, (error, token)=>{
                    tokens = token
                });

            User
                .update({
                    token : tokens
                    },
                    where:{
                        id : user.get('id')
                    })

            o.[key1].push("200");
            o.[key2],push("Success");
            o.[key3].push(user);
            res.contentType('application/json');
            res.send(JSON.stringify(o));
        })
        .catch((error)=>{
            o.[key1].push("404");
            o.[key2],push("Error");
            res.contentType('application/json');
            res.send(JSON.stringify(o));
        })
}

module.exports.postLogin = (req,res) =>{
    var key1 = 'status';
    var key2 = 'message';
    var key3 = 'result';
    User.findOne({
        where:{
            nama: req.body.nama
        }
    }).then(user=>{
        if(!user){
            res.status(400).send('nama Tidak Ditemukan');
        }else{
            bcrypt.compare(req.body.password, user.get('password'),function (err, isMatch){
                if(err){
                    res.status(400).send('Password Error');
                }
                if (isMatch) {
                    jwt.sign({
                        id:user.get('id'),
                        nama:user.get('nama'),
                        roles: user.get('roles')
                        }, process.env.SECRETKEY, (error, token)=>{
                        res.json({token:token});
                    })
                }else{
                    res.status(400).send('Password Salah')
                }
            })
        }
    })
}



