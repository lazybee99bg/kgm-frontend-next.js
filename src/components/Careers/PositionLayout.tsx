import React from "react";
import Background from "./Background";
import Images from "./ImportImages";
import Button from "../../common/Button";
import ImageWrapper from "./ImageWrapper";

const PositionLayout = () => {
  const departments = [
    {
      name: "Phòng Kỹ thuật Nghiệp vụ",
      positions: [
        {
          image: Images["14-01.jpg"],
          name: "Sinh viên thực tập",
        },
        {
          image: Images["6-01.jpg"],
          name: "Chuyên viên đánh giá và kiểm thử an toàn thông tin",
        },
      ],
    },
    {
      name: "Phòng Điều tra phân tích và cảnh báo sớm",
      positions: [
        {
          image: Images["3-01.jpg"],
          name: "Phân tích thông tin và cảnh báo sớm",
        },
        {
          image: Images["5-01.jpg"],
          name: "PR & Marketing",
        },
        {
          image: Images["13-01.jpg"],
          name: "Hợp tác quốc tế về an toàn thông tin",
        },
      ],
    },
    {
      name: "Phòng Giám sát an toàn thông tin",
      positions: [
        {
          image: Images["1-01.jpg"],
          name: "Senior Giám sát an toàn thông tin",
        },
        {
          image: Images["2-01.jpg"],
          name: "Junior Giám sát an toàn thông tin",
        },
        {
          image: Images["4-01.jpg"],
          name: "Quản trị hệ thống",
        },
        {
          image: Images["15-01.jpg"],
          name: "Thực tập sinh Quản trị hệ thống",
        },
      ],
    },
    {
      name: "Phòng Nghiên cứu phát triển",
      positions: [
        {
          image: Images["7-01.jpg"],
          name: "Frontend Developer(Reactjs,HTML,CSS)",
        },
        {
          image: Images["8-01.jpg"],
          name: "Backend Developer(Python/Golang)",
        },
        {
          image: Images["9-01.jpg"],
          name: "Thực tập sinh lập trình",
        },
        {
          image: Images["10-01.jpg"],
          name: "Điều tra,phân tích và ứng cứu sự cố ATTT",
        },
        {
          image: Images["11-01.jpg"],
          name: "Mobile Developer(Flutter)",
        },
        {
          image: Images["12-01.jpg"],
          name: "Tester/BA",
        },
      ],
    },
  ];

  return (
    <div id="position-layout">
      <div className="container">
        <h1 className="my-10 text-center text-4xl font-bold">TUYỂN DỤNG</h1>
        {departments.map((department, index) => (
          <div key={index} className="w-full my-10 border-t-2">
            <h2 className="pt-5 pb-10 text-2xl font-bold">{department.name}</h2>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 grid-cols-1 gap-10">
              {department.positions.map((position, index) => (
                <div key={index}>
                  <div className="single-works">
                    <ImageWrapper image={position.image} />

                    <div className="works-content">
                      <Button
                        className="hover:bg-primary-400 hover:text-white"
                        href="mailto:ncsc@ais.gov.vn,nhansu@.ais.gov.vn"
                      >
                        Ứng tuyển ngay
                      </Button>
                    </div>
                  </div>
                  <h6 className="font-semibold">Vị trí : {position.name}</h6>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
      <Background />
    </div>
  );
};

export default PositionLayout;
