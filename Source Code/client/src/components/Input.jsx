const Input = ({
  label,
  error,
  className = "",
  ...props
}) => {
  return (
    <div className="flex flex-col gap-1 w-full">
      
      {label && (
        <label className="text-sm text-slate-600 font-medium">
          {label}
        </label>
      )}

      <input
        {...props}
        className={`w-full bg-white border rounded-xl px-3 py-2 text-sm text-slate-800
        placeholder:text-slate-400
        focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500
        transition
        ${
          error
            ? "border-red-500 focus:ring-red-500 focus:border-red-500"
            : "border-slate-300"
        }
        ${className}`}
      />

      {error && (
        <span className="text-xs text-red-500 mt-1">
          {error}
        </span>
      )}
    </div>
  );
};

export default Input;