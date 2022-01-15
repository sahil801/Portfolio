import  express  from "express";
import Connection from "./database/connection.js";
import Routes from './routes/index.js';
import cors from 'cors'

const app = express();
const hostname =' 0.0.0.0';

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

app.use('/',Routes);


Connection();
app.listen(8001,,()=>{
    console.log('running on 8001.......');
})