const connection = require('./connection');

const getAllTasksModel = async () => {
  const conn = await connection();
  const query = await conn.collection('Tasks').find().toArray();
  return query;
};

const createTaskModel = async (taskName, status, createdAt) => {
  const conn = await connection();
  const query = await conn.collection('Tasks').insertOne({ taskName, status, createdAt });
  return query;
};

const deleteTaskModel = async (id) => {
  const conn = await connection();
  const query = await conn.collection('Tasks').deleteOne({ where: { _id: id } });
  return query;
};

module.exports = {
  getAllTasksModel,
  createTaskModel,
  deleteTaskModel,
};
