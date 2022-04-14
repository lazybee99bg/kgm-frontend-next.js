import React from "react";
import Background from "./Background";
import love from "../../../assets/images/love.png";
import Image from "next/image";
import bg from "../../../assets/images/background-office.jpeg";
import Button from "../../common/Button";
const Banner = () => {
  return (
    <div className="">
      <div className="careers-banner">
        <div className="flex flex-col items-center justify-center py-8 tracking-wide font-semibold text-center text-white">
          <h1 className="text-4xl">
            Do what you
            <br />
            <Image src={love} alt="Love" />
            <br />
            everyday
          </h1>
          <h5 className=" text-lg py-8">
            Bạn có thích những gì chúng tôi đang và sẽ làm? <br />
            Nếu bạn muốn làm việc trong môi trường trẻ trung, sáng tạo và đóng
            góp cho nền an toàn thông tin nước nhà, <br /> đừng ngần ngại mà hãy
            gửi ngay CV cho chúng tôi.
            <br />
          </h5>
          {/* <Link activeClass="active" to="job-item" spy={true} smooth={true} duration={1500} > */}
          <Button
            scrollTo="position-layout"
            className="bg-yellow-500 hover:bg-primary-400 text-black hover:text-white px-10"
          >
            ỨNG TUYỂN NGAY
          </Button>
        </div>
      </div>
      <Background />
    </div>
  );
};

export default Banner;
