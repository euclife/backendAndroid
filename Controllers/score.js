const Score = require('../Models/score');

module.exports.getNilai = (req,res) => {
	Score.findAll({
		where: {
			id_user: req.params.id
		}
	}).then(score => {
		res.json({
			"status" : 200,
			"message" : "success",
			"nilai" : score
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