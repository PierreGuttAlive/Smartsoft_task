const express = require('express')

const index = require('./routes/index')
const api = require('./routes/api')

const app = express()

app.use(express.static('public'))
app.use('/', index)
app.use('/api', api)

module.exports = app