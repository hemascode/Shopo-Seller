import React from "react";
import { Breadcrumb } from "../../../common/Breadcrumb";
import { CashOnDeliveryOrderTable } from "@/constant/AllorderTable";
import { BaseTable } from "@/common/BaseTable";

export const CashOnDeliveryPanel = () => {
  return (
    <>
      <Breadcrumb currentPage={"Cash On Delivery"} serachEnable />
      <BaseTable onTableData={CashOnDeliveryOrderTable} />
    </>
  );
};
