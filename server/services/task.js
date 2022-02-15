const {
  getAllTasksModel,
} = require('../models/task');

const getAllTasksService = async () => {
  const tasks = await getAllTasksModel();
  console.log(`service${tasks}`);
  return tasks;
};

module.exports = {
  getAllTasksService,
};
