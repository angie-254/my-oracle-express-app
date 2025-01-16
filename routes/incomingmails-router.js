const express = require('express');
const router = express.Router();
const incomingmailController = require('../controllers/incomingmail-controller');
const { pageOffset} = require('../utils/offset-helper');

// get all incoming mails
router.get('/', async (req, res) => {
    const { query } = req;
    const offset = pageOffset(query.page || 1, query.size || 50);
    const mails = await incomingmailController.getIncomingMails(offset, query.size);
    res.send(mails).status(400);
});

//get mail by id
router.get('/:id', async (req, res) => {
    const { id } = req.params;
    const mail = await incomingmailController.getIncomingMailById(id);
    res.send(mail);
});

//sign off

//register incomingMail
router.post('/', async (req, res) => {
    const { body } = req;
    const mail = await incomingmailController.registerIncomingMail(body);
    res.send(mail);
})


router.delete('/:id', async (req, res) => {
    const { id } = req.params;
    const mail = await incomingmailController.getIncomingMailById(id);
    res.send(mail);
});



module.exports = router;