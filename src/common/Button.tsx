import React from "react";

type ButtonProps = {
  type?: "button" | "submit" | "reset" | undefined;
  className?: string;
  disabled?: boolean;
  padding?: string;
  onClick?: () => {};
  href?: string;
  children?: React.ReactNode;
};

const Button = ({
  type = "button",
  className = "",
  disabled = false,
  padding = "py-2 px-4",
  onClick,
  href,
  children,
}: ButtonProps) => {
  return (
    <>
      {href ? (
        <a
          className={`transition duration-500 rounded bg-red-600 text-white focus:ring-0 focus:outline-none ${className} ${padding}`}
          href={href}
        >
          <span>{children}</span>
        </a>
      ) : (
        <button
          type={type}
          className={`transition duration-500 rounded bg-red-600 text-white focus:ring-0 focus:outline-none ${className} ${padding}`}
          disabled={disabled}
          onClick={() => {
            if (onClick) onClick();
          }}
        >
          <span>{children}</span>
        </button>
      )}
    </>
  );
};

export default Button;
