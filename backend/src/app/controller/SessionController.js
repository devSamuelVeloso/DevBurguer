import bcrypt from "bcrypt";
import * as Yup from "yup";
import User from "../models/User.js";
import jwt from "jsonwebtoken";
import auth from "../../config/auth.js"

class SessionController {
  async store(req, res) {
    const schema = Yup.object({
      email: Yup.string().email().required(),
      password: Yup.string().min(8).required(),
    });

    const isValid = await schema.isValid(req.body, { strict: true });

    function emailOrpasswordInconrrect() {
      return res.status(400).json({
        message: "Email or password is incorrect",
      });
    }

    if (!isValid) {
      emailOrpasswordInconrrect();
    }

    const { email, password } = req.body;

    const existingUser = await User.findOne({
      where: {
        email,
      },
    });

    if (!existingUser) {
      emailOrpasswordInconrrect();
    }

    const isValidPassword = await bcrypt.compare(
      password,
      existingUser.password_hash,
    );

    if (!isValidPassword) {
      emailOrpasswordInconrrect();
    }

    const token = jwt.sign(
      { id: existingUser.id },
      auth.secret,
      { expiresIn: auth.expiresIn }
    );

    return res.status(200).json({
      id: existingUser.id,
      name: existingUser.name,
      email: existingUser.email,
      admin: existingUser.admin,
      token,
    });
  }
}

export default new SessionController();
