import React from "react";
import MovingDot from "../../common/MovingDot";
import {
  MailIcon,
  LocationMarkerIcon,
  PhoneIcon,
} from "@heroicons/react/solid";

const ContactLayout = () => {
  const contactInfo = [
    {
      Icon: <MailIcon className="w-8" />,
      title: "Thư điện tử :",
      content: <a href="mailto:ncsc@ais.gov.vn">ncsc@ais.gov.vn</a>,
    },
    {
      Icon: <LocationMarkerIcon className="w-8" />,
      title: "Địa chỉ :",
      content: (
        <a
          href="https://goo.gl/maps/cA19Mnorb9XER9f1A"
          target="_blank"
          rel="noopener noreferrer"
        >
          Tầng 16 Tòa nhà Cục tần số, 115 Trần Duy Hưng, Hà Nội, Việt Nam
        </a>
      ),
      // "Tầng 16 Tòa nhà Cục tần số, 115 Trần Duy Hưng, Hà Nội, Việt Nam",
    },
    {
      Icon: <PhoneIcon className="w-8" />,
      title: "Điện thoại hỗ trợ :",
      content: <a href="tel:+84-243-209-1616">(+84) 24 3209 6789</a>,
    },
  ];

  return (
    <div className="container">
      <div className="flex flex-col items-center justify-center py-10">
        <h1 className="text-3xl font-semibold text-center">Liên hệ</h1>
        <MovingDot width={"w-24"} />

        <div className="grid md:grid-cols-3 grid-cols-1 gap-10 my-5">
          {contactInfo.map((item, index) => (
            <div
              key={index}
              className="contact-info-box flex flex-col items-center justify-center px-10 h-64 bg-white text-center"
            >
              <div className="icon rounded-full p-4">{item.Icon}</div>
              <h3 className="my-6 text-black">{item.title}</h3>
              <p className="text-primary-300">{item.content}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ContactLayout;
