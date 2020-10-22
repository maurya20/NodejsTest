var express = require('express');
var router = express.Router();

router.get('/route', function(req, res){
   res.send('GET route on things.');
});
router.get('/:name/:id', function(req, res) {
    res.send('id: ' + req.params.id + ' and name: ' + req.params.name);
 });

//export this router 
module.exports = router;