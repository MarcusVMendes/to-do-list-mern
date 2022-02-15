const {
  getAllTasksModel,
} = require('../models/task');
const errorMessage = require('../utils/errorMessage');

const getAllTasksService = async () => {
  const tasks = await getAllTasksModel();
  if (!tasks || !tasks.length) throw errorMessage(404, 'Tasks not found');
  return tasks;
};

module.exports = {
  getAllTasksService,
};
