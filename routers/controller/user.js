const userModel = require('./../../db/models/user')
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const nodemailer = require("nodemailer");
const SALT = Number(process.env.SALT);
require("dotenv").config();




const transport = nodemailer.createTransport({
    service: "Gmail",
    auth: {
      user: process.env.EMAIL,
      pass: process.env.PASS,
    },
  });

  const Register = async (req, res) => {
    const { email, password, username,avatar } = req.body;
    const lowerEmail = email.toLowerCase();
    const hashPass = await bcrypt.hash(password, SALT);
    let activeCode = "";
    const characters = "0123456789";
    for (let i = 0; i < 4; i++) {
      activeCode += characters.charAt(
        Math.floor(Math.random() * characters.length)
      );
    }
    const newUser = new userModel({
        email: lowerEmail,
        password: hashPass,
        passwordCode: "",
        username,
        activeCode,
        avatar,
      });
      newUser
      .save()
      .then((result) => {
        transport
            .sendMail({
              from: process.env.EMAIL,
              to: lowerEmail,
              subject: "Please confirm your account",
              html: `<h1>Email Confirmation</h1>
                <h2>Hello ${result.username}</h2>
                <h4>CODE: ${activeCode}</h4>
                <p>Thank you for registering. Please confirm your email by entring the code on the following link</p>
                <a href=http://localhost:3000/Account/${result._id}> Click here</a>
                </div>`,
            })
            .catch((err) => console.log(err));
          res.status(201).json(result);
        })
      .catch((err) => {
        res.status(400).json(err);
      });
  };
  //stoped here . 