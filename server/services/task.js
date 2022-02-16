const { ObjectId } = require('mongodb');
const errorMessage = require('../utils/errorMessage');
const { taskSchema } = require('../utils/joi');

const {
  getAllTasksModel,
  createTaskModel,
  deleteTaskModel,
  updateTaskModel,
} = require('../models/task');

const {
  ACCEPTED,
  NOT_FOUND,
} = require('../utils/dictionary');

const getAllTasksService = async () => {
  const tasks = await getAllTasksModel();
  if (!tasks || !tasks.length) throw errorMessage(NOT_FOUND, 'Tasks not found');
  return tasks;
};

const createTaskService = async (taskName, status, createdAt) => {
  const { error } = taskSchema.validate({ taskName, status });
  if (error) throw errorMessage(ACCEPTED, error.message);
  const createdTask = await createTaskModel(taskName, status, createdAt);
  return createdTask;
};

const deleteTaskService = async (id) => {
  const idIsValid = ObjectId.isValid(id);
  if (!idIsValid) throw errorMessage(ACCEPTED, 'Provid a valid id');
  await deleteTaskModel(id);
  return {
    id,
    message: 'Task deleted succefully',
  };
};

const updateTaskService = async (id, taskName, status) => {
  const { error } = taskSchema.validate({ taskName, status });
  if (error) throw errorMessage(ACCEPTED, error.message);
  const idIsValid = ObjectId.isValid(id);
  if (!idIsValid) throw errorMessage(ACCEPTED, 'Provid a valid id');
  await updateTaskModel(id, taskName, status);
  return {
    id,
    message: 'Task updated succefully',
  };
};

module.exports = {
  getAllTasksService,
  createTaskService,
  deleteTaskService,
  updateTaskService,
};
