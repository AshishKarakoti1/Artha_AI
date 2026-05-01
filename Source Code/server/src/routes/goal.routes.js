const router = require('express').Router();
const { protect } = require('../middleware/auth.middleware');
const goalController = require('../controllers/goal.controller');

router.use(protect);

router.post('/', goalController.createGoal);
router.get('/', goalController.getGoals);
router.get('/plans', goalController.getGoalPlans);
router.put('/:id', goalController.updateGoal);
router.delete('/:id', goalController.deleteGoal);

module.exports = router;