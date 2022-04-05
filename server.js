import express from 'express';
import helloController from "./controller/hello-controller.js";
import userController from "./controller/user-controller.js";
import tuitController from "./controller/tuits-controller.js";
import cors from 'cors';

const app = express();
app.use(express.json());
app.use(cors());

helloController(app);
userController(app);
tuitController(app);
app.get('/', (req, res) => {res.send('Welcome to Full Stack Development!')})
app.listen(process.env.PORT ||4000);