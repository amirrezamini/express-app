require('dotenv').config()

const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')

const defaultRouter = require('./src/routes/index')

const app = express();
const PORT = process.env.PORT

app.use(bodyParser.urlencoded({extended: false}))
app.use(express.static(path.join(__dirname, 'src', 'public', 'css')))
app.use(defaultRouter);

app.set('view engine', 'pug')
app.set('views', 'src/views')

app.listen(PORT)