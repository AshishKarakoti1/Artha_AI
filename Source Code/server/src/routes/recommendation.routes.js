const router = require('express').Router();
const { protect } = require('../middleware/auth.middleware');
const recommendationController = require('../controllers/recommendation.controller');

router.use(protect);

router.get('/', recommendationController.getRecommendations);

module.exports = router;