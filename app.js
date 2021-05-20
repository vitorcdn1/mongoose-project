#!/bin/nodejs
const express = require('express')
const app = express()
const path = require('path')
const mongoose = require('mongoose')
const url = "mongodb://localhost:27017/newLinks"
const router = require('./routes/router')
const port = 3000

app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'template'))
app.use(express.static(path.join(__dirname, 'public')))

app.use('/', router)

mongoose.connect(url, {
	useNewUrlParser: true,
	useUnifiedTopology: true,
	useFindAndModify: false
})

const db = mongoose.connection

db.on('error', () => { console.log("Error")} )
db.once('open', () => { console.log("Database Loaded")} )


app.listen(port, (req, res) => {
	console.log(`Server running on port ${port}`)
})
