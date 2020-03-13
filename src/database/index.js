const Sequelize = require('sequelize');
const dbConfig = require('../config/database');

const Entrega = require('../models/Entrega');

const connection = new Sequelize(dbConfig);

Entrega.init(connection);

module.exports = connection;