import React from "react";
import MovingDot from "../../common/MovingDot";
import importAll from "../../common/importAll";
import Image from "next/image";
import { PlusCircleIcon } from "@heroicons/react/outline";

const Partners = () => {
  const Images = importAll(
    require.context(
      "../../../assets/images/partner",
      false,
      /\.(png|jpe?g|svg)$/
    )
  );

  const partners = [
    {
      logo: Images["logo-new-ncsc.png"],
    },
    {
      logo: Images["logo-bkav.png"],
    },
    {
      logo: Images["logo-fpt.png"],
    },
    {
      logo: Images["logo-cmc.png"],
    },
    {
      logo: Images["logo-vnisa.png"],
    },
    {
      logo: Images["logo-viettel.png"],
    },
    {
      logo: Images["logo-vnpt.png"],
    },
  ];
  return (
    <div className="home-content">
      <div className="container">
        <div className="flex flex-col items-center justify-center py-10">
          <h1 className="text-3xl font-semibold text-center">
            Bạn cần hỗ trợ?
          </h1>
          <MovingDot width={"w-24 my-5"} />
          <p className="text-base font-light text-justify tracking-wide">
            {`Khi cần hỗ trợ về ATTT, bạn có thể liên hệ với các tổ chức trong
            liên minh phòng chống mã độc và xử lý tấn công mạng. NCSC là đơn vị
            trung tâm thúc đẩy liên minh phòng chống mã độc xử lý tấn công
            mạng. Cùng nhau bảo vệ tài sản của cơ quan, tổ chức và người dân
            Việt Nam trước các nguy cơ tấn công mạng với mục tiêu "Giảm tỉ lệ lây nhiễm mã độc tại Việt
            Nam, góp phần đưa Việt Nam trở thành quốc gia có môi trường mạng an
            toàn, tin cậy".`}
          </p>

          <div className="w-full grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 grid-cols-1 gap-4">
            {partners.map((item: any, index: React.Key | null | undefined) => (
              <div
                className="single-about-us flex items-center justify-center cursor-pointer"
                key={index}
              >
                <Image
                  src={item.logo}
                  width={220}
                  height={150}
                  alt="Loading..."
                  // layout="responsive"
                  objectFit="contain"
                />
              </div>
            ))}
            <div className="single-about-us flex items-center justify-center cursor-pointer">
              {/* <Image
                src={Images["icon-plus.png"]}
                width={220}
                height={100}
                alt="Loading..."
                // layout="responsive"
                objectFit="contain"
              /> */}
              <PlusCircleIcon className="w-20" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Partners;
