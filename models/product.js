const fs = require("fs");
const path = require("path");

const p = path.join(
    path.dirname(process.mainModule.filename),
    "data",
    "products.json"
);

const getProductsFromFile = cb => {
    // creates a string that represents the root directory.

    // Gets data from the file if it exists
    fs.readFile(p, (err, data) => {
        // Executes if there is an error.
        if (err) {
            // Passes an empty array to the callback.
            cb([]);
        } else {
            // Passes data to callback.
            cb(JSON.parse(data));
        }
    });
};

module.exports = class Product {
    constructor(title, imageUrl, description, price) {
        this.title = title;
        this.imageUrl = imageUrl;
        this.description = description;
        this.price = price;
    }

    // Method for saving new entries to the data file.
    save() {
        this.id = Math.random().toString();
        getProductsFromFile(products => {
            products.push(this);
            fs.writeFile(p, JSON.stringify(products), err => {
                if (err) {
                    console.log("File: /model/product.js " + "Line: 23 ", err);
                }
            });
        });
    }

    // Method for getting all products from the data file.
    static fetchAll(cb) {
        getProductsFromFile(cb);
    }

    static findById(id, cb) {
        getProductsFromFile(products => {
            const product = products.find(p => p.id === id);
            cb(product);
        });
    }
};
