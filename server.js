// Import Statements
const path = require("path");
const express = require("express");
const handlebars = require("express-handlebars");
const bodyParser = require("body-parser");

// Route Import Statements
const adminRoutes = require("./routes/admin");
const shopRouter = require("./routes/shop");

// Confiruges PORT number
const PORT = process.env.PORT || 4000;

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

// Serves Static Files
app.use(express.static(path.join(__dirname, "public")));

// Handlebars configuration
app.engine("handlebars", handlebars());
app.set("view engine", "handlebars");

// Route Configuration
app.use("/admin", adminRoutes);
app.use(shopRouter);

app.listen(PORT, () => {
    console.log("The server is listening on port: " + PORT);
});
