const express = require("express");
const router = express.Router();
const User = require('../models/user');

router.get('', function(req, res, next){ 
  console.log('hello');
  User.find({}).then(users => {
      res.send(users);
  })
});
router.post('', (req, res, next) => {
    User.create(req.body).then((user) => {
        res.status(200).send(user);
    }).catch(next);
});

// router.put();
// router.delete();

module.exports = router;