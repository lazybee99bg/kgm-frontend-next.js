import Image from "next/image";
import Link from "next/link";
import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../../assets/images/logo_NCSC_white.png";

const Footer = () => {
  const footerEl = [
    {
      title: "NCSC",
      element: [
        {
          name: "Giới thiệu",
          link: "/intro",
        },
        {
          name: "Công cụ",
          link: "/",
        },
        {
          name: "Giải pháp",
          link: "/",
        },
        {
          name: "Tuyển dụng",
          link: "/careers",
        },
        {
          name: "Dịch vụ",
          link: "https://service.khonggianmang.vn",
        },
        {
          name: "Blog",
          link: "https://blog.khonggianmang.vn",
        },
      ],
    },
    {
      title: "Hỗ trợ",
      element: [
        {
          name: "Điều khoản bảo mật",
          link: "/privacy",
        },
        {
          name: "Cảnh báo lỗ hổng đối với các hệ thống của NCSC, AIS, MIC",
          link: "https://bugrank.io/user/NCSC/policy",
        },
        {
          name: "Gửi cảnh báo bảo mật tới các cơ quan, tổ chức khác tại Việt Nam",
          link: "https://bugrank.io/user/NCSC/policy",
        },
        {
          name: "Báo cáo bị tấn công mạng",
          link: "mailto:ncsc@ais.gov.vn",
        },
      ],
    },
    {
      title: "Cổng không gian mạng",
      element: [
        {
          name: "Trung tâm Giám sát an toàn không gian mạng quốc gia",
          link: "",
        },
        {
          name: "Tầng 16 Tòa nhà Cục tần số, 115 Trần Duy Hưng, Hà Nội, Việt Nam",
          link: "",
        },
        {
          name: "Email: ncsc@ais.gov.vn",
          link: "mailto:ncsc@ais.gov.vn",
        },
        {
          name: "Phone: 0243 209 1616",
          link: "tel:+84-243-209-1616",
        },
        {
          name: "Facebook: https://facebook.com/govSOC",
          link: "https://www.facebook.com/govSOC",
        },
      ],
    },
  ];
  return (
    <div>
      {/* Start Footer Area */}
      <footer className="w-full bg-primary-900">
        <div className="container">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 grid-cols-1 justify-between py-10">
            {footerEl.map((item, index) => (
              <div key={index} className="flex flex-col items-start px-5 py-10">
                {/* title */}
                <h3 className="flex flex-row items-center text-white mb-8">
                  <span className="absolute text-7xl font-medium opacity-25">
                    {item.title.charAt(0).toUpperCase()}
                  </span>
                  <span className="lg:text-lg text-base">
                    &nbsp;&nbsp;&nbsp;&nbsp;{item.title}
                  </span>
                </h3>
                {/* element */}
                <ul>
                  {item.element.map((element, index) => (
                    <li
                      key={index}
                      className="flex flex-col py-2 font-normal lg:text-base text-sm text-primary-300"
                    >
                      {element.link ? (
                        <a
                          href={element.link}
                          //   target="_blank"
                          rel="noopener noreferrer"
                          className="transition hover:translate-x-1 hover:text-white"
                        >
                          <span>{element.name}</span>
                        </a>
                      ) : (
                        <span>{element.name}</span>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
            <div className=" w-fill flex md:flex-col flex-row lg:items-end items-start px-5 lg:mt-10 mt-5">
              <Link href="/home" passHref>
                <div className="relative lg:w-40 w-36 h-24 cursor-pointer">
                  <Image
                    src={logo}
                    alt="logo"
                    layout="fill"
                    objectFit="contain"
                  />
                </div>
              </Link>
              <a
                href="https://tinnhiemmang.vn/danh-ba-tin-nhiem/khonggianmangvn"
                target="_blank"
                rel="noreferrer"
                className="relative lg:w-40 w-36 h-24 mt-5"
              >
                <Image
                  src="https://tinnhiemmang.vn/storage/photos/shares/Configs/LabelTrust/web_premium.png"
                  alt="Tín nhiệm mạng"
                  layout="fill"
                  objectFit="contain"
                />
              </a>
            </div>
          </div>
          <div className="w-full border-t-[0.2px] py-6">
            <a
              className="text-gray-200 font-extralight text-sm"
              href="https://khonggianmang.vn"
            >
              Copyright © 2022 Trung tâm Giám sát an toàn không gian mạng quốc
              gia
            </a>
          </div>
        </div>
      </footer>
      {/* End Footer Area */}
    </div>
  );
};

export default Footer;
