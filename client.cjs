const {Client} = require('pg');
const client = new Client('postgres://localhost:5432/clothing_review')

module.exports = client;
