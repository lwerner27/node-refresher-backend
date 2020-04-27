const Product = require("../models/product");

// Function used for serving the "/admin/add-product" page
function getAddProduct(req, res) {
    res.render("admin/add-product", {
        pageTitle: "Add Product",
        activeAddProduct: true,
        formsCSS: true,
        productCSS: true
    });
}

// Function used for handling post requests to the /admin/add-product route
function postAddProduct(req, res) {
    const { title, imageUrl, description, price } = req.body;
    const product = new Product(title, imageUrl, description, price);
    product.save();
    res.redirect("/");
}

// Function used for serving the "/admin/products" page
function getAdminProducts(req, res) {
    Product.fetchAll(products => {
        res.render("admin/products", {
            products,
            pageTitle: "Admin Products",
            activeAdminProducts: true,
            hasProducts: products.length > 0,
            productCSS: true
        });
    });
}

// Function used for serving the "/admin/edit-product" page
function getEditProduct(req, res) {
    res.render("admin/edit-product", {
        pageTitle: "Edit Product"
    });
}

module.exports = {
    getAddProduct,
    postAddProduct,
    getAdminProducts,
    getEditProduct
};
