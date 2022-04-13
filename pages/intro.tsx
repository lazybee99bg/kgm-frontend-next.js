import React from "react";
import LayoutPage from "../src/common/LayoutPage";
import MovingDot from "../src/common/MovingDot";
import ContactLayout from "../src/components/intro/ContactLayout";
import HeroLayout from "../src/components/intro/HeroLayout";
const intro = () => {
  return (
    <div>
      <LayoutPage>
        <HeroLayout />
        <ContactLayout />
      </LayoutPage>
    </div>
  );
};

export default intro;
