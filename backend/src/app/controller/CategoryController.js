import * as Yup from "yup";
import Category from "../models/Category.js";

class CategoryController {
  async store(req, res) {
    try {
      const schema = Yup.object({
        name: Yup.string().required(),
      });

      schema.validateSync(req.body, { abortEarly: false, strict: false });

      if (!req.body.name) {
        return res
          .status(400)
          .json({ error: "O nome é obrigatorio" });
      }
    } catch (err) {
      return res.status(400).json({
        error: err.errors,
      });
    }

    const { name } = req.body;

    const existCategory = await Category.findOne({
      where: { name }
    })

    if (existCategory){
      return res.status(400).json({ error: 'Essa categoria ja existe' })
    }

    const newProduct = await Category.create({
      name,
    });

    return res.status(201).json({ newProduct });
  }

  async index(req, res) {
    const categories = await Category.findAll();

    console.log(req.userId);
    return res.status(200).json({ categories });
  }
}

export default new CategoryController();
