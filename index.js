import express from 'express';
import connectDB from './src/config/connectionDB.js';
const app = express();
const port = process.env.PORT || 8080;

connectDB();

app.use((req, res, next) => {
    //check => return res.send()
    console.log('>>> run into my middleware')
    console.log(req.method)
    next();
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})
