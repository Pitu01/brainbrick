function Container({ children, className = "" }) {
  return <div className={`brain-container ${className}`}>{children}</div>;
}

export default Container;