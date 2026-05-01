import useExpenses from "../hooks/useExpenses";
import ExpenseForm from "../features/expenses/ExpenseForm";
import ExpenseList from "../features/expenses/ExpenseList";
import { motion } from "framer-motion";

const Expenses = () => {
  const { expenses, loading, addExpense, deleteExpense } = useExpenses();

  return (
    <div className="p-6 bg-slate-100 min-h-screen space-y-6">

      {/* 🔹 HEADER */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-semibold text-slate-800">
            Expenses
          </h1>
          <p className="text-sm text-slate-500">
            Track and manage your daily spending
          </p>
        </div>
      </div>

      {/* 🔹 FORM CARD */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <div className="bg-white border border-slate-200 rounded-2xl p-4 shadow-sm">
          <h3 className="text-sm font-medium text-slate-700 mb-4">
            Add New Expense
          </h3>
          <ExpenseForm onAdd={addExpense} />
        </div>
      </motion.div>

      {/* 🔹 LIST CARD */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <div className="bg-white border border-slate-200 rounded-2xl p-4 shadow-sm">
          <h3 className="text-sm font-medium text-slate-700 mb-4">
            Expense History
          </h3>

          {loading ? (
            <div className="space-y-2">
              <div className="h-10 bg-slate-200 rounded animate-pulse"></div>
              <div className="h-10 bg-slate-200 rounded animate-pulse"></div>
            </div>
          ) : expenses.length === 0 ? (
            <p className="text-sm text-slate-500">
              No expenses yet. Start adding some 💸
            </p>
          ) : (
            <ExpenseList expenses={expenses} onDelete={deleteExpense} />
          )}
        </div>
      </motion.div>

    </div>
  );
};

export default Expenses;