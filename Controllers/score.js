const Score = require('../Models/score');

module.exports.getNilai = (req,res) => {
	Jawaban.findAll({
		where: {
			id_user: req.params.id
		}
	}).then(jawaban => {
		res.json({
			"status" : 200,
			"message" : "success",
			"nilai" : jawaban
		});
		
	});
}

module.exports.setNilai = (req, res) =>{
	var id_user = req.body.id;
	var score = req.body.score;
	Score.create({
		id_user:    id_user,
		score:    score
	})
	.then(nilai => {
		res.json(nilai)
	});

}