var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/login', function(req, res, next) {
  if(!req.body.username || !req.body.password)
    return res.status(400).send({
      status: 400,
      message: 'Missing data'
    })

  if(req.body.username !== "admin" || req.body.password !== "admin")
    return res.status(401).send({
      status: 401,
      message: 'Username or password is wrong'
    })

  res.send({
    token: '123123123'
  })
});

module.exports = router;