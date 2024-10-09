require("dotenv").config({ path: `${process.cwd()}/.env` });
const express = require("express");

const authRouter = require("./route/authRoute");

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
    res.status(200).json({
        status: "success",
        message: "REST API are working",
    });
});

app.use("/api/v1/auth", authRouter);

app.use("*", (req, res, next) => {
    res.status(404).json({
        status: "fail",
        message: "Route not found",
    });
});

app.listen(process.env.APP_PORT, () => {
    console.log(`Server running on port ${process.env.APP_PORT}`);
});
