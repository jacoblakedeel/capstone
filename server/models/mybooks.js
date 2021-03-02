'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class myBooks extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  myBooks.init({
    userID: DataTypes.INTEGER,
    bookID: DataTypes.INTEGER,
    lendTo: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'myBooks',
  });
  return myBooks;
};