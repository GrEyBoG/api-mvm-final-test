const model = require('../models/responsibles.model');
const controller = {};

controller.list = async (req, res) => {
	try {
		const result = await model.list();
		res.json({
			data: result,
		});
	} catch (error) {
		res.json({
			messaje: 'Sorry We Cant Find Any Responsible',
			error: true,
		});

		console.log(error);
	}
};



module.exports = controller;