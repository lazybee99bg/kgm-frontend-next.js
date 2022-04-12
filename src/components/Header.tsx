import Image from "next/image";
import React from "react";
import logo from "../../assets/images/logo_NCSC.png";
import Button from "../common/Button";

const Header = () => {
  const headerEl = [
    {
      title: "Trang chủ",
      link: "/home",
      element: [],
    },
    {
      title: "Công cụ",
      link: "",
      element: [
        {
          name: "Công cụ kiểm tra lỗ hổng ProxyNotFound",
          link: "https://congcu.khonggianmang.vn/check-proxynotfound",
        },
        {
          name: "Công cụ kiểm tra lỗ hổng ProxyLogon",
          link: "https://congcu.khonggianmang.vn/check-proxylogon",
        },
        {
          name: "Chiến dịch rà quét mã độc",
          link: "https://congcu.khonggianmang.vn/chien-dich-ncsc",
        },
        {
          name: "Kiểm tra mạng máy tính ma",
          link: "https://congcu.khonggianmang.vn/check-ipma",
        },
        {
          name: "Kiểm tra lộ lọt thông tin tài khoản cá nhân",
          link: "https://congcu.khonggianmang.vn/check-data-leak",
        },
        {
          name: "Giải mã, nhận diện mã độc tống tiền",
          link: "https://congcu.khonggianmang.vn/ransomware",
        },
        {
          name: "Kho tri thức về tấn công có chủ đích",
          link: "https://congcu.khonggianmang.vn/apt",
        },
      ],
    },
    {
      title: "Giải pháp",
      link: "",
      element: [
        {
          name: "Hệ thống Bug Bounty & Vulnerability Disclosure",
          link: "https://bugbounty.vn",
        },
        {
          name: "https://service.khonggianmang.vn",
          link: "Hệ thống cảnh báo điểm yếu và rà soát lỗ hổng bảo mật tự động",
        },
        {
          name: "Hệ thống gán nhãn Website Tín nhiệm mạng",
          link: "https://tinnhiemmang.vn",
        },
        {
          name: "Hệ thống phân tích và chia sẻ nguy cơ tấn công mạng",
          link: "https://cti.soc.gov.vn",
        },
        {
          name: "Open API (Coming soon)",
          link: "#",
        },
      ],
    },
    {
      title: "Cảnh báo ATTT",
      link: "/canhbaotuan",
      element: [],
    },
    {
      title: "Blog",
      link: "https://blog.khonggianmang.vn",
      element: [],
    },
    {
      title: "Liên hệ",
      link: "/intro",
      element: [],
    },
    {
      title: "Tuyển dụng",
      link: "/careers",
      element: [],
    },
  ];
  return (
    <div className="">
      <header>
        <div className="w-full py-0.5 bg-gray-100 font-light text-left md:text-md text-xs text-gray-500 hover:text-red-500">
          <div className="container">
            <a
              href="https://mic.gov.vn/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Bộ Thông tin và Truyền thông - Chương trình Chuyển đổi số Quốc gia
            </a>
          </div>
        </div>

        <div className="container">
          <div className="flex flex-row justify-between">
            <a href="/home" className="relative w-40 h-20">
              <Image src={logo} alt="logo" layout="fill" objectFit="contain" />
            </a>
            <div className="px-6 flex flex-row items-center justify-between font-semibold text-base text-primary-200">
              {headerEl.map((item, index) => (
                <div key={index} className="m-5">
                  {item.link ? (
                    <a href={item.link} className="hover:text-primary-400">
                      {item.title}
                    </a>
                  ) : (
                    <div>
                      <span className="hover:text-primary-400 cursor-pointer">
                        {item.title}
                      </span>
                      {item.element.map((element, index) => (
                        <div key={index} className="hidden">
                          {element.name}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
            <div className="flex items-center">
              <Button className="hover:bg-primary-500">Báo NCSC</Button>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
