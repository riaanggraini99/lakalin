var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
    res.render('RS_index',{
        'title': 'Index'
    });
  });

  router.get('/surat_keterangan', function(req, res, next) {
    res.render('RS_SK',{
        'title': 'keterangan Laka'
    });
  });
  router.get('/rekam_medis', function(req, res, next) {
    res.render('RS_rekam_medis',{
       'title': 'rekam medis'
   });
 });
 router.get('/cetak_laporan', function(req, res, next) {
    res.render('RS_SK_cetak',{
       'title': 'cetak surat keterangan'
   });
 });
  module.exports = router