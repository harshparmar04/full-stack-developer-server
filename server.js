import express from 'express';
import helloController from "./controller/hello-controller.js";
import userController from "./controller/user-controller.js";
import tuitController from "./controller/tuits-controller.js";
import cors from 'cors';
import mongoose from "mongoose";

const CONNECTION_STRING = process.env.DB_CONNECTION_STRING || 'mongodb://localhost:27017/webdev';
mongoose.connect(CONNECTION_STRING);
const app = express();
app.use(express.json());
app.use(cors());

helloController(app);
userController(app);
tuitController(app);
app.get('/', (req, res) => {res.send('Welcome to Full Stack Development!')})
app.listen(process.env.PORT || 4000);