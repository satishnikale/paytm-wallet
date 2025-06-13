const { Router } = require("express");
const  userRouter  = Router();
const { z } = require("zod");
const { User }  = require("../db");
const { JWT_SECREAT } = require("../config");
const jwt  = require("jsonwebtoken");

const signupSchema = z.object({
    username: z.string(),
    password: z.string(),
    firstName: z.string(),
    lastName: z.string()
});
console.log("DB User ", User);
userRouter.post("/signup", async (req, res) => {
    const body = req.body;
    const { success } = signupSchema.safeParse(req.body);
    
    if(!success){
        return res.json({
            message: "Email Already Taken/ Incorrct Inputs",
        })
    }
    const user = await  User.findOne({
        username:body.username
    });
    
    if(user?._id){
        return res.json({
            message: "Email is Already Present"
        });
    }
    const dbUser = await User.create(body);
    const token = jwt.sign({
        userId: dbUser.username
    }, JWT_SECREAT);
    res.json({
        message: "User created successfully.",
        token: token
    })
});
module.exports = {
    userRouter: userRouter
}