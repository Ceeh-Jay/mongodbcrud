import express from 'express';
import logger from 'morgan'
import todoRouter from './routes/todoRoute'
import mongoose from 'mongoose';
import dotenv from 'dotenv'
dotenv.config();


const app = express();
mongoose.connect(process.env.DATABASE_URL!, ()=>{
    console.log('database connected successfully')
})


app.use(express.json())
app.use(logger("dev"));
app.use('/todo', todoRouter)
const Port = 4500

app.listen(Port, () =>{
    console.log(`Server running at http://localhost${Port}`)

})