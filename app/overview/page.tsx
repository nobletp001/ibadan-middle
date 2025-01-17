"use client";
import React, { useState } from "react";
import DashboardLayout from "@/components/DashboardLayout";
import RequestModal from "@/components/RequestModal";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import CustomInputFilter from "@/components/common/custonInpuFilter/customInputFilter";
import OverViewTable from "@/components/OverviewTable/OverviewTable";

const page = () => {
  const [selectedValue, setSelectedValue] = useState<string>("");
  const [isDropdownOpen, setDropdownOpen] = useState<boolean>(false);

  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedValue(e.target.value);
  };

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };
  const [searchQuery, setSearchQuery] = useState("");
  const [showModal, setShowModal] = useState<boolean>(false);

  return (
    <DashboardLayout>
      <div className="flex justify-between items-center my-5 border-gray-300 border p-6 h-auto ">
        {/* First Div */}
        <div className="flex items-center ">
          <div className="border-r border-gray-300  px-4">
            <h2 className="text-sm font-normal text-[#232323]">Assined</h2>
            <p className="text-lg mt-2 text-center font-bold text-[#252C32]">
              1,800
            </p>
          </div>
          <div className="border-r border-gray-300 px-4">
            <h2 className="text-sm font-normal text-[#232323]">Fulfilled</h2>
            <p className="text-lg mt-2 text-center font-bold text-[#252C32]">
              620
            </p>
          </div>
          <div className="border-r border-gray-300  px-4">
            <h2 className="text-sm font-normal text-[#232323]">Location</h2>
            <p className="text-lg mt-2 text-center font-bold text-[#252C32]">
              40+
            </p>
          </div>
        </div>

        {/* Second Div with Material-UI Select */}
        <div>
          <div className="relative inline-block text-left">
            {/* Styled select dropdown */}
            <select
              className="appearance-none w-48 bg-white border border-gray-300 hover:border-gray-500 px-4 py-2 max-w-32 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
              value={selectedValue}
              onChange={handleSelectChange}
              onClick={toggleDropdown}
              onBlur={() => setDropdownOpen(false)}
              onFocus={() => setDropdownOpen(true)}
            >
              <option value="option1">Option 1</option>
              <option value="option2">Option 2</option>
              <option value="option3">Option 3</option>
            </select>

            {/* Drop-down icon */}
            <div className="absolute right-0 top-2 flex items-center px-2 pointer-events-none">
              {isDropdownOpen ? <ArrowDropDownIcon /> : <ArrowDropUpIcon />}
            </div>
            {/* Up icon */}
          </div>
        </div>
      </div>
      <CustomInputFilter
        onChange={(value) => console.log("Input value:", value)}
        value=""
        w="100%" // Set the width as per your requirement
        placeholder={"Search by name or location"}
      />

      <RequestModal
        ID={"5146846548465D"}
        showModal={showModal}
        setShowModal={setShowModal}
      />
      <div>
        <OverViewTable />
      </div>
    </DashboardLayout>
  );
};

export default page;
