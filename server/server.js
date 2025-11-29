import 'dotenv/config'
import express from 'express'
import cors from 'cors'
import connectDB from './configs/mongodb.js';
import userRouter from './routes/UserRoutes.js';

//App config
const PORT = process.env.PORT || 3000;
const app = express()
await connectDB()

//middleware
app.use(express.json())
app.use(cors())

//API Route
app.get('/', (req, res) => {
    res.send('API Working')
})
app.use('/api/user', userRouter);

app.listen(PORT, () => console.log('Server is Running'))