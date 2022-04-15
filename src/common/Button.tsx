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
  const baseClassName =
    "transition duration-500 rounded bg-red-600 text-center text-white focus:ring-0 focus:outline-none";
  return (
    <>
      {href ? (
        <a
          className={`${baseClassName} ${className} ${padding}`}
          href={href}
          target="_blank"
          rel="noreferrer"
        >
          <span>{children}</span>
        </a>
      ) : (
        <>
          {scrollTo ? (
            <Link to={scrollTo} spy={true} smooth={true} offset={-40}>
              <button
                type={type}
                className={`${baseClassName} ${className} ${padding}`}
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
              className={`${baseClassName} ${className} ${padding}`}
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
