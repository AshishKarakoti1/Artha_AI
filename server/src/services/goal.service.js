const Goal = require('../models/goal.model');

const createGoal = async (userId, data) => {
  return await Goal.create({ ...data, userId });
};

const getGoals = async (userId) => {
  return await Goal.find({ userId }).sort({ createdAt: -1 });
};

const updateGoal = async (userId, goalId, data) => {
  const goal = await Goal.findOne({ _id: goalId, userId });
  if (!goal) throw new Error('Goal not found');

  Object.assign(goal, data);
  await goal.save();

  return goal;
};

const deleteGoal = async (userId, goalId) => {
  const goal = await Goal.findOneAndDelete({ _id: goalId, userId });
  if (!goal) throw new Error('Goal not found');

  return { message: 'Goal deleted' };
};

// 🔥 CORE LOGIC: Monthly Saving Requirement
const calculateGoalPlan = (goal) => {
  const today = new Date();
  const deadline = new Date(goal.deadline);

  const monthsLeft =
    (deadline.getFullYear() - today.getFullYear()) * 12 +
    (deadline.getMonth() - today.getMonth());

  const remainingAmount = goal.targetAmount - goal.currentAmount;

  const monthlyRequired =
    monthsLeft > 0 ? remainingAmount / monthsLeft : remainingAmount;

  const progress =
    (goal.currentAmount / goal.targetAmount) * 100;

  return {
    ...goal.toObject(),
    monthsLeft,
    remainingAmount,
    monthlyRequired,
    progress,
  };
};

const getGoalPlans = async (userId) => {
  const goals = await Goal.find({ userId });

  return goals.map((goal) => calculateGoalPlan(goal));
};

module.exports = {
  createGoal,
  getGoals,
  updateGoal,
  deleteGoal,
  getGoalPlans,
};