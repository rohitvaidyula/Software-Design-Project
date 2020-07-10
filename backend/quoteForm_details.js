const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const quoteFormSchema = new Schema({
    username: {
        type: String,
        required: true,
        trim: true,
        minlength: 5
    },
    
    quoteID: {
        type: String,
        required: true
        
    },

    date: {
        type: Date,
        required: true
    },
    Gallon: {
        type: Number,
        required: true
    },
    pricePerG: {
        type:Number,
        required:true
    },

    InState: {
        type:Boolean,
        required:true
    },
    Price: {
        type: Number,
        required: true
    },
},{


    timestamps: true,
    });

    const form = mongoose.model('form', quoteFormSchema)
    module.exports = form