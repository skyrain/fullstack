var cors = require('cors')
var express = require('express')
var db = require('./db')
var bodyParser = require('body-parser');

var app = express()

// Connect to Mongo on start
db.connect('mongodb://localhost:27017/database', function (err) {
    if (err) {
        console.log('Unable to connect to Mongo.')
        process.exit(1)
    } else {
        app.listen(8080, function () {
            console.log('express server listening on port 8080!')
        })
    }
})

//config
app.use(cors())
app.use(bodyParser.json());
app.set('json spaces', 2);


// APIs
app.get('/persons', function (req, res) {
    console.log("hit /person api");
    // wrap json into "data" field for security reason
    res.json({ "data": [{ "firstName": "tianyu", "lastName": "qiu" }] })
})

// wrap json into "data" field for security reason
app.post('/addPerson', function (req, res) {
    console.log("hit /addPerson api");

    // Get the documents collection
    var collection = db.collection('person');
    var firstName = req.body.firstName;
    var lastName = req.body.lastName;

    collection.insertOne(
        { "data": { "firstName": firstName, "lastName": lastName } },
        function (err, result) {
            console.log("Inserted 1 person into the collection");
            callback(result);
        });
    res.json({ "data": { "firstName": firstName, "lastName": lastName } })
})
