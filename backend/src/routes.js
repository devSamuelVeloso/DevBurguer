import { Router } from "express";
import multer from "multer";
import CategoryController from "./app/controller/CategoryController.js";
import OrderController from "./app/controller/OrderController.js";
import ProductsController from "./app/controller/ProductsController.js";
import SessionController from "./app/controller/SessionController.js";
import UserController from "./app/controller/UserController.js";
import adminMiddleware from "./app/middlewares/admin.js";
import authMiddleware from "./app/middlewares/auth.js";
import multerConfig from "./config/multer.cjs";

const routes = new Router();

const upload = multer(multerConfig);

routes.post("/register", UserController.store);
routes.post("/sessions", SessionController.store);
routes.use(authMiddleware);
routes.post(
  "/products",
  adminMiddleware,
  upload.single("file"),
  ProductsController.store,
);
routes.put(
  "/products/:id",
  adminMiddleware,
  upload.single("file"),
  ProductsController.update,
);
routes.get("/products", ProductsController.index);
routes.post(
  "/categories",
  adminMiddleware,
  upload.single("file"),
  CategoryController.store,
);
routes.put(
  "/categories/:id",
  adminMiddleware,
  upload.single("file"),
  CategoryController.update,
);
routes.get("/categories", CategoryController.index);

routes.post("/orders", OrderController.store);
routes.get("/orders", OrderController.index);
routes.put("/orders/:id", adminMiddleware, OrderController.update);

export default routes;
