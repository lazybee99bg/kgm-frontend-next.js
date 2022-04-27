// import Image from "next/image";
import Image from "../Image";
import React, { useState } from "react";
import { Controlled as Zoom } from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";

type ImageWrapperProps = {
  image: any;
};
const ImageWrapper = ({ image }: ImageWrapperProps) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div
      onClick={() => {
        setIsOpen(!isOpen);
      }}
    >
      {isOpen && (
        <Zoom isZoomed={isOpen}>
          <div className={` w-96 h-96 md:px-8 lg:px-12 xl:px-16 px-1`}>
            <Image
              src={image}
              alt="JD"
              layout="responsive"
              objectFit="contain"
            />
          </div>
        </Zoom>
      )}

      <div className="relative image-wrapper cursor-pointer">
        <Image src={image} alt="JD" layout="responsive" objectFit="contain" />
      </div>
    </div>
  );
};

export default ImageWrapper;
