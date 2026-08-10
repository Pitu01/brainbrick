function Badge({ children, variant = "blue", className = "" }) {
  const variants = {
    blue: "bg-blue-50 text-blue-700",
    purple: "bg-purple-50 text-purple-700",
    orange: "bg-orange-50 text-orange-700",
    green: "bg-green-50 text-green-700",
    gray: "bg-gray-100 text-gray-700",
  };

  return (
    <span className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-bold ${variants[variant]} ${className}`}>
      {children}
    </span>
  );
}

export default Badge;