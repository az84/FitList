let sequelize = require('sequelize');
require('dotenv').config();

if (process.env.JAWSDB_URL) {
  sequelize = new equelize(process.env.JAWSDB_URL);
} else {
  sequelize = new sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PW,
    {
      host: 'localhost',
      dialect: 'mysql',
      port: 3306
    }
  );
}

module.exports = sequelize;