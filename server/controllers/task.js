const {
  getAllTasksService,
} = require('../services/task');

const getAllTasksController = async (_req, res, next) => {
  try {
    const tasks = await getAllTasksService();
    return res.status(201).json(tasks);
  } catch (err) {
    console.log(err);
    return next(err);
  }
};

module.exports = {
  getAllTasksController,
};
