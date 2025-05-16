import express from "express"
import dotenv from "dotenv"

dotenv.config()

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

const port = process.env.PORT ?? 3000;

app.use("api/v1/users", userRoutes)

app.listen(port, () => {
    console.log(`App is listening on port: ${port}`);
});