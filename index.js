import express from 'express';
import connectDB from './src/config/connectionDB.js';
import initUserRoutes from './src/routes/user.route.js';
import initAuthRoutes from './src/routes/authencation.route.js';
import initGroupRoutes from './src/routes/group.route.js';
import initImageRoutes from './src/routes/image.route.js';
import initProductRoutes from './src/routes/product.route.js';
import initCategoryRoutes from './src/routes/category.route.js';
import initOrderRoutes from './src/routes/order.route.js';
import cors from 'cors';
const app = express();
const port = process.env.PORT || 8080;

connectDB();

app.use(cors(
    {
        origin: 'http://localhost:5173'
    }
));

app.use(express.json());

app.use(express.urlencoded({ extended: true }));


// app.use((req, res, next) => {
//     //check => return res.send()
//     console.log('>>> run into my middleware')
//     console.log(req.method)
//     next();
// })

initUserRoutes(app);
initAuthRoutes(app);
initGroupRoutes(app);
initImageRoutes(app);
initProductRoutes(app);
initCategoryRoutes(app);
initOrderRoutes(app);

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})
