const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const loginSchema = new Schema({
    username: {
        type: String,
        required: true,
        trim: true,
        minlength: 5
    },
    password: {
        type: String,
        required:true,
        minlength: 5
    },

    timestamps: true,
    });

    const login = mongoose.model('login', loginSchema)
    module.exports = login