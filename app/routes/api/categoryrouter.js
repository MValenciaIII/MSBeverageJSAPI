const daoClass = require('../../dao/categorydao');
const dao = new daoClass();

const express = require('express');
const router = express.Router();


router.get('/', (req, res) => {
    dao.findAll(req, res);
})


router.post('/categorycreate', (req, res) => {
    dao.postCategory(req, res);
})



module.exports = router;