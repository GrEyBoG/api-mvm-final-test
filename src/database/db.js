const sql = require('mssql');

const sqlConfig = {
    user: 'jovenesmvm',
    password: '0^618Bjt37y@',
    database: 'sqldb-gestionsolicitudes-pdn-001',
    server: 'sql-gestionsolicitudes-pdn-001.database.windows.net',
    pool: {
        max: 10,
        min: 0,
        idleTimeoutMillis: 30000,
    },
    options: {
        encrypt: true,
        trustServerCertificate: false,
    },
};

const Connection = new sql.ConnectionPool(sqlConfig)
    .connect()
    .then((pool) => {
        console.log('CONNECTED TO THE DATABASE'.bgBlack.magenta);
        return pool;
    })
    .catch((err) =>
        console.log('ERROR TO CONNECT TO THE DATABASE', err)
    );

module.exports = {
    sql,
    Connection,
};