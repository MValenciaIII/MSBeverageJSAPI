const daoClass = require('../../dao/manufacturerdao');
const dao = new daoClass();

const express = require('express');
const router = express.Router();


router.get('/', (req, res) => {
    dao.findAll(req, res);
})


router.post('/manufacturercreate', (req, res) => {
    dao.postManufacturer(req, res);
})



module.exports = router;