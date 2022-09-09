const express = require('express')

const router = express.Router()

router.get('/', (req, res) => {
    console.log('Admin Logged In!')
})

module.exports = router