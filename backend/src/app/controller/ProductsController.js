import * as Yup from "yup";
import Product from "../models/Product.js";
import Category from "../models/Category.js";

class ProductsController {
  async store(req, res) {
    try {
      const schema = Yup.object({
        name: Yup.string().required(),
        price: Yup.number().required(),
        category_id: Yup.number().required(),
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

    const { name, price, category_id } = req.body;
    const { filename: path } = req.file;

    const newProduct = await Product.create({
      name,
      price,
      category_id,
      path,
    });

    return res.status(201).json({ newProduct });
  }

  async index(req, res) {
    const products = await Product.findAll({
      include: {
        model: Category,
        as: 'category',
      }
    })

    console.log(req.userId)
    return res.status(200).json({products})
  }
}

export default new ProductsController();
