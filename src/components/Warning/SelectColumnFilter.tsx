import React from "react";

type SelectColumnFilter = {
  setFilter: any;
};

const SelectColumnFilter = ({ setFilter }: SelectColumnFilter) => {
  const options = [
    {
      id: "",
      value: "Toàn bộ",
    },
    {
      id: "canhbaotuan",
      value: "Cảnh báo tuần",
    },
    {
      id: "baocaothang",
      value: "Báo cáo tháng",
    },
    {
      id: "canhbaodienrong",
      value: "Cảnh báo diện rộng",
    },
  ];

  return (
    <select
      className="px-5 py-2 rounded-lg shadow"
      onChange={(e) => {
        setFilter("typeAlert", e.target.value);
      }}
    >
      {options.map((option, i) => (
        <option key={i} value={option.id}>
          {option.value}
        </option>
      ))}
    </select>
  );
};

export default SelectColumnFilter;
