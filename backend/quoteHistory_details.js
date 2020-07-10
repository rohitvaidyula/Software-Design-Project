const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const historySchema = new Schema({
    username: {
        type: String,
        required: true,
        trim: true,
        minlength: 5
    },
    
    quoteID: {
        type: Number,
        required: true
    },

    date: {
        type: Date,
        rquired:true
    },
},{

    timestamps: true,
    });

const history = mongoose.model('history', historySchema)
module.exports = history