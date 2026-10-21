import { Router } from "express";
import multer from "multer";
import ProductsController from "./app/controller/ProductsController.js";
import SessionController from "./app/controller/SessionController.js";
import UserController from "./app/controller/UserController.js";
import multerConfig from "./config/multer.cjs";

const routes = new Router();

const upload = multer(multerConfig);

routes.post("/register", UserController.store);
routes.post("/login", SessionController.store);
routes.post("/products", upload.single("file"), ProductsController.store);
routes.get("/products", ProductsController.index)

export default routes;
