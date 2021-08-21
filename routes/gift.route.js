const express = require('express');
const router = express.Router();

const gift_controller = require('../controllers/gift.controller');

router.post('/create', gift_controller.gift_create);
router.get('/get', gift_controller.gifts_get);
router.get('/get/:id', gift_controller.gift_get)
router.delete('/delete/:id', gift_controller.gift_delete);

module.exports = router;