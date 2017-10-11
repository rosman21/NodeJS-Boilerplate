var express = require('express');
var router = express.Router();
var path = require('path')

//Home endpoint
router.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, '/app/views', 'index.html'))
})


// router.post('', )
//
// router.get('', )
//
// router.get('', )
//
// router.get('', )
//
// router.get('', )


module.exports = router;
