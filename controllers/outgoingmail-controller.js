const dbconnection = require('../connection/connection');

async function getOutgoingMails() {
   const connection =  await dbconnection.getConnection();
       const result = await connection.execute(
           `SELECT * FROM OUT_GOING_MAILS`
       );
    return result.rows;

}

async function getOutgoingMailById(id) {
    const connection =  await dbconnection.getConnection();
        const result = await connection.execute(
            `SELECT * FROM OUT_GOING_MAILS WHERE ID = :id`,
        [id]
        );
     return result.rows;
 
 }

module.exports = { getOutgoingMails, getOutgoingMailById };