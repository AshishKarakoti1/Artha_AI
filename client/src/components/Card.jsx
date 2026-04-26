const Card = ({
  children,
  className = "",
  hover = true,
  padding = "md",
}) => {
  const base =
    "bg-white border border-slate-200 rounded-2xl transition";

  const hoverStyle = hover
    ? "hover:shadow-md"
    : "shadow-sm";

  const paddings = {
    sm: "p-3",
    md: "p-4",
    lg: "p-6",
  };

  return (
    <div className={`${base} ${hoverStyle} ${paddings[padding]} ${className}`}>
      {children}
    </div>
  );
};

export default Card;