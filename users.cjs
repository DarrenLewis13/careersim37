const client = require('./client.cjs');
const createUser = async(username, password) => {
  try{
    await client.query(`
      INSERT INTO users (username, password)
      VALUES ('${username}', '${password}');
    `);
  }catch(err) {
    console.log(err);
  }
}

module.exports = {
  createUser
}