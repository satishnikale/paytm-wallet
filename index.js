const express = require("express");
const app = express();
require('dotenv').config();
const mongoose = require('mongoose');
const cors = require("cors");
const {userRouter} = require("./src/routes/user");
const {accountRouter} = require("./src/routes/account");
const { PORT, MONGO_URL } = require("./src/config");

app.use(cors());
app.use(express.json());


app.use("/api/v1/user", userRouter);
app.use("/api/v1/account", accountRouter);


app.get("/", (req, res) => {
    res.json({
        msg:"Hello Satish this message from server...",
    });
})


async function main(){
    await mongoose.connect(MONGO_URL);
    app.listen(3000);
    console.log(`Listening on PORT ${PORT}`);
}
main();