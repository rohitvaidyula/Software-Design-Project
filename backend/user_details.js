const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userDetailsSchema = new Schema({
    username: {
        type: String,
        required: true,
        trim: true,
        minlength: 5
    },
    name: {
        type: String,
        required: true,
        trim: true,
        maxlength: 50
    },
    address1:{
        type: String,
        required: true,
        trim: true,
        maxlength: 100
    },

    address2:{
        type: String,
        //required: true,
        trim: true,
        maxlength: 100
    },

    city:{
        type: String,
        required: true,
        trim: true
    },


    state:{
        type: String,
        required: true,
        trim: true,
        minlength: 2
    },

    zip:{
        type: Number,
        required: true,
        trim: true,
        minlength: 5,
        maxlength: 9
    },
},

    
    {
        timestamps: true,
    });

const userDetail = mongoose.model('userDetail', userDetailsSchema)
module.exports = userDetail

