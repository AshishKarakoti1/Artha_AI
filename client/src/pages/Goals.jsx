import useGoals from "../hooks/useGoals";
import GoalForm from "../features/goals/GoalForm";
import GoalList from "../features/goals/GoalList";
import { motion } from "framer-motion";

const Goals = () => {
  const { goals, loading, addGoal, deleteGoal } = useGoals();

  return (
    <div className="p-6 bg-slate-100 min-h-screen space-y-6">

      {/* 🔹 HEADER */}
      <div>
        <h1 className="text-2xl font-semibold text-slate-800">
          Goals
        </h1>
        <p className="text-sm text-slate-500">
          Plan and track your financial targets
        </p>
      </div>

      {/* 🔹 FORM CARD */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <div className="bg-white border border-slate-200 rounded-2xl p-4 shadow-sm">
          <h3 className="text-sm font-medium text-slate-700 mb-4">
            Create New Goal
          </h3>
          <GoalForm onAdd={addGoal} />
        </div>
      </motion.div>

      {/* 🔹 GOALS LIST */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <div className="bg-white border border-slate-200 rounded-2xl p-4 shadow-sm">
          <h3 className="text-sm font-medium text-slate-700 mb-4">
            Your Goals
          </h3>

          {loading ? (
            <div className="space-y-3">
              <div className="h-16 bg-slate-200 rounded animate-pulse"></div>
              <div className="h-16 bg-slate-200 rounded animate-pulse"></div>
            </div>
          ) : goals.length === 0 ? (
            <p className="text-sm text-slate-500">
              No goals yet. Start planning your future 🚀
            </p>
          ) : (
            <GoalList goals={goals} onDelete={deleteGoal} />
          )}
        </div>
      </motion.div>

    </div>
  );
};

export default Goals;