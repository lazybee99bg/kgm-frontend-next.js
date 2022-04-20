import { NextPage } from "next";
import React from "react";
import LayoutPage from "../src/common/LayoutPage";
import MovingDot from "../src/common/MovingDot";
import ContactLayout from "../src/components/Intro/ContactLayout";
import HeroLayout from "../src/components/Intro/HeroLayout";
const intro: NextPage = () => {
  return (
    <div>
      <LayoutPage
        title={
          "Liên hệ | Trung tâm Giám sát an toàn không gian mạng quốc gia - National Cyber Security Center (NCSC)"
        }
      >
        <HeroLayout />
        <ContactLayout />
      </LayoutPage>
    </div>
  );
};

export default intro;
