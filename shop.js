const path = require('path');

const express = require('express');
const shopController = require('../controllers/shop');
const router = express.Router();

router.get('/',shopController.getProducts );
router.get('/products',shopController.getProducts);
router.get('/cart',shopController.getCart);
router.get('/checkout');
router.get('/index');
router.get('/products/:id',shopController.getProductDetails)
router.post('/cart',shopController.postCart)
router.post('/cart-delete',shopController.deleteCart)
router.post('/create-order',shopController.postOrder)
module.exports = router;
