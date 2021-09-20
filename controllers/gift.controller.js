const Gift = require('../models/gift.dao');
const mongoose = require('mongoose');

exports.gift_create = function(req, res) {
    const gift = new Gift(
        {
            _id: mongoose.Types.ObjectId(),
            gift: req.body.gift,
            clicked: req.body.clicked
        }
    );

    Gift.create(gift, function(err, gift) {
        if(err){
            res.json({
                error: err
            })
        }else{
            res.json({
                message: 'Add successfully',
                data: gift
            })
        }
    })
};

exports.gift_get = function(req, res, next){
    Gift.get({_id: req.params.id}, function(err, gift) {
        if(err){
            res.json({
                error: err
            });
        }else{
            res.json({
                gift: gift
            });
        }
    });
}

exports.gifts_get = function(req, res, next){
    Gift.get({}, function(err, gifts) {
        if(err){
            res.json({
                error: err
            });
        }else{
            res.json({
                gifts: gifts
            })
        }
    });
}

exports.gift_delete = function(req, res, next) {
    Gift.delete({_id: req.params.id}, function(err, gift) {
        if(err){
            res.json({
                error: err
            });
        }else{
            res.json({
                message: 'Deleted gift successfully'
            });
        }
    });
}