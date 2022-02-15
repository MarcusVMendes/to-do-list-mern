const connection = require('./connection');

const getAllTasksModel = async () => {
  const conn = await connection();
  const query = await conn.collection('Tasks').find().toArray();
  return query;
};

module.exports = {
  getAllTasksModel,
};
