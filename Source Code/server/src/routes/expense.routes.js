const router = require('express').Router();
const { body } = require('express-validator');
const validate = require('../middleware/validate.middleware');
const { protect } = require('../middleware/auth.middleware');
const expenseController = require('../controllers/expense.controller');

router.use(protect);

router.post(
  '/',
  [
    body('amount').isNumeric().notEmpty(),
    body('category').optional().isString(),
  ],
  validate,
  expenseController.createExpense
);

router.get('/', expenseController.getExpenses);

router.put('/:id', expenseController.updateExpense);
router.delete('/:id', expenseController.deleteExpense);

module.exports = router;