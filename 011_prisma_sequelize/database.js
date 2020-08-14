require('dotenv').config();

const user = process.env.POSTGRES_USER;
const password = process.env.POSTGRES_PASSWORD;
const host = process.env.POSTGRES_HOST;
const port = process.env.POSTGRES_PORT;
const dbname = process.env.POSTGRES_DBNAME;

const { Sequelize } = require('sequelize');

module.exports = new Sequelize(`postgres://${user}:${password}@${host}:${port}/${dbname}`);