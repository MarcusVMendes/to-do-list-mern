const {
  getAllTasksModel,
  createTaskModel,
} = require('../models/task');
const errorMessage = require('../utils/errorMessage');
const { taskSchema } = require('../utils/joi');

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

module.exports = {
  getAllTasksService,
  createTaskService,
};
