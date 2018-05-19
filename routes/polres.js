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

  router.get('/laporan_laka/detail_laka', function(req, res, next) {
    res.render('polres_detail_laka',{
       'title': 'detail_laka'
   });
 });

 router.get('/laporan_polisi', function(req, res, next) {
    res.render('polres_laporan_polisi',{
       'title': 'laporan_polisi'
   });
 });

 router.get('/laporan_polisi/cetak', function(req, res, next) {
    res.render('polres_laporan_cetak',{
       'title': 'laporan_cetak'
   });
 });

 router.get('/setting/audit', function(req, res, next) {
    res.render('polres_setting',{
       'title': 'polres_setting'
   });
 });

 
module.exports = router