const analyticsService = require('../services/analytics.service');

const getSummary = async (req, res, next) => {
  try {
    const data = await analyticsService.getSummary(req.user.id);
    res.json(data);
  } catch (error) {
    next(error);
  }
};

const getCategoryBreakdown = async (req, res, next) => {
  try {
    const data = await analyticsService.getCategoryBreakdown(req.user.id);
    res.json(data);
  } catch (error) {
    next(error);
  }
};

const getMonthlyTrend = async (req, res, next) => {
  try {
    const data = await analyticsService.getMonthlyTrend(req.user.id);
    res.json(data);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getSummary,
  getCategoryBreakdown,
  getMonthlyTrend,
};