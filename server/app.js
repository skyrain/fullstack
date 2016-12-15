var cors = require('cors')
var express = require('express')
var db = require('./db')
var bodyParser = require('body-parser');
var assert = require('assert');

var app = express()

// Connect to Mongo on start
db.connect('mongodb://localhost:27017/database', function(err) {
    if (err) {
        console.log('Unable to connect to Mongo.')
        process.exit(1)
    } else {
        app.listen(8080, function() {
            console.log('express server listening on port 8080!')
        })
    }
})

//configure express.js
app.use(cors())
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.set('json spaces', 2);

// APIs
app.get('/persons', function(req, res) {
    console.log("hit /person api");
    // wrap json into "data" field for security reason
    res.json({ "data": [{ "firstName": "tianyu", "lastName": "qiu" }] })
})

// wrap json into "data" field for security reason
app.post('/addPerson', function(req, res) {
    console.log("/addPerson");

    // Get the documents collection
    var collection = db.get().collection('person');
    /*req.body.person comes from the client http.post() body name 'person'. 
    For instance, person.service.ts's addPerson(person: Person): Observable<Person>()*/
    var firstName = req.body.person.firstName;
    var lastName = req.body.person.lastName;

    console.log(firstName);

    collection.insertOne(
        { "firstName": firstName, "lastName": lastName },
        function(err, result) {
            console.log("Inserted 1 person into the collection");
            assert.equal(err, null);
            res.json({ "data": { "firstName": firstName, "lastName": lastName } })
        });
})
