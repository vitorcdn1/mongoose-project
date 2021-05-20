const express = require('express')
const router = express.Router()
const Link = require('../controller/control')

router.get('/', Link.allLinks)
router.get('/add', (req, res) => { res.render('add') })
router.get('/:title', express.urlencoded({ extended: true }),Link.redirect)

router.post('/', express.urlencoded({ extended: true}),Link.addLink)


module.exports = router
