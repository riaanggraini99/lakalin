var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
     res.render('polres_index',{
         'title': 'Index'
     });
   });

router.get('/laporan_laka', function(req, res, next) {
     res.render('polres_laka',{
        'title': 'laporan_laka'
    });
  });
module.exports = router