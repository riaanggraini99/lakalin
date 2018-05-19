//const { response } = require('../../helpers');
//const { userService } = require('../../routes/services/users');
const express = require('express');
console.log('aku disiniiiiii')
const router = express.Router();
 console.log('aku masih disini')
const { check, validationResult } = require('express-validator/check');
const {
    User
} = require('../models/users');
const bcrypt = require('bcrypt');
var passport		= 	require('passport');
var localStrategy	=	require('passport-local').Strategy;


// router.get('/', function(req, res, next) {
// 	User.find({}, function(err, users){
// 		console.log(users)    
// 		res.render('admin_index', { title: 'Home', users:users});
// 	});
// 	});

  

router.post('/',function(req,res,next) {

        console.log('aku disini')
        //Get Form Values
        const full_name = req.body.full_name;
        const email = req.body.email;
        const phone = req.body.phone;
        const job = req.body.job;
        const password = req.body.password;
        const confirmPassword = req.body.confirmPassword;

        //Check for Errors
        var errors = req.validationErrors();

        if (errors) {
            res.render('register', {
                errors 			: 	errors,
                full_name 	    :	 full_name,
                email 		    :	 email,
                phone 		    :	 phone,
                job             :    job,
                password 		:	 password,
                confirmPassword	:	 confirmPassword,

            });
        } else {
            //CReating a MOdal for New User
            var newUser = new User({
                full_name 	:	 full_name,
                email 		:	 email,
                phone 		:	 phone,
                job         :    job,
                password    :	 password,


                //profile 	:   profileImageName
            });

            //Create User
            console.log(newUser);

            var salt = 10;

            bcrypt.hash(newUser.password, salt, function (err, hash) {
                if (err) throw err;

                //Set Hashed Password
                newUser.password = hash;

                //Create New User
                newUser.save(newUser, function (err, user) {
                    if (err) throw err;
                    console.log(user);
                });

            });
        }

    });
  
  module.exports =router;