import React from "react";
import Background from "./Background";
import love from "../../../assets/images/love.png";
import Image from "next/image";
import bg from "../../../assets/images/background-office.jpeg";
const Banner = () => {
  return (
    <div className="relative h-[400px]">
      <div className="careers-banner"></div>
      <div className="absolute top-1/2 w-full">
        <div className="">
          <h1 style={{ color: "#fff" }}>
            Do what you
            <Image src={love} alt="Love" className="center img-responsive" />
            everyday
          </h1>
          <h5 style={{ color: "#fff" }}>
            Bạn có thích những gì chúng tôi đang và sẽ làm? <br />
            Nếu bạn muốn làm việc trong môi trường trẻ trung, sáng tạo và đóng
            góp cho nền an toàn thông tin nước nhà, <br /> đừng ngần ngại mà hãy
            gửi ngay CV cho chúng tôi.
            <br />
          </h5>
          {/* <Link activeClass="active" to="job-item" spy={true} smooth={true} duration={1500} > */}
          <button
            className="btn btn-warning "
            id="submit"
            style={{ marginTop: "10%" }}
            // onClick={}
          >
            <span>
              Ứng tuyển ngay{" "}
              <i className="fa fa-angle-down" aria-hidden="true"></i>
            </span>
          </button>
          {/* </Link> */}
        </div>
      </div>
      <Background />
    </div>
  );
};

export default Banner;
