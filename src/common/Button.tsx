import React from "react";
import { Link } from "react-scroll";

type ButtonProps = {
  type?: "button" | "submit" | "reset" | undefined;
  className?: string;
  disabled?: boolean;
  padding?: string;
  onClick?: () => {};
  href?: string;
  scrollTo?: string;
  children?: React.ReactNode;
};

const Button = ({
  type = "button",
  className = "",
  disabled = false,
  padding = "py-2 px-4",
  onClick,
  href,
  scrollTo,
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
        <>
          {scrollTo ? (
            <Link to={scrollTo} spy={true} smooth={true} offset={-40}>
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
            </Link>
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
      )}
    </>
  );
};

export default Button;
