const Sequelize = require("sequelize");

module.exports = (sequelize) => {
  const ClientModel = sequelize.define("clients", {
    fullname: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    phoneNumber: {
      type: Sequelize.STRING,
      allowNull: false,
      unique: true,
    },
    address: {
      type: Sequelize.STRING,
      allowNull: true,
    },
  });

  return ClientModel;
};
