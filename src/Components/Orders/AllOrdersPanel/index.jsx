import React, { useState } from "react";
import { Breadcrumb } from "../../../common/Breadcrumb";
import { AllorderTable } from "../../../constant/AllorderTable";
import { BaseTable } from "@/common/BaseTable";
import { OrdersApi } from "@/service/orders/get";
import { useQuery } from "react-query";
import { Popup } from "@/common/Popup";
import { DeleteItem } from "../../../common/Popup/DeleteItem";
import { PageHeader } from "@/common/PageHeader";
import { useRouter } from "next/router";

export const AllOrdersPanel = () => {
  const router = useRouter();
  const [openDeletePopup, setOpenDeletePopup] = useState(false);
  const { allOrders } = new OrdersApi();
  const { data } = useQuery("getAllOrders", allOrders);
  console.log(data, "data");

  const handleDeleteOrder = () => {
    setOpenDeletePopup(!openDeletePopup);
  };

  const handleNavigateOrder = (id) => {
    console.log(id, "id");
    router?.push(`/seller/show-order/${id}`);
  };

  return (
    <>
      <PageHeader title="All Orders" />
      <Breadcrumb currentPage={"All Orders"} serachEnable />
      <BaseTable
        onTableData={AllorderTable}
        handleDeleteOrder={handleDeleteOrder}
        handleNavigateOrder={handleNavigateOrder}
      />
      {openDeletePopup && (
        <Popup open={openDeletePopup} onClose={handleDeleteOrder}>
          <DeleteItem handleDeleteOrder={handleDeleteOrder} />
        </Popup>
      )}
    </>
  );
};
