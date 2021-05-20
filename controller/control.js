const { response } = require('express')
const Link = require('../model/Link')

const allLinks = async (req, res) => {

	try {
		console.log(req.ip)
		let docs = await Link.find({})
		res.render('all', { links: docs })

	} catch(error) {

		res.send(error)

	}
}

const addLink = async (req, res) => {

	try {	
		const myObj = new Link({
			title: req.body.title,
			description: req.body.description,
			url: req.body.url
		})
		await myObj.save()
		res.redirect('/')
	} catch(error) {
		res.send(error)
	}
}

const redirect = async (req, res) => {

	try {

		const url = await Link.findOneAndUpdate({title: req.params.title }, {  $inc: { click: 1 }})
		res.redirect(url.url)

	} catch(error) {
		res.send('Error not found 404')
	}
}

module.exports = { allLinks,addLink,redirect }
