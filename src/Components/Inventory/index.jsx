import { Breadcrumb } from "@/common/Breadcrumb";
import { PageHeader } from "@/common/PageHeader";

export const Inventory = () => {
  return (
    <>
      <PageHeader title="Inventory" />
      <Breadcrumb currentPage={"Inventory"} serachEnable />
    </>
  );
};
