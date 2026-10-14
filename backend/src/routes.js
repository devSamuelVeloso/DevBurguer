import { Router } from "express";
import { v4 } from "uuid";
import User from "./app/models/User.js";

const routes = new Router();

routes.post("/", async (_req, res)=> {
    await User.create({
        id: v4(),
        name: "Samuel",
        email: "snsjhdudb@gmail.com",
        password_hash: "231231231",
        admin: true
    })

    res.status(201).json({
        ok: "ok"
    })
})

export default routes