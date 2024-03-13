import React from "react";
import { Breadcrumb } from "../../../common/Breadcrumb";
import { NoDataFound } from "@/common/NoDataFound";

export const ProgressOrderPanel = () => {
  return (
    <>
      <Breadcrumb currentPage={"Progress Orders"} serachEnable />
      <NoDataFound
        message={"No Data for Progress Orders"}
        messageContent={"please ensure everything is correct from your side"}
      />
    </>
  );
};
