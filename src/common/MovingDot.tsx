import React from "react";

type Props = {
  width: string;
};

const MovingDot = ({ width }: Props) => {
  return (
    <div className={`dot-transition rounded-full bg-green-200 m-10 ${width}`}>
      <div className="dot rounded-full bg-primary-500"></div>
    </div>
  );
};

export default MovingDot;
