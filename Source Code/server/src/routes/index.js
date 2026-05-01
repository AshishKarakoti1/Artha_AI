const router = require('express').Router();
const authRoutes = require('./auth.routes');
const expenseRoutes = require('./expense.routes');
const analyticsRoutes = require('./analytics.routes');
const recommendationRoutes = require('./recommendation.routes');
const goalRoutes = require('./goal.routes');

router.use('/auth', authRoutes);
router.use('/expenses', expenseRoutes);
router.use('/analytics', analyticsRoutes);
router.use('/recommendations', recommendationRoutes);
router.use('/goals', goalRoutes);

router.get('/health', (req, res) => {
  res.json({ status: 'OK' });
});

module.exports = router;