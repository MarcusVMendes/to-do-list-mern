const router = require('express').Router();

const {
  getAllTasksController,
  createTaskController,
} = require('../controllers/task');

router.get('/', getAllTasksController);
router.post('/', createTaskController);

module.exports = router;
