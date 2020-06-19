var express = require('express');
var router = express.Router();
var request = require('request');
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/price', function(req, res, next) {
  var image = "https://vignette.wikia.nocookie.net/animalcrossing/images/4/44/NH-Icon-Nook_Phone-Critterpedia.png/revision/latest/scale-to-width-down/340?cb=20200430155808";
  res.render('price', {imageURL: image});
});
router.post('/price', function(req, res, next) {
  //var image = "https://vignette.wikia.nocookie.net/animalcrossing/images/4/44/NH-Icon-Nook_Phone-Critterpedia.png/revision/latest/scale-to-width-down/340?cb=20200430155808";
  //var imageURL = req.param.imageURL;
  var name = req.body.critterName;
  //var type = req.body.critterType;
  //request('http://acnhapi.com/v1/' + type + '/bitterling', function (error, response, body) {
  //          if (!error && response.statusCode == 200) {
  //                  res.send('critterName') // Print the google web page.
  //                        }
  //                        });
  res.send(name); 
});
module.exports = router;
