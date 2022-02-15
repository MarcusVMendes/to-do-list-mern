const {
  getAllTasksService,
  createTaskService,
  deleteTaskService,
} = require('../services/task');

const getAllTasksController = async (_req, res, next) => {
  try {
    const tasks = await getAllTasksService();
    return res.status(200).json(tasks);
  } catch (err) {
    console.log(err);
    return next(err);
  }
};

const createTaskController = async (req, res, next) => {
  try {
    const { taskName, status, createdAt } = req.body;
    const createdTask = await createTaskService(taskName, status, createdAt);
    return res.status(201).json(createdTask);
  } catch (err) {
    console.log(err);
    return next(err);
  }
};

const deleteTaskController = async (req, res, next) => {
  try {
    const { id } = req.params;
    const deletedTask = await deleteTaskService(id);
    return res.status(410).json(deletedTask);
  } catch (err) {
    console.log(err);
    return next(err);
  }
};

module.exports = {
  getAllTasksController,
  createTaskController,
  deleteTaskController,
};
