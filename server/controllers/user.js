import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import keys from "../config/keys";
import passport from "passport";

import User from "../models/user";

class UsersController {
  checkToken(req, res, next) {
    let token = req.headers["x-access-token"] || req.headers["authorization"];

    if (!token) {
      return res.status(500).send({
        success: "false",
        message: "Token is not set"
      });
    }

    if (token.startsWith("Bearer ")) {
      token = token.slice(7, token.length);
    }
    const decoded = jwt.verify(token, keys.secretOrKey);
    User.findOne({ _id: decoded.id })
      .then(() => {
        req.decoded = decoded;
        next();
      })
      .catch(error => {
        return res.status(500).send({
          success: "false",
          message: "User not found - token is not valid",
          error
        });
      });
  }

  register(req, res) {
    const { name, email, password, password2 } = req.body;
    if (!name || !email || !password || password !== password2) {
      res.status(400).json({
        success: "false",
        message: "registration data validation failed"
      });
    }

    User.findOne({ email }).then(user => {
      if (user) {
        return res.status(400).json({ email: "Email already exists" });
      } else {
        const newUser = new User({ name, email, password });
        bcrypt.genSalt(10, (err, salt) => {
          bcrypt.hash(newUser.password, salt, (err, hash) => {
            if (err) {
              return res.status(400).json({
                success: "false",
                message: "bcrypt hash password failed",
                err
              });
            }
            newUser.password = hash;
            newUser
              .save()
              .then(user => res.json(user))
              .catch(err => console.log(err));
          });
        });
      }
    });
  }

  login(req, res) {
    const { email, password } = req.body;

    if (!email || !password) {
      res.status(400).json({
        success: "false",
        message: "login data validation failed"
      });
    }

    User.findOne({ email })
      .then(user => {
        if (!user) {
          return res.status(404).json({ errorMessage: "Email не найден" });
        }
        bcrypt.compare(password, user.password).then(isMatch => {
          if (isMatch) {
            const payload = {
              id: user.id,
              name: user.name
            };
            jwt.sign(
              payload,
              keys.secretOrKey,
              {
                expiresIn: 31556926
              },
              (err, token) => {
                res.json({
                  success: true,
                  token: "Bearer " + token
                });
              }
            );
          } else {
            return res
              .status(400)
              .json({ errorMessage: "Пароль введен не верно" });
          }
        });
      })
      .catch(error => {
        return res.status(404).json({ errorMessage: "Нет ответа от сервера" });
      });
  }

  info(req, res) {
    const { token } = req.body;
    const decoded = jwt.verify(token, keys.secretOrKey);
    User.findOne({ _id: decoded.id })
      .then(user => {
        const { name, email } = user;
        return res.status(200).send({
          success: "true",
          message: "user data retrieved successfully",
          user: { name, email }
        });
      })
      .catch(error => {
        return res.status(500).send({
          success: "false",
          message: "Getting user info failed",
          error
        });
      });
  }
}

const userController = new UsersController();
export default userController;
