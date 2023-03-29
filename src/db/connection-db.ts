import { Sequelize } from "sequelize";

// const sequelize = new Sequelize('productos', 'root', 'Derbes89@', {
//    host: '192.168.1.148',
//    port: 3306,
//    dialect: 'mysql',
// });

const sequelize = new Sequelize('productos', 'root', 'Derbes89@', {
   port: 3306,
   dialect: 'mysql',
});


export default sequelize;

