const model = require('../models/requests.model');
const controller = {};

controller.list = async (req, res) => {
	try {
		const result = await model.list();
		res.json({
			data: result,
		});
	} catch (error) {
		res.json({
			messaje: 'Sorry We Cant Find Any Request',
			error: true,
		});

		console.log(error);
	}
};

controller.searchRequest = async (req, res) => {
	try {
		const result = await model.searchRequest(req.params.id);
		res.json({
			data: result,
		});
	} catch (error) {
		res.json({
			messaje: 'Sorry We Cant Find Any Request',
			error: true,
		});

		console.log(error);
	}
};

controller.createRequest = async (req, res) => {
	
	// const tTime = Date.now();
	// const toDay = new Date(tTime);

	let fecha = new Date();
	let fechaSolicitud = (`${fecha.getFullYear()}-${
		fecha.getMonth() + 1
	}-${fecha.getDate()} ${fecha.getHours()}:${fecha.getMinutes()}:${fecha.getSeconds()}.${fecha.getMilliseconds()}`);

	console.log(typeof fecha + ' fecha: ' + fecha);

	console.log(typeof fechaSolicitud + ' fechaSolicitud: ' + fechaSolicitud);

	const data = {
		Radicado: 'MVM-' + req.body.IdTipoSolicitud + '-' + Math.floor(Math.random() * 1000000000),
		Descripcion: req.body.Descripcion,
		FechaSolicitud: fechaSolicitud,
		FechaRespuesta: null,
		IDResponsable: null,
		CorreoSolicitante: req.body.CorreoSolicitante,
		NombreSolicitante: req.body.NombreSolicitante,
		ApellidoSolicitante: req.body.ApellidoSolicitante,
		TelefonoSolicitante: req.body.TelefonoSolicitante,
		NombreEmpresa: req.body.NombreEmpresa,
		IdTipoSolicitud: req.body.IdTipoSolicitud,
		IDEstado: 1
	};

	const x = await model.createRequest(data);

	if (x) {
		res.json({
			messaje: 'Request Created',
			error: false,
		});
	} else {
		res.json({
			messaje: 'Sorry We Cant Create The Request',
			error: true,
		});
	}

	

	console.log(data);

};

controller.update = async (req, res) => {
	try {
		const id = req.params.id;
		const data = {
			FechaRespuesta: req.body.FechaRespuesta, 
			IDResponsable: req.body.IDResponsable,
			IDEstado: req.body.IDEstado,   
		};

		console.log(data);
		console.log(id);

		await model.update(data, id);

		
		res.json({
			mensaje: 'Request Updated',
			error: false,
		});

		
	} catch (error) {
		res.json({
			mensaje: 'Sorry We Cant Update The Request',
			error: true,
		});
	}
};

controller.updateDate = async (req, res) => {
	try {
		const id = req.params.id;
		const data = {
			FechaRespuesta: req.body.FechaRespuesta,
		};

		console.log(data);
		console.log(id);

		await model.updateDate(data, id);

		
		res.json({
			mensaje: 'Request Updated',
			error: false,
		});

		
	} catch (error) {
		res.json({
			mensaje: 'Sorry We Cant Update The Request',
			error: true,
		});
	}
};

controller.updateResponsible = async (req, res) => {
	try {
		const id = req.params.id;
		const data = {
			IDResponsable: req.body.IDResponsable,
			IDEstado: req.body.IDEstado
		};

		console.log(data);
		console.log(id);

		await model.updateResponsible(data, id);

		
		res.json({
			mensaje: 'Request Updated',
			error: false,
		});

		
	} catch (error) {
		res.json({
			mensaje: 'Sorry We Cant Update The Request',
			error: true,
		});
	}
};

module.exports = controller;