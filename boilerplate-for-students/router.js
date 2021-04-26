const { Router } = require('express');
const router = new Router();
const { db, update } = require('./db');

router.get('/:id/:state', (req, res) => {
	/*console.log(req.params.id);
	console.log(req.params.state);*/

	let id = req.params.id;
	let state;
	if (id !== 'LOC1') {
		state = req.params.state === 'on' ? true : false;
		console.log(id);
	} else {
		state = req.params.state === 'lock' ? true : false;
		console.log(id);
	}

	db.get('devices').find({ id: id }).assign({ on: state }).value();

	update();
	//res.sendStatus(200);
});

module.exports = router;
