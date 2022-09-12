import Product from "../../../models/product";
import dbConnect from "../../../utils/mongo";

export default async function handler(req, res) {
  const { method } = req;

  dbConnect();

  if (method === "GET") {
    try {
      const allProducts = await Product.find();
      res.status(200).json(allProducts);
    } catch (err) {
      res.status(500).json({ err: err.message });
    }
  }
  if (method === "POST") {
    try {
      const newProduct = await Product.create(req.body);
      res
        .status(201)
        .json({ message: "Add product successfully", product: newProduct });
    } catch (err) {
      res.status(500).json({ err: err.message });
    }
  }
}
