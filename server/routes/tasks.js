const router = require('express').Router();

const {
  getAllTasksController,
} = require('../controllers/task');

router.get('/', getAllTasksController);

module.exports = router;
