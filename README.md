# E-commerce Back End Starter Code

## Description
For this challenge we are building the back end for an e-commerce site. We take a functional Express.js API and configure it to use Sequelize to interact with a MySQL database.

## User Story
```md
AS A manager at an internet retail company
I WANT a back end for my e-commerce website that uses the latest technologies
SO THAT my company can compete with other e-commerce companies
```
## Acceptance Criteria
```md
GIVEN a functional Express.js API
WHEN I add my database name, MySQL username, and MySQL password to an environment variable file
THEN I am able to connect to a database using Sequelize
WHEN I enter schema and seed commands
THEN a development database is created and is seeded with test data
WHEN I enter the command to invoke the application
THEN my server is started and the Sequelize models are synced to the MySQL database
WHEN I open API GET routes in Insomnia Core for categories, products, or tags
THEN the data for each of these routes is displayed in a formatted JSON
WHEN I test API POST, PUT, and DELETE routes in Insomnia Core
THEN I am able to successfully create, update, and delete data in my database
```

## How We Did This:
## By:

### In JavaScript

#### For our models:

  Adding columns to the category table,
  Specifying the requirements and types for each column.
 
  Created a column for the category_id, which is our primary key, type integer, and cannot be null.
  A column for the category_name, that has type of string, and cannot be null.
  Necessary to include the Category model, including 
  sequelize as a dependency.

  In all of the examples above and below, import important parts of sequelize library, as well as import our database connection from config.js. We did this in our category table.
  
  Initialize Product model (table) by extending off Sequelize's Model class.
  Set up fields and rules for Product model.
  Such as define columns:
    column for id
    cannot be null
    is our primary key
    auto increment is true
product_name
    column for product name
    cannot be null
    type is a string
price
    column for price
    cannot be null
    must be a decimal
    validating must be a decimal
stock
    column for stock
    cannot be null
    type is an integer
    default value is 10
    validating must be an integer
category_id
    column for category_id
    cannot be null
    type is an integer
    references model 'category' by id
Necessary to include the Product model, including 
sequelize as a dependency.

For our ProductTag we define columns:
id
    column for id 
    id is auto increment
    primary key
    cannot be null
    is type of integer
product_id
    type is integer
    references model product by id
tag_id
    type is integer
    references model tag by id
Necessary to include the product_tag model, including 
sequelize as a dependency.

For our Tag we define columns:
id
    column for id
    id is auto increment
    type is integer
    it is our primary key
    it cannot be null
tag_name
    column for tag name
    type is string
Necessary to include the tag model, including sequelize as a dependency.

In our Index.js file we define all of our relationships between our models. First we import the models. Then we define the relationships by calling the methods defined. 
We call Products belongsTo Category,
Categories have many products,
Products belongs to many tag through producttag,
and we define the third table product tag that we need to store our foreign keys. Finally we define an alias for when data is retrieved. We also define that tags belong to many products through belongsToMany, and also defining the third table product tag that we need to store our foreign keys.
And we define an alias for when data is retrieved.

#### For our Routes:

We acheived this by adding get routes to our category models, by adding an asynchronous get request for find all categories, and including it's associated products. Then we define the asynchronous get request for find one category, including products. We also define an asynchronous post request for create one category, as well as a put request for updating one category by its id value. We also define an asynchronous destroy request for deleting one category by its id value.

For our products routes we define the asynchronous get request for find all products, and include it's associated category and tag models. We also define an asynchronous get request for finding one product by its id value, including its associated Category and Tag models. We also define an asynchronous post request to create a new product, and if their is product tags we need to create pairings to bulk create in the productTags model. We define a put request for updating one product. We also define an asynchronous destroy request for deleting one product by its id value. 

For our tag routes we define the asynchronous get request for find all tags, and include it's associated Product models. We also define an asynchronous get request for finding one tag by its id value, including its associated Product models. We also define an asynchronous post request for creating a new tag. We also define an asynchronous destroy request for deleting one tag by its id value. And before that we define a put request for updating one tag by its id value. 

In our index.js we require all of our routes and models.

Our server.js has our necessary imports and requires sequelize conection as well as starting the server,
and running our port. We also sync sequelize models to the database, then turn on the server. Then we are ready to start the server.



## Link to Github Repo
https://github.com/shababrc/E-Commerce-Back-End-ORM- 

## Link to Walkthrough Video
https://drive.google.com/file/d/13cMQw2syZL79iK3LI280N3e-YIFWosb2/view?usp=sharing 

## Credits to the rest of the bootcamp class for help
Credits to the rest of the bootcamp class for help/advice on this assignment. Credit to Bryan and Shawn from the teaching staff. 

## License
MIT



