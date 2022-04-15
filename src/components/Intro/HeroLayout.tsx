import React from "react";
import { CheckIcon } from "@heroicons/react/solid";
import Link from "next/link";
import MovingDot from "../../common/MovingDot";

const HeroLayout = () => {
  const elements = [
    "Thực hiện chức năng giám sát an toàn thông tin trên toàn bộ không gian mạng Việt Nam; thiết lập mạng lưới giám sát an toàn thông tin mạng trên toàn quốc.",
    "Đầu mối tập trung về mặt kỹ thuật, chỉ đạo các doanh nghiệp cung cấp dịch vụ viễn thông, Internet (ISP) thực hiện các hoạt động, nhiệm vụ bảo đảm an toàn, an ninh mạng.",
    "Thu thập thông tin, tổng hợp, phân tích, theo dõi và dự báo, cảnh báo sớm xu hướng về các hoạt động, diễn biến trên không gian mạng Việt Nam.",
    "Đầu mối tiếp nhận, chia sẻ thông tin với các tổ chức quốc tế và giữa các cơ quan, tổ chức tại Việt Nam; thu thập thông tin, phân tích, đánh giá, trao đổi, cung cấp thông tin, tài liệu về tình hình an toàn thông tin trong nước và quốc tế.",
    "Quản lý, vận hành các hệ thống số liệu, cơ sở dữ liệu về an toàn thông tin, hệ thống kỹ thuật bảo đảm an toàn thông tin mạng quốc gia phục vụ công tác quản lý nhà nước và thực thi pháp luật về an toàn thông tin tại Việt Nam.",
  ];
  return (
    <div className="container">
      <div className="flex flex-col items-center justify-center py-10">
        <h1 className="text-3xl font-semibold text-center">
          Giới thiệu về NCSC
        </h1>
        <MovingDot width={"w-24"} />
        <p className="text-xl font-semibold text-justify">
          Trung tâm Giám sát an toàn không gian mạng quốc gia (National Cyber
          Security Center - NCSC) có chức năng giám sát trung tâm, là đầu mối kỹ
          thuật về giám sát, hỗ trợ bảo đảm ATTT cho người dân, doanh nghiệp và
          các hệ thống thông tin của Đảng, Nhà nước theo quy định của pháp luật:
        </p>
        <div className="grid md:grid-cols-2 grid-cols-1 gap-4 my-5">
          {elements.map((element, index) => (
            <span key={index} className="text-sm font-normal text-justify ">
              <CheckIcon className="w-6 text-green-500 inline-block" />
              {element}
            </span>
          ))}
          <Link
            href="https://vanban.chinhphu.vn/default.aspx?pageid=27160&docid=195397"
            passHref
          >
            <a
              target="_blank"
              rel="noreferrer"
              className="w-fit h-fit cursor-pointer text-xl text-blue-400 hover:text-blue-500"
            >
              {"Tìm hiểu thêm"}
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HeroLayout;
