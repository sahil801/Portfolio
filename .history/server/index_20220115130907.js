import  express  from "express";
import Connection from "./database/connection.js";
import Routes from './routes/index.js';
import cors from 'cors';
import dotenv from 'dotenv'

const app = express();
const hostname =' 0.0.0.0';

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

app.use('/',Routes);

const userName = process.env.MONGO_USERNAME;
const password = process.env.MONGO_PASSWORD;
Connection(userName,password);
app.listen(8001,()=>{
    console.log(`${userName}:${password} =>running on 8001.......`);
})