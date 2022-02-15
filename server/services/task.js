const { ObjectId } = require('mongodb');
const errorMessage = require('../utils/errorMessage');
const { taskSchema } = require('../utils/joi');

const {
  getAllTasksModel,
  createTaskModel,
  deleteTaskModel,
} = require('../models/task');

const getAllTasksService = async () => {
  const tasks = await getAllTasksModel();
  if (!tasks || !tasks.length) throw errorMessage(404, 'Tasks not found');
  return tasks;
};

const createTaskService = async (taskName, status, createdAt) => {
  const { error } = taskSchema.validate({ taskName, status, createdAt });
  if (error) throw errorMessage(202, error.message);
  const createdTask = await createTaskModel(taskName, status, createdAt);
  return createdTask;
};

const deleteTaskService = async (id) => {
  const idIsValid = ObjectId.isValid(id);
  if (!idIsValid) throw errorMessage(202, 'Provid a valid id');
  await deleteTaskModel(id);
  return {
    id,
    message: 'Task deleted succefully',
  };
};

module.exports = {
  getAllTasksService,
  createTaskService,
  deleteTaskService,
};
