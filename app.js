require("dotenv").config({ path: `${process.cwd()}/.env` });
const express = require("express");

const authRouter = require("./route/authRoute");
const projectRouter = require("./route/projectRoute");
const catchAsync = require("./utils/catchAsync");
const AppError = require("./utils/appError");
const globalErrorHandler = require("./controller/errorController");

const app = express();

app.use(express.json());

// app.get("/", (req, res) => {
//     res.status(200).json({
//         status: "success",
//         message: "REST API are working",
//     });
// });

app.use("/api/v1/auth", authRouter);
app.use("/api/v1/projects", projectRouter);

app.use(
    "*",
    catchAsync(async (req, res, next) => {
        throw new AppError(`Can't find ${req.originalUrl} on this server`, 404);
    })
);

app.use(globalErrorHandler);

app.listen(process.env.APP_PORT, () => {
    console.log(`Server running on port ${process.env.APP_PORT}`);
});
