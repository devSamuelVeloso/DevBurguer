import * as Yup from "yup";
import Product from "../models/Product.js";

class ProductsController {
  async store(req, res) {
    try {
      const schema = Yup.object({
        name: Yup.string().required(),
        price: Yup.number().required(),
        category: Yup.string().required(),
      });

      schema.validateSync(req.body, { abortEarly: false, strict: false });
      
      if (!req.file) {
        return res
          .status(400)
          .json({ error: "A imagem do produto é obrigatória." });
      }
    } catch (err) {
      return res.status(400).json({
        error: err.errors,
      });
    }

    const { name, price, category } = req.body;
    const { filename: path } = req.file;

    const newProduct = await Product.create({
      name,
      price,
      category,
      path,
    });

    return res.status(201).json({ newProduct });
  }

  async index(req, res) {
    const products = await Product.findAll()

    console.log(req.userId)
    return res.status(200).json({products})
  }
}

export default new ProductsController();
