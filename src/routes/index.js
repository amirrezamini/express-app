const express = require('express')
const admin = require('./admin/index')
const router = express.Router()

const products = admin.products

router.get('/', (req, res) => {
    res.render('Shop', { products })
})

module.exports = router