const server = require('./api/server.js');

const port = process.env.PORT || 5000;
server.listen(port, () => console.log(`\n** Running on port ${port} **\n`));


// --- NOTES --- //

// CREATE TABLE <table name> (
//   <column name> <data type> <constraints>, 
//   <column name> <data type> <constraints>, 
//   <column name> <data type> <constraints>
// );

// Have to use either "" or `` for creating a table name
// When creating ID, it automatically created sqlite sequence folder to keep track of the ids

// DROP TABLE IF EXISTS "fruits";
// DROP TABLE IF EXISTS "fruitss";

// CREATE TABLE "fruitss" (
// 	"id" INTEGER NOT NULL UNIQUE PRIMARY KEY AUTOINCREMENT,
// 	"name" TEXT NOT NULL UNIQUE,
// 	"avgWeightOz" FLOAT,
// 	"delicious" BOOLEAN DEFAULT 0
// );

// ALTER TABLE "fruitss" RENAME TO "fruits";

// DROP TABLE < table name >; will delete table 
// ALTER TABLE  < table name > < arguments > will alter the table 

// produce.db3-journal is essentially a lock file
// To get rid of lock, in DB Browser, click 'Write Changes'

// npx knex will bring up the help for knex

// npx knex init to create the knexfile.js file

// Get rid of staging and production from the knexfile.js

// Create a new directory - utils

// Create a new file called db.js

// Version control is a reason to not create the schema in DB Browser

// DB Schema Migrations - code in a file that have the changes for the DB

// This gives us a traceable, reversable control over the DB

// Delete the DB
// Stop the server
// run npx knex migrate:make fruits
// Will have the timestamp in the file name in the migrations directory
// Migrations will run in order they are defined in.

// After writing the up function in the migration file
// in terminal type - npx knex migrate:latest

// Down funtion is for reversing the operation of the up function
// npx knex migrate:rollback

// To update db, add new migration file
// npx knex migrate:make fruit_color
// After updating the up and down async functions,
// npx knex migrate:latest

// To refresh DB Browswer - Ctrl + R

// Always move forward with a new migration to prevent data loss

// Seeds - populate sample data for testing DB
// npx knex seed:make 001_fruits
// after populate seed file - npx knex seed:run
