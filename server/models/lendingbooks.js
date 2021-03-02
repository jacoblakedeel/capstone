'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class lendingBooks extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  lendingBooks.init({
    bookID: DataTypes.INTEGER,
    lendTo: DataTypes.INTEGER,
    ownedBy: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'lendingBooks',
  });
  return lendingBooks;
};