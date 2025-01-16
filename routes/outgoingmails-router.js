const express = require('express');
const router = express.Router();
const outgoingmailController = require('../controllers/outgoingmail-controller');

router.get('/', async (req, res) => {
    const mails = await outgoingmailController.getOutgoingMails();
    const responseObject = {status:200, data:mails, message:'Mails fetched Successfully', error: null};
    res.status(200).send(responseObject);
});

router.get('/:id', async (req, res) => {
    const { id } = req.params;
    console.log({id});
    const mail = await outgoingmailController.getOutgoingMailById(id);
    console.log('outgoing mail');
    res.send(mail);
});

module.exports = router;