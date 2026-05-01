const Expense = require('../models/expense.model');
const User = require('../models/user.model');
const mongoose = require("mongoose");

const getSummary = async (userId) => {
  // Get user income
  const user = await User.findById(userId);
  const income = user.monthlyIncome || 0;

  // Current month range
  const now = new Date();
  const startOfMonth = new Date(now.getFullYear(), now.getMonth(), 1);
  const endOfMonth = new Date(now.getFullYear(), now.getMonth() + 1, 0);

  // Aggregate expenses
  const expenses = await Expense.find({ userId });

  const totalExpenses = expenses.reduce((sum, e) => sum + e.amount, 0);

  const savings = income - totalExpenses;
  const savingsRatio = income > 0 ? savings / income : 0;

  return {
    income,
    totalExpenses,
    savings,
    savingsRatio,
  };
};

const getCategoryBreakdown = async (userId) => {
  const data = await Expense.aggregate([
    { $match: { userId: new mongoose.Types.ObjectId(userId) } },
    {
      $group: {
        _id: '$category',
        total: { $sum: '$amount' },
      },
    },
  ]);

  return data;
};

const getMonthlyTrend = async (userId) => {
  const data = await Expense.aggregate([
    { $match: { userId: new mongoose.Types.ObjectId(userId) } },
    {
      $group: {
        _id: {
          month: { $month: '$date' },
          year: { $year: '$date' },
        },
        total: { $sum: '$amount' },
      },
    },
    { $sort: { '_id.year': 1, '_id.month': 1 } },
  ]);

  return data;
};

module.exports = {
  getSummary,
  getCategoryBreakdown,
  getMonthlyTrend,
};