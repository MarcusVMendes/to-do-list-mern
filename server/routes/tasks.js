const router = require('express').Router();

const {
  getAllTasksController,
  createTaskController,
  deleteTaskController,
} = require('../controllers/task');

router.get('/', getAllTasksController);
router.post('/', createTaskController);
router.delete('/:id', deleteTaskController);

module.exports = router;
