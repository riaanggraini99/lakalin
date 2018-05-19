var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/lakalin');

var db = mongoose.connection;
var Schema = mongoose.Schema;
mongoose.models = {};
mongoose.modelSchemas = {};

//User Schema
var UserSchema = new Schema({
    full_name: {
        type: String,
        index: true
    },
    email: {
        type: String,
        index: true
    },
    phone: {
        type: String,
        index: true
    },
    Adress: {
        type :String,
        index: true
    },
    role_id: {
        type : Number,
        //index : true
},
    password: {
        type: String,
        required: true,
        bcrypt: true
    },
    job: {
        type: String,
        required: true,
        
    },
    contoh: {
        type: String,
        required: true,
        
    },

});

module.exports = mongoose.model('Users', UserSchema);
