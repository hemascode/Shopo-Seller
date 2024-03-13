import React from "react";
import { Breadcrumb } from "../../../common/Breadcrumb";
import { CompletedOrderTable } from "@/constant/AllorderTable";
import { BaseTable } from "@/common/BaseTable";

export const CompletedOrderPanel = () => {
  return (
    <>
      <Breadcrumb currentPage={"Completed Order"} serachEnable />
      <BaseTable onTableData={CompletedOrderTable} />
    </>
  );
};
