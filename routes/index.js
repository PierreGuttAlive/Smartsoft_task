const express = require('express')
const router = express.Router()
const path = require('path')

router.get('/', (req, res) => {
	res.sendFile(path.join(__dirname, '../views', 'index.html'))
});

router.get('/last_hour', (req, res) => {
	res.sendFile(path.join(__dirname, '../views', 'last_hour.html'))
})

router.get('/unfinished', (req, res) => {
	res.sendFile(path.join(__dirname, '../views', 'unfinished.html'))
})

router.get('/top_used', (req, res) => {
	res.sendFile(path.join(__dirname, '../views', 'top_used.html'))
})

module.exports = router
