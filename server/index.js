import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import router from './router/auth_router.js';
import connectDB from './utils/db.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
app.use("/api/auth", router);

// Connect to Database and Start Server
connectDB().then(() => {
    app.listen(PORT, () => {
        console.log(`Server is running on port http://localhost:${PORT}/api/auth`);
    })
})