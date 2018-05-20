var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
     res.render('admin_index',{
         'title': 'Indexs'
     });
   }); 
router.get('/korban', function(req, res, next) {
    res.render('admin_korban',{
        'title': 'Korban'
    });
  });

  router.get('/list', function(req, res, next) {
    res.render('admin_rumah_sakit',{
        'title': 'rumah_sakit'
    });
  });
  router.get('/SK', function(req, res, next) {
    res.render('admin_SK_rumah_sakit',{
        'title': 'SK_rumah_sakit'
    });
  });
  router.get('/kepolisian/polres', function(req, res, next) {
    res.render('admin_polres',{
        'title': 'polres'
    });
  });

  router.get('/user_management/polres', function(req, res, next) {
    res.render('admin_polres_management',{
        'title': 'polres'
    });
  });
  router.get('/user_management/admin', function(req, res, next) {
    res.render('admin_management',{
        'title': 'admin'
    });
  });
  router.get('/user_management/rumah_sakit', function(req, res, next) {
    res.render('admin_RS_management',{
        'title': 'rumah_Sakit'
    });
  });
  router.get('/user_management/masyarakat', function(req, res, next) {
    res.render('admin_masyarakat',{
        'title': 'masyarakat'
    });
  });
  router.get('/pengajuan_claim/claim', function(req, res, next) {
    res.render('admin_claim',{
        'title': 'claim'
    });
  });

  router.get('/statistik', function(req, res, next) {
    res.render('admin_statistik',{
        'title': 'statistik'
    });
  });
  router.get('/claim_detail', function(req, res, next) {
    res.render('admin_claim_detail',{
        'title': 'claim detail'
    });
  });
  router.get('/polisi_SK', function(req, res, next) {
    res.render('admin_SK_polisi',{
        'title': 'claim detail'
    });
  });
  router.get('/homepage', function(req, res, next) {
    res.render('admin_homepage',{
        'title': 'claim detail'
    });
  });
  
  
  module.exports = router;