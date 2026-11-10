import * as Yup from "yup";
import Category from "../models/Category.js";
import Product from "../models/Product.js";

class ProductsController {
  async store(req, res) {
    try {
      const schema = Yup.object({
        name: Yup.string().required(),
        price: Yup.number().required(),
        category_id: Yup.number().required(),
        offer: Yup.boolean(),
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

    const { name, price, category_id, offer } = req.body;
    const { filename: path } = req.file;

    const newProduct = await Product.create({
      name,
      price,
      category_id,
      path,
      offer,
    });

    return res.status(201).json({ newProduct });
  }

  async update(req, res) {
    try {
      const schema = Yup.object({
        name: Yup.string(),
        price: Yup.number(),
        category_id: Yup.number(),
        offer: Yup.boolean(),
      });

      schema.validateSync(req.body, { abortEarly: false, strict: false });
    } catch (err) {
      return res.status(400).json({
        error: err.errors,
      });
    }

    const { name, price, category_id, offer } = req.body;
    let path;
    if (req.file) {
      path = req.file.filename;
    }

    const _updatedProduct = await Product.update(
      {
        name,
        price,
        category_id,
        path,
        offer,
      },
      { where: { id: req.params.id } },
    );

    return res.status(201).json();
  }

  async index(_req, res) {
    const products = await Product.findAll({
      include: {
        model: Category,
        as: "category",
      },
    });

    return res.status(200).json({ products });
  }
}

export default new ProductsController();
