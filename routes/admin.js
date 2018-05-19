var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
     res.render('admin_index',{
         'title': 'Index'
     });
   }); 
router.get('/korban', function(req, res, next) {
    res.render('korban',{
        'title': 'Korban'
    });
  });

  router.get('/rumah_sakit/list', function(req, res, next) {
    res.render('rumah_sakit',{
        'title': 'rumah_sakit'
    });
  });
  router.get('/rumah_sakit/SK', function(req, res, next) {
    res.render('rumah_sakit',{
        'title': 'SK_rumah_sakit'
    });
  });
  router.get('/kepolisian/polres', function(req, res, next) {
    res.render('polres',{
        'title': 'polres'
    });
  });

  router.get('/user_management/polres', function(req, res, next) {
    res.render('polres_management',{
        'title': 'polres'
    });
  });
  router.get('/user_management/admin', function(req, res, next) {
    res.render('admin_management',{
        'title': 'admin'
    });
  });
  router.get('/pengajuan_claim/claim', function(req, res, next) {
    res.render('claim',{
        'title': 'claim'
    });
  });
  module.exports = router;