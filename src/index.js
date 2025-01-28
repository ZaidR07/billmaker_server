import express from 'express';
import dotenv from 'dotenv';
import bodyParser from 'body-parser';
import cors from 'cors';
import router from './router.js';




dotenv.config();

const app = express();
const PORT = process.env.PORT || 4000;

// Middleware for parsing the request body
app.use(bodyParser.json({ limit: '50mb' }));
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true, parameterLimit: 50000 }));

app.use(cors({
    origin: true,  // Allow all origins
    credentials: true 
}));

app.use(router);




// Connect to the database and start the servers
try {
    app.listen(PORT, () => {
        console.log(`server is running on port ${PORT}`);
    });
} catch (error) {
    console.error('MongoDB connection failed', error.message);
    
}
        
  


