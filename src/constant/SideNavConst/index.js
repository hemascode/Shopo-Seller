import DashboardIcon from "@mui/icons-material/Dashboard";
import GradingIcon from "@mui/icons-material/Grading";
import ProductionQuantityLimitsIcon from "@mui/icons-material/ProductionQuantityLimits";
import InventoryIcon from "@mui/icons-material/Inventory";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import ContactMailIcon from "@mui/icons-material/ContactMail";
import GridViewIcon from "@mui/icons-material/GridView";

export const SideNavConst = {
  routes: [
    {
      heading: "Dashboard",
      url: "/",
      icon: <DashboardIcon sx={{ fontSize: 18 }} />,
    },
    {
      heading: "Order",
      icon: <GradingIcon sx={{ fontSize: 18 }} />,
      subRoutes: [
        {
          name: "All Orders",
          url: "/seller/all-orders",
        },
        {
          name: "Pending Orders",
          url: "/seller/pending-orders",
        },
        {
          name: "Progress Orders",
          url: "/seller/progress-orders",
        },
        {
          name: "Delivered Orders",
          url: "/seller/delivered-orders",
        },
        {
          name: "Completed Orders",
          url: "/seller/completed-orders",
        },
        {
          name: "Declined Orders",
          url: "/seller/declined-orders",
        },
        {
          name: "Cash On Delivery",
          url: "/seller/cash-on-delivery",
        },
      ],
    },
    {
      heading: "Manage Product",
      icon: <ProductionQuantityLimitsIcon sx={{ fontSize: 18 }} />,
      subRoutes: [
        {
          name: "Product Bulk Import",
          url: "/seller/product-bulk",
        },
        {
          name: "Create Product",
          url: "/seller/create-product",
        },
        {
          name: "Products",
          url: "/seller/products",
        },
        {
          name: "Stock Out",
          url: "/seller/stock-out",
        },
        {
          name: "Awaiting For Approval",
          url: "/seller/awaiting-approval",
        },
        {
          name: "Products Review",
          url: "/seller/products-review",
        },
        {
          name: "Products Report",
          url: "/seller/products-report",
        },
      ],
    },
    {
      heading: "Inventory",
      icon: <InventoryIcon sx={{ fontSize: 18 }} />,
      url: "/seller/inventory",
    },
    {
      heading: "My Withdraw",
      icon: <AttachMoneyIcon sx={{ fontSize: 18 }} />,
      url: "/seller/my-widthdraw",
    },
    {
      heading: "Message",
      icon: <ContactMailIcon sx={{ fontSize: 18 }} />,
      url: "/seller/message",
    },
    {
      heading: "Visit User Dashboard",
      icon: <GridViewIcon sx={{ fontSize: 18 }} />,
      url: "/",
    },
  ],
};
