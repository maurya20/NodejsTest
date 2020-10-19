var express = require('express');
var router = express.Router();

router.get('/get', function(req, res){
   res.send('GET route on things.');
});
router.get('/post', function(req, res){
   res.send('POST route on things.');
});

//export this router 
module.exports = router;