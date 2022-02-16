const router = require('express').Router();

const {
  getAllTasksController,
  createTaskController,
  deleteTaskController,
  updateTaskController,
} = require('../controllers/task');

router.get('/', getAllTasksController);
router.post('/', createTaskController);
router.delete('/:id', deleteTaskController);
router.put('/:id', updateTaskController);

module.exports = router;
