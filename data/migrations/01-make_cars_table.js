exports.up = function (knex) { // dependency injection
  // DO YOUR MAGIC
  return knex.schema.createTable( 'cars', tbl =>{
    tbl.increments() // creates an id column that auto increments
    tbl.text('vin',256).unique().notNullable()
    tbl.text('make',256).notNullable()
    tbl.text('model',256).notNullable()
    tbl.float('millage').notNullable()
    tbl.text('title',256)
    tbl.text('transmition',256)
  })
};


exports.down = function (knex) {
  // DO YOUR MAGIC
  return knex.schema.dropTableIfExists('cars')
};


// https://knexjs.org/#Schema-createTable
// https://knexjs.org/#Schema-Building
