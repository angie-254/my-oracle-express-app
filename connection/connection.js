const oracledb = require('oracledb');
const dbConfig = require('../config/dbconfig');

oracledb.outFormat = oracledb.OUT_FORMAT_OBJECT;

async function getConnection() {
    const connection = await oracledb.getConnection ({
        user          : dbConfig.user,
        password      : dbConfig.password,
        connectString :  dbConfig.connectString
    });

    return connection;
}


module.exports = { getConnection };