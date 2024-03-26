const daoClass = require('../../dao/recordsdao');
const dao = new daoClass();

const express = require('express');
const router = express.Router();


router.get('/', (req, res) => {
    dao.findAll(req, res);
})

router.get('/recordsReal', (req, res) => {
    dao.findAllFK(req, res);
})

router.post('/recordscreate', (req, res) => {
    dao.postRecord(req, res);
})



module.exports = router;