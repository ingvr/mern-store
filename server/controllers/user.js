const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const keys = require("../config/keys");
const passport = require("passport");

const validateRegisterInput = require("../validation/register");
const validateLoginInput = require("../validation/login");

const User = require("../models/user");

class UsersController {
  register({ body: { name, email, password, password2 } }, res) {
    const { errors, isValid } = validateRegisterInput({
      name,
      email,
      password,
      password2
    });
    if (!isValid) {
      return res.status(400).json(errors);
    }
    User.findOne({ email }).then(user => {
      if (user) {
        return res.status(400).json({ email: "Email already exists" });
      } else {
        const newUser = new User({ name, email, password });
        bcrypt.genSalt(10, (err, salt) => {
          bcrypt.hash(newUser.password, salt, (err, hash) => {
            if (err) throw err;
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
    const { errors, isValid } = validateLoginInput(req.body);

    if (!isValid) {
      return res.status(400).json(errors);
    }

    const { email, password } = req.body;

    User.findOne({ email }).then(user => {
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
    });
  }

  info(req, res) {
    const { token } = req.body;
    const decoded = jwt.verify(token, keys.secretOrKey);
    User.findOne({ _id: decoded.id })
      .then(user => {
        return res.status(200).send({
          success: "true",
          message: "user data retrieved successfully",
          user
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
