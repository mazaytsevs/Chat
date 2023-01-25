const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Account extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Account.init({
    // id: DataTypes.INTEGER,
    nick: DataTypes.STRING,
    password: DataTypes.STRING,
    name: DataTypes.STRING,
    surname: DataTypes.STRING,
    role: DataTypes.ENUM('user', 'moderator', 'admin'),
    status: DataTypes.ENUM('active', 'inactive'),
  }, {
    sequelize,
    modelName: 'Account',
  });
  return Account;
};
