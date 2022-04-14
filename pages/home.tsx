import Link from "next/link";
import React from "react";
import LayoutPage from "../src/common/LayoutPage";

const home = () => {
  return (
    <LayoutPage title="">
      <div className="home-content">
        <div className="">
          <Link href="https://cti.soc.gov.vn" passHref>
            <div className="single-why-choose-us">
              <div className="icon">
                <i className="flaticon-diamond" />
              </div>
              <h3>Hệ thống phân tích và chia sẻ nguy cơ tấn công mạng</h3>
            </div>
          </Link>
        </div>
      </div>
    </LayoutPage>
  );
};

export default home;
