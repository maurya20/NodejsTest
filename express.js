var express = require('express');
var app = express();

app.use('/images',express.static(__dirname + '/media'))
app.get('/get', function(req, res){
   res.send('The id you specified is');
});


app.listen(3000)