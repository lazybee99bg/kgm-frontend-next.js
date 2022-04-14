import Image from "next/image";
import React from "react";
import shape1 from "../../../assets/images/shape1.png";
import shape2 from "../../../assets/images/shape2.svg";
import shape3 from "../../../assets/images/shape3.svg";
import shape4 from "../../../assets/images/shape4.svg";
import shape5 from "../../../assets/images/shape5.png";

const Background = () => {
  return (
    <div className="careers-layout">
      <div className="shape1">
        {/* <img src="assets/img/shape1.png" alt="shape" /> */}
        <Image src={shape1} alt="shape" />
      </div>
      <div className="shape2 rotateme">
        <Image src={shape2} alt="shape" />
      </div>
      <div className="shape3">
        <Image src={shape3} alt="shape" />
      </div>
      <div className="shape4">
        <Image src={shape4} alt="shape" />
      </div>
      <div className="shape5">
        <Image src={shape5} alt="shape" />
      </div>
      <div className="shape6 rotateme">
        <Image src={shape4} alt="shape" />
      </div>
      <div className="shape7">
        <Image src={shape4} alt="shape" />
      </div>
      <div className="shape8 rotateme">
        <Image src={shape2} alt="shape" />
      </div>
    </div>
  );
};

export default Background;
