import { Link } from "react-router-dom";

const base =
  "inline-flex items-center justify-center px-6 py-3 text-[0.95rem] font-medium transition-colors duration-200";

const variants = {
  solid: "bg-gold text-forest-dark hover:bg-gold-soft",
  outline: "border border-gold text-gold hover:bg-gold hover:text-forest-dark",
  outlineDark: "border border-forest text-forest hover:bg-forest hover:text-ivory",
};

export default function Button({ to, href, variant = "solid", children, className = "", ...rest }) {
  const classes = `${base} ${variants[variant]} ${className}`;

  if (to) {
    return (
      <Link to={to} className={classes} {...rest}>
        {children}
      </Link>
    );
  }

  if (href) {
    return (
      <a href={href} className={classes} {...rest}>
        {children}
      </a>
    );
  }

  return (
    <button className={classes} {...rest}>
      {children}
    </button>
  );
}
