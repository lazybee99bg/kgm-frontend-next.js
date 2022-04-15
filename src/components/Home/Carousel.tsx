import Image from "next/image";
import Link from "next/link";
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
          <Link key={index} href={item.link} passHref>
            <a
              className="cursor-pointer single-about-us  flex items-center justify-center flex-col"
              target="_blank"
              rel="noreferrer"
            >
              <div className="icon">
                <Image src={item.icon} alt="JD" height={60} width={60} />
              </div>
              <h3>
                {item.label} <br />{" "}
              </h3>
              <p />
            </a>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
