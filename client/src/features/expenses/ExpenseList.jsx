const ExpenseList = ({ expenses, onDelete }) => {
  return (
    <div className="space-y-3 mt-4">
      {expenses.map((e) => (
        <div
          key={e._id}
          className="flex items-center justify-between bg-white border border-slate-200 p-4 rounded-2xl shadow-sm hover:shadow-md transition"
        >
          {/* LEFT */}
          <div className="flex items-center gap-3">
            
            {/* Icon */}
            <div className="w-10 h-10 rounded-xl bg-blue-100 text-blue-600 flex items-center justify-center text-sm font-semibold">
              ₹
            </div>

            {/* Info */}
            <div>
              <p className="text-sm font-medium text-slate-800">
                ₹{e.amount}
              </p>
              <p className="text-xs text-slate-500 capitalize">
                {e.category}
                {e.note && ` • ${e.note}`}
              </p>
            </div>
          </div>

          {/* RIGHT */}
          <button
            onClick={() => onDelete(e._id)}
            className="text-sm text-red-500 hover:text-red-600 transition"
          >
            Delete
          </button>
        </div>
      ))}
    </div>
  );
};

export default ExpenseList;