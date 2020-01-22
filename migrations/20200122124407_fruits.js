
exports.up = async function(knex) {
  // Changes our schema in some way. One step up.
  await knex.schema.createTable("fruits", (table) => {
    // "id" INTEGER NOT NULL UNIQUE PRIMARY KEY AUTOINCREMENT
    // table.integer("id").notNull().unique().primary();
    table.increments("id")
    // "name" TEXT NOT NULL UNIQUE
    table.text("name").notNull().unique()
    // "avgWeightOz" FLOAT
    table.float("avgWeightOz")
    // "delicious" BOOLEAN DEFAULT 0
    table.boolean("delicious").defaultTo(false)
  })

};

exports.down = async function(knex) {
  await knex.schema.dropTableIfExists("fruits")
};
