const Soal = require('../Models/soal');

const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
dotenv.config();

module.exports.init = (req,res) => {
	jwt.verify(req.token, process.env.SECRETKEY, (error,authData)=>{
		if (error) {
			res.sendStatus(403);
		}else{
			if (authData['role']=="admin") {
				Soal.bulkCreate([
				{
					deskripsi : 'Kemerdekaan Indonesia diakui oleh Belanda pada tanggal',
				},
				{
					deskripsi : 'Negara yang mengakui kedaulatan indonesia adalah',
				},
				]).then(soal => {
					res.json({
						"status" : 200,
						"message" : "success",
						"soal" : soal
					});
				})
			}else{
				res.json({
					"status" : 400,
					"message" : "Anda Tidak Punya Akses"
				});
			}   
		}
		
	})
}

module.exports.soal = (req,res) => {
	jwt.verify(req.token, process.env.SECRETKEY, (error,authData)=>{
		if (error) {
			res.sendStatus(403);
		}else{
			if (authData['role']!="user") {
				var data = {}
				Soal.findAll()
				.then(soal =>{
					res.json({
						"status" : 200,
						"message" : "success",
						"soal" : soal
					})
				}
				)
			}
		}
	})
}