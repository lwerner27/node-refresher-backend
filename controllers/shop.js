const Product = require("../models/product");
const Cart = require("../models/cart");

// Function used for serving the "/products" page and data
function getProducts(req, res) {
    Product.fetchAll(products => {
        res.render("shop/product-list", {
            products,
            pageTitle: "All Products",
            hasProducts: products.length > 0,
            activeProducts: true,
            productCSS: true
        });
    });
}

// Function used for serving the "/" page
function getIndex(req, res) {
    Product.fetchAll(products => {
        res.render("shop/index", {
            products,
            pageTitle: "Shop",
            activeShop: true,
            hasProducts: products.length > 0,
            productCSS: true
        });
    });
}

// Function used for posting items to the cart.
function postCart(req, res) {
    const { productId } = req.body;
    Product.findById(productId, product => {
        Cart.addProduct(productId, product.price);
    });
    res.redirect("/cart");
}

// Function used for serving the "/cart" page
function getCart(req, res) {
    res.render("shop/cart", {
        pageTitle: " Your Cart",
        activeCart: true
    });
}

// Function use for serving the "/checkout" page
function getCheckout(req, res) {
    res.render("shop/checkout", {
        pageTitle: "Checkout"
    });
}

// Function used for serving the "/orders" page
function getOrders(req, res) {
    res.render("shop/orders", {
        pageTitle: "Orders",
        activeOrders: true
    });
}

// Function used for servering "/product-details" page for a specific product
function getProductDetails(req, res) {
    const { productId } = req.params;
    Product.findById(productId, product => {
        res.render("shop/product-details", {
            pageTitle: "Product Details: " + product.title,
            product
        });
    });
}

module.exports = {
    getProducts,
    getIndex,
    postCart,
    getCart,
    getCheckout,
    getOrders,
    getProductDetails
};
