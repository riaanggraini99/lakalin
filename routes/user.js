var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
    res.render('index',{
        'title': 'Indexl'
    });
  });

  router.get('/kejadian', function(req, res, next) {
    res.render('kejadian',{
        'title': 'Indexl'
    });
  });
  router.get('/login', function(req, res, next) {
    res.render('login',{
        'title': 'Indexl'
    });
  });

  router.get('/map', function(req, res, next) {
    res.render('map',{
        'title': 'Indexl'
    });
  });
  router.get('/laporan_laka', function(req, res, next) {
    res.render('user/laporan_laka',{
        'title': 'Indexl'
    });
  });
  router.get('/ajukan_klaim', function(req, res, next) {
    res.render('user/ajukan_klaim',{
        'title': 'Indexl'
    });
  });
  router.get('/surat_jaminan', function(req, res, next) {
    res.render('user/surat_jaminan',{
        'title': 'Indexl'
    });
  });
  router.get('/profil', function(req, res, next) {
    res.render('user/profil',{
        'title': 'Indexl'
    });
  });
  router.get('/contactus', function(req, res, next) {
    res.render('user/contactus',{
        'title': 'Indexl'
    });
  });
  router.get('/index', function(req, res, next) {
    res.render('user/index',{
        'title': 'Indexl'
    });
  });
  router.get('/widgets', function(req, res, next) {
    res.render('user/widgets',{
        'title': 'Indexl'
    });
  });
  router.get('/forms', function(req, res, next) {
    res.render('user/forms',{
        'title': 'Indexl'
    });
  });
  router.get('/panels', function(req, res, next) {
    res.render('user/panels',{
        'title': 'Indexl'
    });
  });
  router.get('/icons', function(req, res, next) {
    res.render('user/icons',{
        'title': 'Indexl'
    });
  });
  router.get('/forms', function(req, res, next) {
    res.render('user/forms',{
        'title': 'Indexl'
    });
  });
  router.get('/tables', function(req, res, next) {
    res.render('user/tables',{
        'title': 'Indexl'
    });
  });
  
module.exports = router;