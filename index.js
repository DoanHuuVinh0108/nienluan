import express from 'express';
import connectDB from './src/config/connectionDB.js';
import initUserRoutes from './src/routes/user.route.js';
import initAuthRoutes from './src/routes/authencation.route.js';
import initGroupRoutes from './src/routes/group.route.js';
const app = express();
const port = process.env.PORT || 8080;

connectDB();


app.use(express.json());

// app.use((req, res, next) => {
//     //check => return res.send()
//     console.log('>>> run into my middleware')
//     console.log(req.method)
//     next();
// })

initUserRoutes(app);
initAuthRoutes(app);
initGroupRoutes(app);

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})
