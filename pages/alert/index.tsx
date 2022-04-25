import type { NextPage } from "next";
import { useEffect } from "react";
import { useRouter } from "next/router";
import LayoutPage from "../../src/common/LayoutPage";

const Alert: NextPage = () => {
  const router = useRouter();
  useEffect(() => {
    router.push("/");
  });
  return (
    <div>
      <LayoutPage title="An toàn trên không gian mạng - Trang chủ"></LayoutPage>
    </div>
  );
};

export default Alert;
