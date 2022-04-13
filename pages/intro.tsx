import React from "react";
import LayoutPage from "../src/common/LayoutPage";
import MovingDot from "../src/common/MovingDot";
const intro = () => {
  return (
    <div>
      <LayoutPage>
        <div className="container">
          <MovingDot width={"w-36"} />
        </div>
      </LayoutPage>
    </div>
  );
};

export default intro;
