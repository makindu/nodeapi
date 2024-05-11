const Sequelize = require("sequelize");
const DBConfig = require("./db_config");

const sequelize = new Sequelize(
  DBConfig.database_name,
  DBConfig.database_username,
  DBConfig.database_password,
  {
    host: DBConfig.host,
    dialect: DBConfig.dialect,
  }
);

let database = {};

database.connection = sequelize;
database.user = require("./src/users/user.model")(sequelize);
database.client = require("./src/clients/client.model")(sequelize);

module.exports = database;
