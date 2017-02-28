var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var User = require('../models/user');

/*
 * GET userlist.
 */
router.get('/userlist', function(req, res) {
  User.find({},{},function(e,docs){
    res.json(docs);
  });
});

/*
 * POST to adduser.
 */
router.post('/adduser', function(req, res) {
  User.create(req.body, function(err, result){
    res.send(
      (err === null) ? { msg: '' } : { msg: err }
    );
  });
});

/*
 * DELETE to deleteuser.
 */
router.delete('/deleteuser/:id', function(req, res) {
  var userToDelete = req.params.id;
  User.remove({ '_id' : userToDelete }, function(err) {
    res.send((err === null) ? { msg: '' } : { msg:'error: ' + err });
  });
});

/*
* PUT to updateuser
*/
router.put('/updateuser/:id', function(req, res) {
  var userToUpdate = req.params.id;
  console.log(userToUpdate);
  var doc = { $set: req.body};
  User.findOneAndUpdate({ '_id' : userToUpdate }, doc, function(err, result) {
    res.send((err === null) ? { msg: '' } : { msg:'error: ' + err });
  });
});

module.exports = router;
