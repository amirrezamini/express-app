require('dotenv').config()


const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')


const errorController = require('./src/controllers/error')


const defaultRouter = require('./src/routes')
const adminRouter = require('./src/routes/admin')


const app = express();
const PORT = process.env.PORT


app.use(bodyParser.urlencoded({ extended: false }))
app.use(express.static(path.join(__dirname, 'src', 'public', 'css')))

app.use(defaultRouter);
app.use('/admin', adminRouter);

app.use(errorController)


app.set('view engine', 'pug')
app.set('views', 'src/views')


app.listen(PORT)