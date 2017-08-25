



const controller = {
	receiveReport: (req, res) => {
		console.log(req.body);
		res.send('body received');
	}
}

module.exports = controller;
