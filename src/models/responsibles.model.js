const sql = require('mssql')

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////


const sqlConfig = {
	user: 'jovenesmvm',
	password: '0^618Bjt37y@',
	database: 'sqldb-gestionsolicitudes-pdn-001',
	server: 'sql-gestionsolicitudes-pdn-001.database.windows.net',
	pool: {
	  max: 10,
	  min: 0,
	  idleTimeoutMillis: 30000
	},
	options: {
	  trustServerCertificate: false
	}
  }


////////////////////////////////////////////////////////////////////////////////////////////////////////////////
const model = {};


model.list = async () => { 
	try {
        
		const pool = await sql.connect(sqlConfig);
		console.log("\n\n\n==========	LISTING RESPONSIBLE ON	==========\n\n\n")
		const result = await pool.query(`SELECT * 
											FROM Responsable`);
		return result;
		
	} catch (error) {
		console.log(error);
	}
};




module.exports = model;