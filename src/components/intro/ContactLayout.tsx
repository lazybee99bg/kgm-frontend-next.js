import React from "react";
import MovingDot from "../../common/MovingDot";
// import { MailIcon } from "@heroicons/react/outline";
import {
  MailIcon,
  LocationMarkerIcon,
  PhoneIcon,
} from "@heroicons/react/solid";

const ContactLayout = () => {
  const contactinfo = [
    {
      Icon: <MailIcon className="w-8" />,
      title: "Thư điện tử :",
      content: <a href="mailto:ncsc@ais.gov.vn">ncsc@ais.gov.vn</a>,
    },
    {
      Icon: <LocationMarkerIcon className="w-8" />,
      title: "Địa chỉ :",
      content:
        "Tầng 16 Tòa nhà Cục tần số, 115 Trần Duy Hưng, Hà Nội, Việt Nam",
    },
    {
      Icon: <PhoneIcon className="w-8" />,
      title: "Thư điện tử :",
      content: "Tầng 5, Tòa nhà Công ty Cổ phần Không gian Mạng",
    },
  ];

  return (
    <div className="container">
      <div className="flex flex-col items-center justify-center py-10">
        <h1 className="text-3xl font-semibold text-center">Liên hệ</h1>
        <MovingDot width={"w-24"} />

        <div className="grid md:grid-cols-3 grid-cols-1 gap-10 my-5">
          {contactinfo.map((item, index) => (
            <div
              key={index}
              className="transition hover:-translate-y-2 duration-500 card-transition flex flex-col items-center justify-center px-10 h-64 bg-white text-center"
            >
              <div className="icon rounded-full p-4">{item.Icon}</div>
              <span className="my-6 text-black">{item.title}</span>
              <span className="text-primary-300">{item.content}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ContactLayout;
