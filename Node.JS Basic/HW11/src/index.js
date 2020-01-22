// mongod --dbpath "D:\WEB for ABAPers\Homeworks\Finished\Node.JS Basic\HW11\MongoDB"

const express = require('express');
const app = express();
const MongoClient = require('mongodb').MongoClient;
var ObjectId = require('mongodb').ObjectID;
const url = 'mongodb://127.0.0.1:27017';
const bodyParser= require('body-parser');

var db;
var colUsers;
var colWorkers;

const User = require("./User");
const Worker = require("./Worker");

app.use(bodyParser.urlencoded({extended: true}));

MongoClient.connect(url, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}, (err, client) => {
  if (err) return console.log(err);
  db = client.db('hw11');
  colWorkers = db.collection('workers');
  colUsers = db.collection('users');
  app.listen(process.env.PORT || 3000, () => {
    console.log('listening on 3000');
  })
})

app.route('/worker')
    .get(function (req, res) {
        colWorkers.find().toArray((err, result) => {
            if (err) return console.log(err);
            result.forEach((element) => {
                let worker = new Worker(element.worker.name, element.worker.surname, element.worker.age, element.worker._position);
                console.log(worker);
            });
            res.send(result);
        })
    })
    .post(function (req, res) {
        let worker = new Worker(req.body.name, req.body.surname, req.body.age, req.body.position);

        colWorkers.insertOne({
            worker
        }, (err, result) => {
            if (err) return console.log(err);
            res.send('Object added');
            console.log(result);
        });
    })
    .put(function (req, res) {
        let worker = new Worker(req.body.name, req.body.surname, req.body.age, req.body.position);

        colWorkers.updateOne({
            _id: ObjectId(req.body._id)
        }, {
            $set: {
                worker: worker
            }
        }, (err, result) => {
            if (err) return console.log(err);
            res.send('Object updated');
            console.log(result);
        })
    })
    .delete(function (req, res) {
        colWorkers.deleteOne({
            _id: ObjectId(req.body._id)
        }, (err, result) => {
            if (err) return console.log(err);
            res.send('Object deleted');
            console.log(result);
        })
    });



app.route('/user')
    .get(function (req, res) {
        colUsers.find().toArray((err, result) => {
            if (err) return console.log(err);
            result.forEach((element) => {
                let user = new User(element.user.name, element.user.surname, element.user.age);
                console.log(user);
            });
            res.send(result);
        })
    })
    .post(function (req, res) {
        let user = new User(req.body.name, req.body.surname, req.body.age);

        colUsers.insertOne({
            user
        }, (err, result) => {
            if (err) return console.log(err);
            res.send('Object added');
            console.log(result);
        });
    })
    .put(function (req, res) {
        let user = new User(req.body.name, req.body.surname, req.body.age);

        colUsers.updateOne({
            _id: ObjectId(req.body._id)
        }, {
            $set: {
                user: user
            }
        }, (err, result) => {
            if (err) return console.log(err);
            res.send('Object updated');
            console.log(result);
        })
    })
    .delete(function (req, res) {
        colUsers.deleteOne({
            _id: ObjectId(req.body._id)
        }, (err, result) => {
            if (err) return console.log(err);
            res.send('Object deleted');
            console.log(result);
        })
    });