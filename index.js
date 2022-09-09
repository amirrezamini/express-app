require('dotenv').config()


const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')


const defaultRouter = require('./src/routes')
const admin = require('./src/routes/admin')


const app = express();
const PORT = process.env.PORT


app.use(bodyParser.urlencoded({ extended: false }))
app.use(express.static(path.join(__dirname, 'src', 'public', 'css')))

app.use(defaultRouter);
app.use('/admin', admin.routes);

app.use((req, res, next) => {
    res.status(404).render('error', { pageTitle: 'Page Not Found' })
})


app.set('view engine', 'pug')
app.set('views', 'src/views')


app.listen(PORT)