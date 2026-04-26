const GoalList = ({ goals, onDelete }) => {
  return (
    <div className="space-y-4 mt-4">
      {goals.map((g) => (
        <div
          key={g._id}
          className="bg-white border border-slate-200 p-4 rounded-2xl shadow-sm hover:shadow-md transition"
        >
          {/* HEADER */}
          <div className="flex justify-between items-center mb-2">
            <h3 className="text-sm font-semibold text-slate-800">
              {g.title}
            </h3>

            <button
              onClick={() => onDelete(g._id)}
              className="text-xs text-red-500 hover:text-red-600 transition"
            >
              Delete
            </button>
          </div>

          {/* PROGRESS BAR */}
          <div className="w-full bg-slate-200 h-2 rounded-full overflow-hidden">
            <div
              className="bg-blue-600 h-2 rounded-full transition-all duration-300"
              style={{ width: `${g.progress}%` }}
            />
          </div>

          {/* PROGRESS INFO */}
          <div className="flex justify-between text-xs text-slate-500 mt-2">
            <span>
              ₹{g.currentAmount} / ₹{g.targetAmount}
            </span>
            <span>{g.progress.toFixed(0)}%</span>
          </div>

          {/* EXTRA INFO */}
          <div className="flex justify-between mt-3 text-xs">
            <span className="text-slate-400">
              {g.monthsLeft} months left
            </span>
            <span className="text-blue-600 font-medium">
              ₹{g.monthlyRequired.toFixed(0)}/month
            </span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default GoalList;