"use client";
import React, { useState } from "react";
import DashboardLayout from "@/components/DashboardLayout";
import CustomInputFilter from "@/components/common/custonInpuFilter/customInputFilter";
import CustomAddButton from "@/components/common/customAddButton/customAddButton";
import LocationTable from "@/components/LocationTable/LocationTable";

const page = () => {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <DashboardLayout>
      <div className="flex w-full gap-3  items-center justify-between">
        <CustomInputFilter
          onChange={(value) => console.log("Input value:", value)}
          value=""
          w="85%" // Set the width as per your requirement
          placeholder={"Search by name or location"}
        />
        <CustomAddButton text="Add" onClick={() => {}} h="3rem" w="111.26px" />
      </div>
      <div>
        <LocationTable />
      </div>
    </DashboardLayout>
  );
};

export default page;
