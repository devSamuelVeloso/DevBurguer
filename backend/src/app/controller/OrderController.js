import * as Yup from "yup";
import Category from "../models/Category.js";
import Product from "../models/Product.js";
import Order from "../schemas/Order.js";

class OrderController {
  async store(req, res) {
    try {
      const schema = Yup.object({
        products: Yup.array()
          .required()
          .of(
            Yup.object({
              id: Yup.number().required(),
              quantity: Yup.number().required(),
            }),
          ),
      });

      schema.validateSync(req.body, { abortEarly: false, strict: true });
    } catch (err) {
      return res.status(400).json({
        error: err.errors,
      });
    }
    const { userId, userName } = req;
    const { products } = req.body;

    const productsIds = products.map((product) => product.id);

    const findedProducts = await Product.findAll({
      where: {
        id: productsIds,
      },
      include: {
        model: Category,
        as: "category",
        attributes: ["name"],
      },
    });

    const mapedProducts = findedProducts.map((product) => {
      const quantity = products.find((item) => item.id === product.id).quantity;
      const newProduct = {
        id: product.id,
        name: product.name,
        price: product.price,
        url: product.url,
        category: product.category.name,
        quantity,
      };

      return newProduct;
    });

    const order = {
      user: {
        id: userId,
        name: userName,
      },
      products: mapedProducts,
      status: "Pedido realizado com sucesso",
    };

    const newOrder = await Order.create(order);

    return res.status(201).json(newOrder);
  }

  async update(req, res) {
    try {
      const schema = Yup.object({
        status: Yup.string().required(),
      });

      schema.validateSync(req.body, { abortEarly: false, strict: true });
    } catch (err) {
      return res.status(400).json({
        error: err.errors,
      });
    }

    const { status } = req.body;
    const { id } = req.params;

    await Order.updateOne({ id }, { status });

    return res.status(200).json({ message: "Status atualizado com sucesso" });
  }

  async index(_req, res) {
    const findOrders = await Order.find();

    return res.status(200).json(findOrders);
  }
}

export default new OrderController();
