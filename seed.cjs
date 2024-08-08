const client = require('./client.cjs');
const {createUser} = require('./users.cjs');

const dropTables = async() => {
  try{
    await client.query(`
      DROP TABLE IF EXISTS users;
      `);
  }catch(err) {
    console.log(err);
  }
}

const createTables = async() => {
  try{
    await client.query(`
      CREATE TABLE users(
        id SERIAL PRIMARY KEY,
        username VARCHAR(30) NOT NULL UNIQUE,
        password VARCHAR(30) NOT NULL
      );
    `);
  }catch(err) {
    console.log(err);
  }
}

const syncAndSeed = async() => {
  await client.connect();
  console.log('CONNECTED');

  await dropTables();
  console.log('tables dropped');

  await createTables();
  console.log('tables created');

  await createUser(`mike`, `You_got_it`);
  await createUser(`nick`, `nice_job`);
  console.log('user mike created!');

  await client.end();
  console.log('disconnected');

}

syncAndSeed();