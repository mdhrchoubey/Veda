import express from "express";
import Product from "../Models/Product.js";

const productRoute =express.Router();

const getProduct = async (req, res) =>{
    const products = await product.find({});
    res.json({
        products,
        pagination:{},
    })
}

productRoute.route('/').get(getProduct);

export default productRoute