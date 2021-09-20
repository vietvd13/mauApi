const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const giftSchema = new Schema({
    _id: mongoose.Schema.Types.ObjectId,
    gift:{
        type: String,
        required: true,
    },
    clicked: {
        type: Boolean,
        required: true,
    }
}, {
    timestamps: true
});

module.exports = giftSchema;