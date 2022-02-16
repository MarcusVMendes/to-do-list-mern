const { ObjectId } = require('mongodb');
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
  const query = await conn.collection('Tasks').deleteOne({ _id: ObjectId(id) });
  return query;
};

const updateTaskModel = async (id, taskName, status) => {
  const conn = await connection();
  const query = await conn.collection('Tasks').updateOne(
    { _id: ObjectId(id) },
    { $set: { taskName, status } },
  );
  return query;
};

module.exports = {
  getAllTasksModel,
  createTaskModel,
  deleteTaskModel,
  updateTaskModel,
};
