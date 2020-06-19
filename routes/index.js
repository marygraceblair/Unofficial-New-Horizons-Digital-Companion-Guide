var express = require('express');
var router = express.Router();
var request = require('request');
/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', { title: 'Express' });
});

router.get('/price', function(req, res, next) {
    var image = "https://vignette.wikia.nocookie.net/animalcrossing/images/4/44/NH-Icon-Nook_Phone-Critterpedia.png/revision/latest/scale-to-width-down/340?cb=20200430155808";
    res.render('price', {imageURL: image, critterName:'', critterPrice: 0});
});
router.post('/price', function(req, res, next) {
    var name = req.body.critterName;
    var type = req.body.critterType;
    request('http://acnhapi.com/v1/' + type + '/' + name,{json: true}, function (error, response, body) {
        if (!error && response.statusCode == 200) {
            res.render('price', {imageURL: body.image_uri, critterName: body.image_uri, critterPrice: body.price});
        }
        else {
            res.send("Critter not found");
        }
    });
});
module.exports = router;
