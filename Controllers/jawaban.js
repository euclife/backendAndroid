const Jawaban = require('../models/jawaban');

const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
dotenv.config();

module.exports.init = (req,res) => {
	jwt.verify(req.token, process.env.SECRETKEY, (error,authData)=>{
		if (error) {
			res.sendStatus(403);
		}else{
			if (authData['role']=="admin") {
				Jawaban.bulkCreate([
			{
				id_soal : 1,
				deskripsi : '1 Maret 1949',
				cek : "false"
			},
			{
				id_soal : 1,
				deskripsi : '27 Desember 1949',
				cek : "true"
			},
			{
				id_soal : 1,
				deskripsi : '13 Agustus 1950',
				cek : "false"
			},
			{
				id_soal : 1,
				deskripsi : '17 Agustus 1945',
				cek : "false"
			},
			{
				id_soal : 2,
				deskripsi : 'India',
				cek : "false"
			},
			{
				id_soal : 2,
				deskripsi : 'Jepang',
				cek : "false"
			},
			{
				id_soal : 2,
				deskripsi : 'Mesir',
				cek : "true"
			},
			{
				id_soal : 2,
				deskripsi : 'Malaysia',
				cek : "false"
			}
			]).then(jawaban => {
				res.json({
					"status" : 200,
					"message" : "success",
					"jawaban" : jawaban
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

module.exports.findJawaban = (req,res) => {
	jwt.verify(req.token, process.env.SECRETKEY, (error,authData)=>{
		if (error) {
			res.sendStatus(403);
		}else{
			if (authData['role']=="admin") {
				Jawaban.findAll({
				  where: {
				    id_soal: req.params.id
				  }
				}).then(jawaban => {
				res.json({
					"status" : 200,
					"message" : "success",
					"jawaban" : jawaban
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

module.exports.getAll = (req,res) => {
	jwt.verify(req.token, process.env.SECRETKEY, (error,authData)=>{
		if (error) {
			res.sendStatus(403);
		}else{
			if (authData['role']=="admin") {
				Jawaban.findAll({
				}).then(jawaban => {
				res.json({
					"status" : 200,
					"message" : "success",
					"jawaban" : jawaban
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