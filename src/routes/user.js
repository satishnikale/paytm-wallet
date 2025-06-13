const { Router } = require("express");
const  userRouter  = Router();


userRouter.get("/", (req, res) => {
    res.json({
        msg: "This is from user Router..."
    })
})

module.exports = {
    userRouter: userRouter
}