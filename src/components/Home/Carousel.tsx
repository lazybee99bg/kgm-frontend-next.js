import Image from "next/image";
import React from "react";

type CarouselProps = {
  title: string;
  data: any;
};

const Carousel = ({ title, data }: CarouselProps) => {
  return (
    <div>
      <h1 className="mt-10 text-left text-4xl font-bold">{title}</h1>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 grid-cols-1 gap-4">
        {data.map((item: any, index: React.Key | null | undefined) => (
          <div className="cursor-pointer" key={index}>
            <div
              onClick={() => window.open(item.link)}
              className="single-about-us header-webbox flex items-center justify-center flex-col"
            >
              <div className="icon">
                {/* <img height={60} width={60} className="mb-3" src={item.icon} /> */}
                <Image src={item.icon} alt="JD" height={60} width={60} />
              </div>
              <h3>
                {item.label} <br />{" "}
              </h3>
              <p />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
