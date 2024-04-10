const daoClass = require('../../dao/locationdao');
const dao = new daoClass();

const express = require('express');
const router = express.Router();


router.get('/', (req, res) => {
    dao.findAll(req, res);
})


router.post('/locationcreate', (req, res) => {
    dao.postLocation(req, res);
})



module.exports = router;