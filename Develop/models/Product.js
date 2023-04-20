// import important parts of sequelize library
const { Model, DataTypes, DECIMAL } = require('sequelize');
// import our database connection from config.js
const sequelize = require('../config/connection');

// Initialize Product model (table) by extending off Sequelize's Model class
class Product extends Model {}

// set up fields and rules for Product model
Product.init(
  {
    // define columns
    
    // column for id
    // cannot be null
    // is our primary key
    // auto increment is true
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    // column for product name
    // cannot be null
    // type is a string
    product_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    // column for price
    // cannot be null
    // must be a decimal
    // validating must be a decimal
    price: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      validate: {
        isDecimal: true,
      },
    },
    // column for stock
    // cannot be null
    // type is an integer
    // default value is 10
    // validating must be an integer
    stock: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 10,
      validate: {
        isNumeric: true,
      },
    },
    // column for category_id
    // cannot be null
    // type is an integer
    // references model 'category' by id
    category_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'category',
        key: 'id',
      },
    },
  },
  // necessary to include the Product model, including 
  // sequelize as a dependency.
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'product',
  }
);

module.exports = Product;
