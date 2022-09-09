const express = require('express')

const router = express.Router()

const result = []

router.get('/', (req, res) => {
    res.render('index', {products: result})
})

router.get('/add-product', (req, res) => {
    res.render('add-product')
})
router.post('/add-product', (req, res) => {
    result.push({title: req.body.title})
    console.log(req)
    res.redirect('/')
})

module.exports = router