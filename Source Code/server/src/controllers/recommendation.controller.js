const recommendationService = require('../services/recommendation.service');

const getRecommendations = async (req, res, next) => {
  try {
    const data = await recommendationService.generateRecommendations(req.user.id);
    res.json(data);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getRecommendations,
};