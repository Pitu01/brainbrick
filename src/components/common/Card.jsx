function Card({ children, className = "", hover = true }) {
  return (
    <div className={`${hover ? "brain-card" : "rounded-3xl border border-gray-200 bg-white"} ${className}`}>
      {children}
    </div>
  );
}

export default Card;