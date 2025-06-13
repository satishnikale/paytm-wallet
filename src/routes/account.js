const { Router } = require("express");
const accountRouter = Router();



accountRouter.get("/", (req, res) => {
    res.send({
        msg:"Hello this is from account endpoint..."
    })
})

module.exports = {
accountRouter : accountRouter
}