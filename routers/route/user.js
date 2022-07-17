const express = require("express");
const { populate } = require("../../db/models/user");

// const popupTools = require("popup-tools");
// const passport = require("passport");
// require("./../../Config/passport")
const {
    Register,
    login,
    verifyAccount,
    checkEmail,
    resetPassword,

} = require("./../controller/user");

const { authentication } = require("./../middleware/authentication");
const { authorization } = require("./../middleware/authorization");

const userRouter = express.Router();
userRouter.post("/signup", Register);
userRouter.post("/login", login);
userRouter.post("/verify_account", verifyAccount);
userRouter.post("/email_check", checkEmail);
userRouter.post("/reset_pass",authentication, resetPassword);



// userRouter.get(
//   "/auth/google",
//   passport.authenticate("google", { scope: ["email", "profile"] })
// );
// userRouter.get(
//   "/auth/google/callback",
//   passport.authenticate("google"),
//   (req, res) => {
//     console.log(req);
//     res.end(popupTools.popupResponse(req.user));
//   }
// );



module.exports = userRouter;
