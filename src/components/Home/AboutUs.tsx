import React from "react";
import { CheckIcon } from "@heroicons/react/solid";
import Link from "next/link";
import MovingDot from "../../common/MovingDot";
import Image from "next/image";
import key_solution from "../../../assets/images/key-solution.gif";

const AboutUs = () => {
  const quotes = [
    "Thực hiện chức năng giám sát an toàn thông tin trên toàn bộ không gian mạng Việt Nam; thiết lập mạng lưới giám sát an toàn thông tin mạng trên toàn quốc.",
    "Đầu mối tập trung về mặt kỹ thuật, chỉ đạo các doanh nghiệp cung cấp dịch vụ viễn thông, Internet (ISP) thực hiện các hoạt động, nhiệm vụ bảo đảm an toàn, an ninh mạng.",
    "Thu thập thông tin, tổng hợp, phân tích, theo dõi và dự báo, cảnh báo sớm xu hướng về các hoạt động, diễn biến trên không gian mạng Việt Nam.",
    "Đầu mối tiếp nhận, chia sẻ thông tin với các tổ chức quốc tế và giữa các cơ quan, tổ chức tại Việt Nam; thu thập thông tin, phân tích, đánh giá, trao đổi, cung cấp thông tin, tài liệu về tình hình an toàn thông tin trong nước và quốc tế.",
    "Quản lý, vận hành các hệ thống số liệu, cơ sở dữ liệu về an toàn thông tin, hệ thống kỹ thuật bảo đảm an toàn thông tin mạng quốc gia phục vụ công tác quản lý nhà nước và thực thi pháp luật về an toàn thông tin tại Việt Nam.",
  ];

  const cards = [
    {
      link: "https://bugbounty.vn",
      content: "flaticon-team",
      title: "Hệ thống Bug Bounty & Vulnerability Disclosure",
    },
    {
      link: "https://tinnhiemmang.vn",
      content: "flaticon-rocket",
      title: "Hệ thống gắn nhãn Website Tín nhiệm mạng",
    },
    {
      link: "https://service.khonggianmang.vn",
      content: "flaticon-shield",
      title: "Hệ thống cảnh báo điểm yếu và rà soát lỗ hổng bảo mật tự động",
    },
    {
      link: "https://cti.soc.gov.vn",
      content: "flaticon-diamond",
      title: "Hệ thống phân tích và chia sẻ nguy cơ tấn công mạng",
    },
  ];

  return (
    <div className="home-content bg-white">
      <div className="about-us">
        <div className="container">
          {/* Start AboutUs */}
          <section className="flex flex-col items-center justify-center py-10">
            <div className="w-full">
              <h2 className="text-3xl font-semibold text-left">
                Về Trung tâm Giám sát an toàn không gian mạng quốc gia (NCSC)
              </h2>
              <MovingDot width={"w-24 my-4"} />
            </div>
            <p className="text-xl font-semibold text-justify">
              Trung tâm Giám sát an toàn không gian mạng quốc gia (National
              Cyber Security Center - NCSC) có chức năng giám sát trung tâm, là
              đầu mối kỹ thuật về giám sát, hỗ trợ bảo đảm ATTT cho người dân,
              doanh nghiệp và các hệ thống thông tin của Đảng, Nhà nước theo quy
              định của pháp luật:
            </p>
            <div className="grid md:grid-cols-2 grid-cols-1 gap-4 my-2">
              {quotes.map((quote, index) => (
                <span key={index} className="text-sm font-normal text-justify ">
                  <CheckIcon className="w-6 text-green-500 inline-block" />
                  {quote}
                </span>
              ))}
              <div className="w-fit h-fit cursor-pointer text-xl text-blue-400 hover:text-blue-500">
                <Link
                  href="https://vanban.chinhphu.vn/default.aspx?pageid=27160&docid=195397"
                  passHref
                >
                  {"Tìm hiểu thêm"}
                </Link>
              </div>
            </div>
          </section>
          {/* End AboutUs */}
          <div className="w-full">
            <h2 className="text-3xl font-semibold text-left">Giải pháp </h2>
            <MovingDot width={"w-24 my-4"} />
          </div>
          <div className="flex lg:flex-row flex-col justify-between">
            <div className="about-us-image">
              <Image
                // src="assets/img/about-us-image/key-solution.gif"
                src={key_solution}
                alt="image"
              />
            </div>
            <div className="grid sm:grid-cols-2 grid-cols-1 auto-cols-max gap-10">
              {cards.map((card, index) => (
                <div className={`cursor-pointer sm:w-64 w-auto`} key={index}>
                  <Link href={card.link} passHref>
                    <div className="single-about-us h-56">
                      <div className="icon">
                        <i className={card.content} />
                      </div>
                      <h3>{card.title}</h3>
                    </div>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
