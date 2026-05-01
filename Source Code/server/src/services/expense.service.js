const Expense = require('../models/expense.model');

const createExpense = async (userId, data) => {
  return await Expense.create({ ...data, userId });
};

const getExpenses = async (userId, query) => {
  const filter = { userId };

  if (query.category) {
    filter.category = query.category;
  }

  if (query.startDate && query.endDate) {
    filter.date = {
      $gte: new Date(query.startDate),
      $lte: new Date(query.endDate),
    };
  }

  return await Expense.find(filter).sort({ date: -1 });
};

const updateExpense = async (userId, expenseId, data) => {
  const expense = await Expense.findOne({ _id: expenseId, userId });

  if (!expense) throw new Error('Expense not found');

  Object.assign(expense, data);
  await expense.save();

  return expense;
};

const deleteExpense = async (userId, expenseId) => {
  const expense = await Expense.findOneAndDelete({
    _id: expenseId,
    userId,
  });

  if (!expense) throw new Error('Expense not found');

  return { message: 'Expense deleted' };
};

module.exports = {
  createExpense,
  getExpenses,
  updateExpense,
  deleteExpense,
};