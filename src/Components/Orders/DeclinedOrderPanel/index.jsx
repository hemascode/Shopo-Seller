import React from "react";
import { Breadcrumb } from "../../../common/Breadcrumb";
import { NoDataFound } from "@/common/NoDataFound";
export const DeclinedOrderPanel = () => {
  return (
    <>
      <Breadcrumb currentPage={"Declined Order"} serachEnable />
      <NoDataFound
        message={"No Data for Declined Orders"}
        messageContent={"please ensure everything is correct from your side"}
      />
    </>
  );
};
