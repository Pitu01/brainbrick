import { Link } from "react-router-dom";

function Button({ children, to, href, variant = "primary", type = "button", onClick, className = "", target, rel }) {
  const styles = variant === "secondary" ? "brain-btn-secondary" : "brain-btn-primary";
  const classes = `${styles} ${className}`;

  if (to) return <Link to={to} className={classes}>{children}</Link>;

  if (href) {
    return <a href={href} className={classes} target={target} rel={rel}>{children}</a>;
  }

  return <button type={type} onClick={onClick} className={classes}>{children}</button>;
}

export default Button;