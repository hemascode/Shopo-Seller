import DeleteIcon from "@mui/icons-material/Delete";
import VisibilityIcon from "@mui/icons-material/Visibility";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
export const BaseTable = (props) => {
  console.log(props, "props");
  return (
    <div className="container-fluid py-4">
      <div className="row">
        <div className="col-12">
          <div className="card mb-4">
            <div className="card-header pb-0">
              {/* <h6>Authors table</h6> */}
            </div>
            <div className="card-body px-0 pt-0 pb-2">
              <div className="table-responsive p-0">
                <table className="table align-items-center mb-0">
                  <thead>
                    <tr>
                      <th className=" text-center text-uppercase text-secondary text-xs font-weight-bolder">
                        S No
                      </th>
                      <th className="text-center text-uppercase text-secondary text-xs font-weight-bolder ">
                        Customer
                      </th>
                      <th className="text-center text-uppercase text-secondary text-xs font-weight-bolder ">
                        Order ID
                      </th>
                      <th className="text-center text-uppercase text-secondary text-xs font-weight-bolder ">
                        Date
                      </th>
                      <th className="text-center text-uppercase text-secondary text-xs font-weight-bolder ">
                        Quantity
                      </th>
                      <th className="text-center text-uppercase text-secondary text-xs font-weight-bolder">
                        Amount
                      </th>
                      <th className="text-center text-uppercase text-secondary text-xs font-weight-bolder">
                        Order Status
                      </th>
                      <th className="text-center text-uppercase text-secondary text-xs font-weight-bolder ">
                        Payment
                      </th>
                      <th className="text-center text-uppercase text-secondary text-xs font-weight-bolder ">
                        Action
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {props.onTableData?.map((item, index) => (
                      <tr key={index}>
                        <td className="align-middle text-center">
                          <span className="text-secondary text-xs font-weight-bold">
                            {item.sno}
                          </span>
                        </td>
                        <td className="align-middle text-center">
                          <span className="text-secondary text-xs font-weight-bold ">
                            {item.customer}
                          </span>
                        </td>
                        <td className="align-middle text-center">
                          <span className="text-secondary text-xs font-weight-bold ">
                            {item.orderId}
                          </span>
                        </td>
                        <td className="align-middle text-center">
                          <span className="text-secondary text-xs font-weight-bold ">
                            {item.date}
                          </span>
                        </td>
                        <td className="align-middle text-center">
                          <span className="text-secondary text-xs font-weight-bold ">
                            {item.quantity}
                          </span>
                        </td>
                        <td className="align-middle text-center">
                          <span className="text-secondary text-xs font-weight-bold ">
                            {item.amount}
                          </span>
                        </td>
                        <td className="align-middle text-center">
                          {item.orderStatus === "Pending" ? (
                            <span className=" text-warning text-xxs font-weight-bold badge badge-xxs  status-pending">
                              {item.orderStatus}{" "}
                            </span>
                          ) : (
                            <span className="text-success text-xxs font-weight-bold badge badge-xxs status-success">
                              {item.orderStatus}{" "}
                            </span>
                          )}
                        </td>
                        <td className="align-middle text-center">
                          {item.payment === "Pending" ? (
                            <span className=" text-warning text-xxs font-weight-bold badge badge-xxs status-pending">
                              {item.payment}{" "}
                            </span>
                          ) : (
                            <span className="text-success text-xxs font-weight-bold badge badge-xxs status-success">
                              {item.payment}{" "}
                            </span>
                          )}
                        </td>
                        <td className="align-middle text-center">
                          <span className="text-secondary text-sm font-weight-bold cursor-pointer">
                            <span
                              className="material-symbols-outlined"
                              onClick={() =>
                                props?.handleNavigateOrder(item.sno)
                              }
                            >
                              <VisibilityIcon sx={{ fontSize: 20 }} />
                            </span>
                            <span
                              className="text-secondary text-sm font-weight-bold cursor-pointer"
                              onClick={() => props?.handleDeleteOrder()}
                            >
                              <DeleteIcon sx={{ fontSize: 20 }} />
                            </span>{" "}
                            <span className="text-secondary text-sm font-weight-bold cursor-pointer">
                              <LocalShippingIcon sx={{ fontSize: 20 }} />
                            </span>
                          </span>{" "}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
