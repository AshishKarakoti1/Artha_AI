const analyticsService = require('./analytics.service');
const goalService = require('./goal.service');
const User = require('../models/user.model');
const Expense = require('../models/expense.model');

const generateRecommendations = async (userId) => {
  const recommendations = [];

  const user = await User.findById(userId);
  const summary = await analyticsService.getSummary(userId);
  const goals = await goalService.getGoalPlans(userId);

  const income = summary.income;
  const expenses = summary.totalExpenses;
  const savings = summary.savings;
  const ratio = summary.savingsRatio;

  // -------------------------------
  // RULE 1: Low Savings Ratio
  // -------------------------------
  if (ratio < 0.2) {
    recommendations.push({
      priority: 1,
      type: 'warning',
      message: 'Your savings rate is below 20%. Reduce non-essential spending.',
    });
  }

  // -------------------------------
  // RULE 2: High Spending
  // -------------------------------
  if (expenses > income * 0.8) {
    recommendations.push({
      priority: 1,
      type: 'alert',
      message: 'You are spending more than 80% of your income.',
    });
  }

  // -------------------------------
  // RULE 3: Emergency Fund
  // -------------------------------
  const emergencyFundRequired = expenses * 6;

  if (savings < emergencyFundRequired) {
    recommendations.push({
      priority: 2,
      type: 'advice',
      message: 'Build an emergency fund (6 months of expenses).',
    });
  }

  // -------------------------------
  // RULE 4: Goal Feasibility Check
  // -------------------------------
  goals.forEach((goal) => {
    if (goal.monthlyRequired > savings) {
      recommendations.push({
        priority: 1,
        type: 'goal-risk',
        message: `Your goal "${goal.title}" is not feasible with current savings.`,
      });
    } else if (goal.monthlyRequired > savings * 0.7) {
      recommendations.push({
        priority: 2,
        type: 'goal-warning',
        message: `Your goal "${goal.title}" is aggressive. Monitor closely.`,
      });
    }
  });

  // -------------------------------
  // RULE 5: Idle Savings
  // -------------------------------
  if (ratio > 0.4) {
    recommendations.push({
      priority: 3,
      type: 'investment',
      message: 'You have strong savings. Consider investing for growth.',
    });
  }

  // -------------------------------
  // RULE 6: Category Overspending
  // -------------------------------
  const categories = await Expense.aggregate([
    { $match: { userId: user._id } },
    {
      $group: {
        _id: '$category',
        total: { $sum: '$amount' },
      },
    },
  ]);

  categories.forEach((cat) => {
    if (cat.total > income * 0.3) {
      recommendations.push({
        priority: 2,
        type: 'insight',
        message: `High spending in ${cat._id}. Optimize this.`,
      });
    }
  });

  // -------------------------------
  // RULE 7: Risk Profile Mapping
  // -------------------------------
  if (user.riskProfile === 'low') {
    recommendations.push({
      priority: 3,
      type: 'investment',
      message: 'Prefer safer investments (FD, PPF).',
    });
  }

  if (user.riskProfile === 'medium') {
    recommendations.push({
      priority: 3,
      type: 'investment',
      message: 'Balanced equity + debt allocation recommended.',
    });
  }

  if (user.riskProfile === 'high') {
    recommendations.push({
      priority: 3,
      type: 'investment',
      message: 'You can take higher equity exposure.',
    });
  }

  // -------------------------------
  // SORT BY PRIORITY
  // -------------------------------
  recommendations.sort((a, b) => a.priority - b.priority);

  return recommendations;
};

module.exports = {
  generateRecommendations,
};