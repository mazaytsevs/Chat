const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Block extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Account }) {
      this.belongsTo(Account, { foreignKey: 'user_id' });
    }
  }
  Block.init({
    user_id: DataTypes.INTEGER,
    initiator_id: DataTypes.INTEGER,
    date_before: DataTypes.DATE,
    reason: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'Block',
  });
  return Block;
};
