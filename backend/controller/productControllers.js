const Product = require("../models/Product");
const static_data = require("../data/products.js");
const getProducts = async (req, res) => {
  try {
    // const products = await Product.find();
    const products = static_data; // here we are using hardcoded static data but it is not good approach. Please try to fetch data from mongodb database by using above line.
    res.json(products);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
};

const getProductById = async (req, res) => {
  try {
    // const product = await Product.findById(req.params.id);
    const product = {
      name: "Cannon EOS-1D",
      productId: 3,
      imageUrl:
        "https://images.unsplash.com/photo-1519183071298-a2962feb14f4?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      description:
        "The EOS-1D X combines speed with image quality, to create the next generation camera for professionals. Full frame 18 megapixel sensor with Dual “DIGIC 5+” processors sets the standard, and up to 12 frames per second shooting takes it beyond.",
      price: 1300,
      countInStock: 5,
    };
    res.json(product);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
};

module.exports = {
  getProducts,
  getProductById,
};
