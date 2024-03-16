// import mysql from 'mysql2/promise';

// // // create the connection to database

// console.log("Creating connection pool...");

// const pool = mysql.createPool({
//     host: 'localhost',
//     user: 'root',
//     database: 'nienluan',
//     // password: 'password'
// })


// export default pool;

import Sequelize from 'sequelize';

// Option 1: Passing parameters separately
const sequelize = new Sequelize('nienluan', 'root', null, {
    host: 'localhost',
    dialect: 'mysql',
    logging: false
});

let connectDB = async () => {
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
}

export default connectDB;
