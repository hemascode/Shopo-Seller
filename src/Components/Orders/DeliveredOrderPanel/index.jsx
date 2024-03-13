import React from "react";
import { Breadcrumb } from "../../../common/Breadcrumb";
import { DeliveredOrderTable } from "@/constant/AllorderTable";
import { BaseTable } from "@/common/BaseTable";

export const DeliveredOrderPanel = () => {
  return (
    <>
      <Breadcrumb currentPage={"Delivered Order"} serachEnable />
      <BaseTable onTableData={DeliveredOrderTable} />
    </>
  );
};
