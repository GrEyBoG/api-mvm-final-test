const { Connection } = require('../database/db');
const model = {};

model.list = async () => {
	console.log('\n\nLISTING REQUEST ON\n\n');

    const pool = await Connection;
    const sql = `SELECT * FROM Solicitud ORDER BY IDSolicitud DESC`;
    
    const result = await pool.request().query(sql);

	console.log('\n\nLISTING REQUEST OFF\n\n');
    return result;
};

model.createRequest = async (data) => {

	console.log('\n\nCREATING REQUEST ON\n\n');

    const pool = await Connection;
    const sql = `INSERT INTO Solicitud 
							(Radicado, 
							Descripcion, 
							FechaSolicitud, 
							FechaRespuesta, 
							IDResponsable, 
							CorreoSolicitante, 
							NombreSolicitante, 
							ApellidoSolicitante, 
							TelefonoSolicitante, 
							NombreEmpresa, 
							IdTipoSolicitud, 
							IDEstado) 
							
				VALUES ('${data.Radicado}', 
						'${data.Descripcion}', 
						'${data.FechaSolicitud}', 
						null, 
						null, 
						'${data.CorreoSolicitante}', 
						'${data.NombreSolicitante}', 
						'${data.ApellidoSolicitante} ', 
						'${data.TelefonoSolicitante}', 
						'${data.NombreEmpresa}', 
						'${data.IdTipoSolicitud}',1)
    `;
    const result = await pool.request().query(sql, data);

	console.log('\n\nCREATING REQUEST OFF\n\n');

	return result;
};


model.update = async (data,id) => {
	try {
		console.log('\n\UPDATING REQUEST ON\n\n');

		const pool = await Connection;

		const sql = `UPDATE Solicitud 
					SET FechaRespuesta = '${data.FechaRespuesta}', 
					IDResponsable = '${data.IDResponsable}',
					IDEstado = ${data.IDEstado}
					WHERE IDSolicitud = ${id}`;

		const result = await pool.request().query(sql);

		console.log('\n\UPDATING REQUEST OFF\n\n');

		return result;

	} catch (error) {
		console.log(error);
	}
};

model.updateDate = async (data,id) => {
	try {
		console.log('\n\UPDATING DATE REQUEST ON\n\n');

		const pool = await Connection;

		const sql = `UPDATE Solicitud 
					SET FechaRespuesta = '${data.FechaRespuesta}' 
					WHERE IDSolicitud = ${id}`;

		const result = await pool.request().query(sql);

		console.log('\n\UPDATING DATE REQUEST OFF\n\n');

		return result;

	} catch (error) {
		console.log(error);
	}
};

model.updateResponsible = async (data,id) => {
	try {
		console.log('\n\UPDATING RESPONSIBLE REQUEST ON\n\n');

		const pool = await Connection;

		const sql = `UPDATE Solicitud 
					SET IDResponsable = '${data.IDResponsable}',
					IDEstado = ${data.IDEstado} 
					WHERE IDSolicitud = ${id}`;

		const result = await pool.request().query(sql);

		console.log('\n\UPDATING RESPONSIBLE REQUEST OFF\n\n');

		return result;

	} catch (error) {
		console.log(error);
	}
};


module.exports = model;


