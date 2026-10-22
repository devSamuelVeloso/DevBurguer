import jwt from "jsonwebtoken";
import authConfig from "../config/auth.js";

const authMiddleware = (req, res, next) => {
  const authToken = req.headers.authorization;

  if (!authToken) {
    return res.status(401).json({
      error: "Token not provided",
    });
  }

  const token = authToken.split(" ")[1];
  try {
    jwt.verify(token, authConfig.secret, (error, decoded) => {
      console.log(decoded);
      if (error) {
        throw Error();
      }

      req.userId = decoded.id;
    });
  } catch (err) {
    return res.status(401).json({ err: "Token is invalid" });
  }
  return next();
};

export default authMiddleware;
