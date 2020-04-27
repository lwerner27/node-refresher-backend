const express = require("express");

// Importing Controller Functions
const {
    getAddProduct,
    postAddProduct,
    getAdminProducts,
    getEditProduct
} = require("../controllers/admin");

const router = express.Router();

// /admin/add-product
router.get("/add-product", getAddProduct);

// /admin/add-product
router.post("/add-product", postAddProduct);

// /admin/products
router.get("/products", getAdminProducts);

// /admin/edit-product
router.get("/edit-product", getEditProduct);

module.exports = router;
