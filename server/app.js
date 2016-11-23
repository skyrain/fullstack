var cors = require('cors')
var express = require('express')
var app = express()

app.use(cors())

app.set('json spaces', 2);

app.get('/person', function (req, res) {
	console.log("hit /person api");
	// wrap json into "data" field for security reason
	res.json({ "data": [{ "firstName": "tianyu", "lastName": "qiu" }] })
})

app.listen(8080, function () {
	console.log('express server listening on port 8080!')
})
