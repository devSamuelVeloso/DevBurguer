import express from "express";
import fileRouteConfig from "./config/fileRoutes.cjs";
import routes from "./routes.js";

const app = express();

app.use(express.json());
app.use('/products-file', fileRouteConfig)

app.use(routes);

export default app;
