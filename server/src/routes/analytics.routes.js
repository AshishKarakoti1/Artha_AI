const router = require('express').Router();
const { protect } = require('../middleware/auth.middleware');
const analyticsController = require('../controllers/analytics.controller');

router.use(protect);

router.get('/summary', analyticsController.getSummary);
router.get('/categories', analyticsController.getCategoryBreakdown);
router.get('/trend', analyticsController.getMonthlyTrend);

module.exports = router;