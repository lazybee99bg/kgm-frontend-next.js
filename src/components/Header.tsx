import Image from "next/image";
import React, { useState } from "react";
import logo from "../../assets/images/logo_NCSC.png";
import Button from "../common/Button";
import { MenuIcon } from "@heroicons/react/solid";
import Link from "next/link";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
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
          name: "Hệ thống cảnh báo điểm yếu và rà soát lỗ hổng bảo mật tự động",
          link: "https://service.khonggianmang.vn",
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
    <div className="header bg-white">
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
          <div className="flex lg:flex-row flex-col justify-between">
            <div className="flex flex-row items-center justify-between">
              <Link href="/" passHref>
                <div className="cursor-pointer relative w-40 h-20">
                  <Image
                    src={logo}
                    alt="logo"
                    layout="fill"
                    objectFit="contain"
                  />
                </div>
              </Link>
              <div
                className="cursor-pointer lg:hidden block"
                onClick={() => setIsOpen(!isOpen)}
              >
                <MenuIcon className="w-10" />
              </div>
            </div>
            <div
              className={`collapsible lg:p-6 p-2 flex lg:flex-row flex-col lg:items-center items-start justify-between font-semibold text-base text-primary-200 bg-white
              ${isOpen ? "lg:h-auto h-[560px]" : "h-0 lg:h-auto"}`}
            >
              {headerEl.map((item, index) => (
                <div key={index} className="lg:m-5 my-5">
                  {item.link ? (
                    <a href={item.link} className="hover:text-primary-400">
                      {item.title}
                    </a>
                  ) : (
                    <div className="dropdown">
                      <span className="hover:text-primary-400 cursor-pointer font-base flex items-center">
                        {item.title}
                        <svg
                          className="lg:hidden block ml-1 w-4 h-4"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M19 9l-7 7-7-7"
                          ></path>
                        </svg>
                      </span>
                      <div className="dropdown-menu invisible translate-y-4 absolute z-10 w-56 rounded shadow bg-white">
                        <ul className="">
                          {item.element.map((element, index) => (
                            <li key={index} className="mx-2 my-4">
                              <a
                                href={element.link}
                                className="hover:text-primary-400"
                              >
                                {element.name}
                              </a>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  )}
                </div>
              ))}
              <div className="lg:hidden flex items-center">
                <Button
                  href="https://canhbao.ncsc.gov.vn/"
                  className="hover:bg-primary-500"
                >
                  Báo NCSC
                </Button>
              </div>
            </div>
            <div className="lg:flex hidden items-center">
              <Button
                href="https://canhbao.ncsc.gov.vn/"
                className="hover:bg-primary-500"
              >
                Báo NCSC
              </Button>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
