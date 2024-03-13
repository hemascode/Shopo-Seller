import { BaseTable } from "@/common/BaseTable";
import { Breadcrumb } from "@/common/Breadcrumb";
import Image from "next/image";

export const ShowOrdersInvoice = ({ orderDetails }) => {
  console.log(orderDetails, "orderDetails");
  return (
    <>
      <Breadcrumb currentPage="Invoice" />
      <div className="container-fluid py-4">
        <div className="card">
          <div class="card-body p-3">
            <div className="flex align-item-center justify-content-sb flex-wrap mx-4">
              <Image
                className="InvoiceWrapperImage mb-3 "
                src="/assets/img/logos/globogreenlogo.png"
                width={180}
                height={80}
                objectFit="contain"
                alt="globogreenlogo"
              />
              <p className="text-lg fw-bolder color-6c757d mb-1">
                Order #{orderDetails?.order_id}
              </p>
            </div>
            <div className="mx-lg-4 mt-2">
              <h6>Billing Address : </h6>
              <p className="mb-1">
                {orderDetails?.order_address?.billing_name}
              </p>
              <p className="mb-1">
                {orderDetails?.order_address?.billing_email}
              </p>
              <p className="mb-1">
                {orderDetails?.order_address?.billing_phone}
              </p>
              <p className="mb-0">
                {orderDetails?.order_address?.billing_address},{" "}
                {orderDetails?.order_address?.billing_city},
              </p>
              <p className="mb-0">
                {orderDetails?.order_address?.billing_state},{" "}
                {orderDetails?.order_address?.billing_country}
              </p>
            </div>
            <div className="mt-4 mx-lg-4">
              <h6>Shipping Address : </h6>
              <p className="mb-1">
                {orderDetails?.order_address?.shipping_name}
              </p>
              <p className="mb-1">
                {orderDetails?.order_address?.shipping_email}
              </p>
              <p className="mb-1">
                {orderDetails?.order_address?.shipping_phone}
              </p>
              <p className="mb-0">
                {orderDetails?.order_address?.shipping_address},{" "}
                {orderDetails?.order_address?.shipping_city},
              </p>
              <p className="mb-0">
                {orderDetails?.order_address?.shipping_state},{" "}
                {orderDetails?.order_address?.shipping_country}
              </p>
            </div>

            <div className="flex align-item-center justify-content-sb flex-wrap">
              <div className="mx-lg-4 mt-3">
                <h6>Payment Information : </h6>
                <p className="mb-1">Method: {orderDetails?.payment_method}</p>
                <p className="mb-1">
                  Status :{" "}
                  <span
                    className={
                      orderDetails?.payment_status === 1
                        ? "text-success text-xxs font-weight-bold badge badge-xxs  status-success"
                        : "text-warning text-xxs font-weight-bold badge badge-xxs  status-pending"
                    }
                  >
                    Success
                  </span>
                </p>
                <p className="mb-1">
                  Transaction: {orderDetails?.payment_method}
                </p>
              </div>
              <div className="mt-4 mx-lg-4">
                <h6>Order Information : </h6>
                <p className="mb-1">
                  Date: {orderDetails?.order_delivered_date}
                </p>
                <p className="mb-1">
                  Shipping: {orderDetails?.shipping_method}
                </p>
                <p className="mb-1">
                  Status:{" "}
                  <span
                    className={
                      orderDetails?.order_status === 0
                        ? "text-warning text-xxs font-weight-bold badge badge-xxs  status-pending"
                        : orderDetails?.order_status === 1
                        ? "text-warning text-xxs font-weight-bold badge badge-xxs  status-pending"
                        : orderDetails?.order_status === 2
                        ? "text-success text-xxs font-weight-bold badge badge-xxs  status-success"
                        : orderDetails?.order_status === 3
                        ? "text-success text-xxs font-weight-bold badge badge-xxs  status-success"
                        : "text-failed text-xxs font-weight-bold badge badge-xxs  status-failed"
                    }
                  >
                    {orderDetails?.order_status === 0
                      ? "Pending"
                      : orderDetails?.order_status === 1
                      ? "Progress"
                      : orderDetails?.order_status === 2
                      ? "Delivered"
                      : orderDetails?.order_status === 3
                      ? "Completed"
                      : "Declined"}
                  </span>
                </p>
              </div>
            </div>
          </div>
          <BaseTable />
          <div className="mt-4 mx-lg-4 flex flex-direction-column align-item-end py-3 mx-4">
            <p className="mb-1">Subtotal : ₹ {orderDetails?.total_amount}</p>
            <p className="mb-1">Discount(-) : ₹ {orderDetails?.coupon_coast}</p>
            <p className="mb-1">Shipping : ₹ {orderDetails?.shipping_cost}</p>
            <p className="mb-1 text-lg fw-bolder color-6c757d">
              Total : ₹ {orderDetails?.total_amount}
            </p>
          </div>
        </div>
        <div className="card mt-4">
          <div class="card-body p-3"></div>
        </div>
      </div>
    </>
  );
};
