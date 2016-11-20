var cors = require('cors')
var express = require('express')
var app = express()

app.use(cors())

app.get('/person', function (req, res) {
	console.log("hit /person api");
	res.send({ "firstName": "tianyu", "lastName": "qiu" })
})

app.listen(8080, function () {
	console.log('express server listening on port 8080!')
})
