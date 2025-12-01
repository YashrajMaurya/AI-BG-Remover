import 'dotenv/config'
import express from 'express'
import cors from 'cors'
import connectDB from './configs/mongodb.js';
import userRouter from './routes/UserRoutes.js';
import imageRouter from './routes/imageRoutes.js';

//App config
const PORT = process.env.PORT || 3000;
const app = express()
await connectDB()

//middleware
app.use(express.json())
app.use(cors({
  origin: [
    "http://localhost:5173",
    "https://ai-bg-remover-mu.vercel.app"
  ],
  methods: ["GET", "POST"],
  credentials: true
}))

//API Route
app.get('/', (req, res) => {
    res.send('API Working')
})
app.use('/api/user', userRouter);
app.use('/api/image', imageRouter);

app.listen(PORT, () => console.log('Server is Running'))