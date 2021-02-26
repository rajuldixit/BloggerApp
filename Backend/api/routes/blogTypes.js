const express = require("express");
const router = express.Router();
const BlogType = require('../models/blogType');

router.get('', (req, res, next) => {
    console.log('hi')
    BlogType.find({}).then(blogTypes => {
      res.send(blogTypes);
    })
 });

 router.post('', (req, res, next) => {
     BlogType.create(req.body).then( type => {
       res.send(type);
     }).catch(next);
 });

 module.exports = router; 