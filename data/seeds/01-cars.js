exports.seed = function (knex) {
    return knex('cars').truncate() // deletes rows and resets the primary key
      .then(function () {
        return knex('cars').insert([
          // remember the db provides ids
          { vin: '2345H', make: "today", model:"Tesla", millage:5000 , title:"New" },
          { vin: '2345HH', make: "future", model:"Mercedes Benz", millage:6000 , transmition:"Awesome"},
        ])
      })
  }


//   tbl.text('vin',256).unique().notNullable()
//   tbl.text('make',256).notNullable()
//   tbl.text('model',256).notNullable()
//   tbl.float('millage').notNullable()
//   tbl.text('title',256)
//   tbl.text('transmition',256)