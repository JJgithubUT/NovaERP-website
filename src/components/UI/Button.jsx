import React from "react";

const VARIANTS = {
  primary:
    "bg-[#73030D] text-[#F2F2F2] hover:bg-[#9E1A22] focus:ring-[#73030D]",
  secondary:
    "bg-transparent text-[#F2F2F2] border border-[#AFAFAF]/40 hover:border-[#F2F2F2] hover:bg-[#F2F2F2]/5 focus:ring-[#AFAFAF]",
  ghost:
    "bg-transparent text-[#73030D] hover:bg-[#73030D]/10 focus:ring-[#73030D]",
};

const Button = ({
  children,
  href,
  onClick,
  variant = "primary",
  type = "button",
  className = "",
}) => {
  const styles = `inline-flex items-center justify-center px-6 py-3 rounded-sm text-sm font-semibold tracking-wide uppercase transition-all duration-300 active:scale-[0.98] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-[#0D0D0D] ${VARIANTS[variant]} ${className}`;

  if (href) {
    return (
      <a href={href} className={styles}>
        {children}
      </a>
    );
  }

  return (
    <button type={type} onClick={onClick} className={styles}>
      {children}
    </button>
  );
};

export default Button;