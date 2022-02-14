const {
  getAllTasksModel,
} = require('../models/task');

const getAllTasksService = async () => {
  const tasks = await getAllTasksModel();
  return tasks;
};

module.exports = {
  getAllTasksService,
};
