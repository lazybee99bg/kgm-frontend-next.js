import React from "react";

type Props = {
  width: string;
};

const MovingDot = ({ width }: Props) => {
  return (
    <div className={`dot-transition rounded-full bg-green-100 my-10 ${width}`}>
      <div className="dot rounded-full bg-primary-400"></div>
    </div>
  );
};

export default MovingDot;
