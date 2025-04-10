import mongoose from 'mongoose'

import dotenv from 'dotenv'
dotenv.config()

//export a function that connect to db

const db = () => {
    mongoose
        .connect(process.env.MONGO_URL)
        .then(() => {
            console.log("Connected to mongodb!");
        })
        .catch((err) => {
            console.log("Error connecting to mongodb", err);
        })
};

export default db;
