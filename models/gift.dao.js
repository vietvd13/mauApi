// DAO = Data Access Object
const mongoose = require('mongoose');
const giftSchema = require('./gift.model');

giftSchema.statics = {
    create: function(data, cb){
        var gift = new this(data);
        gift.save(cb);
    },

    get: function(query, cb){
        this.find(query, cb);
    },

    delete: function(query, cb){
        this.findOneAndDelete(query, cb);
    }
}

const giftModel = mongoose.model('Gift', giftSchema);
module.exports = giftModel;