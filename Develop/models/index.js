// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

// Products belongsTo Category
Product.belongsTo(Category, {
  foreignKey: 'category_id',
  onDelete: 'CASCADE',
});

// Categories have many Products
Category.hasMany(Product, {
  foreignKey: 'category_id',
  onDelete: 'CASCADE',
});

// Products belongToMany Tags (through ProductTag)
Product.belongsToMany(Tag, {
  //Defining the third table ProductTag that we need
  //to store our foreign keys
  through: {
    model: ProductTag,
    unique: false,
    //Defining an alias for when data is retrieved
    as: 'products_tags'
  },
});

// Tags belongToMany Products (through ProductTag)
Tag.belongsToMany(Product, {
  //Defining the third table ProductTag that we need
  //to store our foreign keys
  through: {
    model: ProductTag,
    unique: false,
    //Defining an alias for when data is retrieved
    as: 'tags_products'
  },

})

module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
