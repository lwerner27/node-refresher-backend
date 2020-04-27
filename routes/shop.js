const express = require("express");

const {
    getProducts,
    getIndex,
    postCart,
    getCart,
    getCheckout,
    getOrders,
    getProductDetails
} = require("../controllers/shop");

const router = express.Router();

router.get("/", getIndex);
router.get("/products", getProducts);
router.get("/cart", getCart);
router.post("/cart", postCart);
router.get("/checkout", getCheckout);
router.get("/orders", getOrders);
router.get("/product-details/:productId", getProductDetails);

module.exports = router;
