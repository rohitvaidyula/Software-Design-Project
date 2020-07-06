var express = require('express');
var router = express.Router();

var members = [
  {
    username: 'user', password: 'password'
  }
]

/* GET home page. */
router.post('/login', function(req, res) {
  let result = members.find(user => user.username == req.body.username);
  if (result) {
    if(result.password == req.body.password) {
      res.status(200).send({
        message: "Successful Login!"
      })
    } else {
      res.status(500).send({
        message: "Incorrect Password!"
      })
    }
  }
  else {
    res.status(500).send ({
      message: "User not found"
    })
  }
});
module.exports = router;
