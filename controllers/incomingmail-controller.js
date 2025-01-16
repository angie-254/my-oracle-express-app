const dbconnection = require('../connection/connection');

async function getIncomingMails(offset=0, size=50) {
   const connection =  await dbconnection.getConnection();
       const result = await connection.execute(
        `SELECT * FROM INCOMING_MAILS ORDER BY ID desc OFFSET ${offset} ROWS FETCH NEXT ${size} ROWS ONLY`
       );
    return result.rows;

}

async function getIncomingMailById(id) {
   const connection =  await dbconnection.getConnection();
       const result = await connection.execute(
        `SELECT * FROM INCOMING_MAILS WHERE ID = :id`,
        [id]
       );
    return result.rows;
}

async function registerIncomingMail(body) {
   const connection =  await dbconnection.getConnection();
       const result = await connection.execute(
        `INSERT INTO INCOMING_MAILS (FROM_EMAIL, TO_EMAIL, SUBJECT, MESSAGE) VALUES (:fromEmail, :toEmail, :subject, :message)`,
        [body.fromEmail, body.toEmail, body.subject, body.message]
       );
    return result.rows;
}



module.exports = { getIncomingMails, getIncomingMailById };