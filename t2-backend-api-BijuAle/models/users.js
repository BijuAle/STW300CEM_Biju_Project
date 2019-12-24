var mongoose = require('mongoose');
var passportLocalMongoose = require('passport-local-mongoose');
var Schema = mongoose.Schema;

let User = new Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    admin: {
        type: Boolean,
        default: false
    },
    groupId:{
        type: Schema.Types.ObjectId,
        required:false
    }
}, { timestamps: true });

User.plugin(passportLocalMongoose);
module.exports = mongoose.model('User', User);