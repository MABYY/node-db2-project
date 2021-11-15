// no need to change this file
const configs = require('../knexfile.js')
const knex = require('knex')
const environment = process.env.NODE_ENV || 'development'

module.exports = knex(configs[environment])
