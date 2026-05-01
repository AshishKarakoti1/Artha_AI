import useDashboardData from "../hooks/useDashboardData";
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const COLORS = ["#3b82f6", "#60a5fa", "#93c5fd", "#2563eb", "#1d4ed8"];


const Dashboard = () => {
  const navigate = useNavigate();
  const { summary, categories, trend, recommendations, goals, loading } =
    useDashboardData();

  if (loading) {
    return <div className="p-6">Loading...</div>;
  }

  return (
    <div className="p-6 bg-slate-100 min-h-screen space-y-8">

      {/* 🔹 HEADER */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-semibold text-slate-800">
            Dashboard
          </h1>
          <p className="text-sm text-slate-500">
            Here's what's happening with your finances
          </p>
        </div>

        <button
          onClick={() => navigate("/expenses")}
          className="bg-blue-600 text-white px-4 py-2 rounded-xl text-sm hover:bg-blue-700 transition">
          + Add Expense
        </button>
      </div>

      {/* 🔹 METRIC CARDS */}
      <div className="grid grid-cols-3 gap-4">

        {[
          {
            title: "Monthly Income",
            value: summary?.income,
            sub: "This Month",
          },
          {
            title: "Total Expenses",
            value: summary?.totalExpenses,
            sub: "This Month",
          },
          {
            title: "Total Savings",
            value: summary?.savings,
            sub: `${(summary?.savingsRatio * 100).toFixed(1)}% of income`,
            highlight: true,
          },
        ].map((card, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: i * 0.1 }}
          >
            <div className="bg-white border border-slate-200 rounded-2xl p-4 shadow-sm hover:shadow-md transition">
              <p className="text-sm text-slate-500">{card.title}</p>
              <h2
                className={`text-xl font-semibold ${card.highlight ? "text-blue-600" : "text-slate-800"
                  }`}
              >
                ₹{card.value}
              </h2>
              <p className="text-xs text-slate-400 mt-1">{card.sub}</p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* 🔹 CHARTS */}
      <div className="grid grid-cols-2 gap-4">

        {/* PIE */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <div className="bg-white border border-slate-200 rounded-2xl p-4 shadow-sm">
            <h3 className="text-sm font-medium text-slate-700 mb-4">
              Expenses Overview
            </h3>

            <ResponsiveContainer width="100%" height={250}>
              <PieChart>
                <Pie
                  data={categories}
                  dataKey="total"
                  nameKey="_id"
                  outerRadius={80}
                  label
                >
                  {categories.map((_, i) => (
                    <Cell key={i} fill={COLORS[i % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </motion.div>

        {/* LINE */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <div className="bg-white border border-slate-200 rounded-2xl p-4 shadow-sm">
            <h3 className="text-sm font-medium text-slate-700 mb-4">
              Spending Trend
            </h3>

            <ResponsiveContainer width="100%" height={250}>
              <LineChart data={trend}>
                <CartesianGrid stroke="#e2e8f0" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Line
                  type="monotone"
                  dataKey="total"
                  stroke="#3b82f6"
                  strokeWidth={2}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </motion.div>
      </div>

      {/* 🔹 LOWER GRID */}
      <div className="grid grid-cols-2 gap-4">

        {/* GOALS */}
        <div className="bg-white border border-slate-200 rounded-2xl p-4 shadow-sm">
          <h3 className="text-sm font-medium text-slate-700 mb-4">
            Goals Overview
          </h3>

          <div className="space-y-4">
            {goals.map((g, i) => (
              <div key={i}>
                <div className="flex justify-between text-sm text-slate-700">
                  <span>{g.title}</span>
                  <span>{g.progress.toFixed(0)}%</span>
                </div>

                <div className="w-full bg-slate-200 h-2 rounded mt-1">
                  <div
                    className="bg-blue-600 h-2 rounded"
                    style={{ width: `${g.progress}%` }}
                  />
                </div>

                <p className="text-xs text-slate-400 mt-1">
                  ₹{g.monthlyRequired}/month
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* RECOMMENDATIONS */}
        <div className="bg-white border border-slate-200 rounded-2xl p-4 shadow-sm">
          <h3 className="text-sm font-medium text-slate-700 mb-4">
            Top Recommendations
          </h3>

          <div className="space-y-3">
            {recommendations.map((r, i) => (
              <div
                key={i}
                className="p-3 rounded-xl bg-blue-50 text-blue-700 text-sm border border-blue-100"
              >
                {r.message}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;