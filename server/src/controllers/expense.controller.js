const expenseService = require('../services/expense.service');

const createExpense = async (req, res, next) => {
  try {
    const expense = await expenseService.createExpense(
      req.user.id,
      req.body
    );
    res.status(201).json(expense);
  } catch (error) {
    next(error);
  }
};

const getExpenses = async (req, res, next) => {
  try {
    const expenses = await expenseService.getExpenses(
      req.user.id,
      req.query
    );
    res.json(expenses);
  } catch (error) {
    next(error);
  }
};

const updateExpense = async (req, res, next) => {
  try {
    const expense = await expenseService.updateExpense(
      req.user.id,
      req.params.id,
      req.body
    );
    res.json(expense);
  } catch (error) {
    next(error);
  }
};

const deleteExpense = async (req, res, next) => {
  try {
    const result = await expenseService.deleteExpense(
      req.user.id,
      req.params.id
    );
    res.json(result);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  createExpense,
  getExpenses,
  updateExpense,
  deleteExpense,
};