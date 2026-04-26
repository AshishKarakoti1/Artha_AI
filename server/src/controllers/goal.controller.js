const goalService = require('../services/goal.service');

const createGoal = async (req, res, next) => {
  try {
    const goal = await goalService.createGoal(req.user.id, req.body);
    res.status(201).json(goal);
  } catch (error) {
    next(error);
  }
};

const getGoals = async (req, res, next) => {
  try {
    const goals = await goalService.getGoals(req.user.id);
    res.json(goals);
  } catch (error) {
    next(error);
  }
};

const updateGoal = async (req, res, next) => {
  try {
    const goal = await goalService.updateGoal(
      req.user.id,
      req.params.id,
      req.body
    );
    res.json(goal);
  } catch (error) {
    next(error);
  }
};

const deleteGoal = async (req, res, next) => {
  try {
    const result = await goalService.deleteGoal(
      req.user.id,
      req.params.id
    );
    res.json(result);
  } catch (error) {
    next(error);
  }
};

const getGoalPlans = async (req, res, next) => {
  try {
    const plans = await goalService.getGoalPlans(req.user.id);
    res.json(plans);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  createGoal,
  getGoals,
  updateGoal,
  deleteGoal,
  getGoalPlans,
};