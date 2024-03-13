import React from "react";
import { Breadcrumb } from "../../../common/Breadcrumb";
import { PendingOrderTable } from "@/constant/AllorderTable";
import { BaseTable } from "@/common/BaseTable";

export const PendingOrderPanel = () => {
  return (
    <>
      <Breadcrumb currentPage={"Pending Orders"} serachEnable />
      <BaseTable onTableData={PendingOrderTable} />
    </>
  );
};
