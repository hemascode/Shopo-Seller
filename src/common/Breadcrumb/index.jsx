/* eslint-disable @next/next/no-html-link-for-pages */
/* eslint-disable @next/next/no-img-element */
import { localStorageConst } from "@/constant/localStorage";
import { LocalStorageHelper } from "@/utils/localStorage";
import { router } from "next/router";
import LogoutIcon from "@mui/icons-material/Logout";
import React, { useEffect, useState } from "react";
import StorefrontIcon from "@mui/icons-material/Storefront";
import { SideBarNav } from "../SideBar";
import LockClockIcon from "@mui/icons-material/LockClock";
import { Reload } from "@/helper/base";

export const Breadcrumb = ({ currentPage, serachEnable }) => {
  const [userData, setUserData] = useState();
  const [openSideNavBar, setOpenSideNavBar] = useState(false);

  useEffect(() => {
    if (LocalStorageHelper?.getItem(localStorageConst.USER)) {
      setUserData(LocalStorageHelper?.getItem(localStorageConst.USER));
    }
  }, []);

  function logOut() {
    LocalStorageHelper?.removeItem(localStorageConst.JWTSELLER);
    LocalStorageHelper?.removeItem(localStorageConst.USER);
    Reload();
  }

  const handleOpenSideNavBar = () => {
    setOpenSideNavBar(!openSideNavBar);
  };

  return (
    <>
      <nav
        className="navbar navbar-main navbar-expand-lg px-0 mx-4 shadow-none border-radius-xl"
        id="navbarBlur"
        navbar-scroll="true"
      >
        <div className="container-fluid py-1 px-3">
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb bg-transparent mb-0 pb-0 pt-1 px-0 me-sm-6 me-5">
              <li className="breadcrumb-item text-sm">
                <a className="opacity-5 text-dark" href="/admin/dashboard">
                  Pages
                </a>
              </li>
              <li
                className="breadcrumb-item text-sm text-dark active"
                aria-current="page"
              >
                {currentPage}
              </li>
            </ol>
            <h6 className="font-weight-bolder mb-0">{currentPage}</h6>
          </nav>
          <div
            className="collapse navbar-collapse mt-sm-0 mt-2 me-md-0 me-sm-4"
            id="navbar"
          >
            <div className="ms-md-auto pe-md-3 d-flex align-items-center">
              {serachEnable && (
                <div className="input-group">
                  <span className="input-group-text text-body">
                    <i className="fas fa-search" aria-hidden="true"></i>
                  </span>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Type here..."
                  />
                </div>
              )}
            </div>

            <ul className="navbar-nav flex-direction-row justify-content-end">
              <div class="dropdown">
                <button class="dropbtn">
                  <a
                    style={{
                      display: "flex",
                      gap: "5px",
                      alignItems: "center",
                    }}
                    className="nav-link text-body font-weight-bold px-0"
                  >
                    {userData && userData?.avatar ? (
                      <img
                        src={"../assets/img/team-2.jpg"}
                        alt=""
                        style={{ borderRadius: 50 }}
                        width={30}
                        height={30}
                      />
                    ) : (
                      <i className="fa fa-user me-sm-1"></i>
                    )}
                    <span className="d-sm-inline d-none">{userData?.name}</span>
                  </a>
                </button>
                <div class="dropdown-content">
                  <a onClick={() => router.push("/seller/profile")}>
                    <i className="fa fa-user me-sm-1"></i> Profile
                  </a>
                  <a>
                    <button className="logout-btn" onClick={logOut}>
                      <LogoutIcon sx={{ color: "red", fontSize: "18px" }} /> Log
                      Out
                    </button>
                  </a>
                </div>
              </div>
              <li className="nav-item d-flex align-items-center"></li>
              {/* burger meny */}
              <li className="nav-item d-xl-none ps-3 d-flex align-items-center cursor-pointer">
                <a
                  onClick={() => handleOpenSideNavBar()}
                  className="nav-link text-body p-0"
                  id="iconNavbarSidenav"
                >
                  <div className="sidenav-toggler-inner">
                    <i className="sidenav-toggler-line"></i>
                    <i className="sidenav-toggler-line"></i>
                    <i className="sidenav-toggler-line"></i>
                  </div>
                </a>
              </li>
              <li className="nav-item px-3 d-flex align-items-center">
                <a
                  className="nav-link text-body p-0 cursor-pointer"
                  onClick={() => router.push("/seller/setting")}
                >
                  <StorefrontIcon sx={{ fontSize: "18px" }} />
                </a>
              </li>
              <li className="nav-item dropdown pe-2 d-flex align-items-center">
                <a className="nav-link text-body p-0 cursor-pointer">
                  <LockClockIcon sx={{ fontSize: "18px" }} />
                </a>
                <ul
                  className="dropdown-menu  dropdown-menu-end  px-2 py-3 me-sm-n4"
                  aria-labelledby="dropdownMenuButton"
                >
                  <li className="mb-2">
                    <a
                      className="dropdown-item border-radius-md"
                      href="javascript:;"
                    >
                      <div className="d-flex py-1">
                        <div className="my-auto">
                          <img
                            src="../assets/img/team-2.jpg"
                            className="avatar avatar-sm  me-3 "
                            alt=""
                          />
                        </div>
                        <div className="d-flex flex-column justify-content-center">
                          <h6 className="text-sm font-weight-normal mb-1">
                            <span className="font-weight-bold">
                              New message
                            </span>{" "}
                            from Laur
                          </h6>
                          <p className="text-xs text-secondary mb-0">
                            <i className="fa fa-clock me-1"></i>
                            13 minutes ago
                          </p>
                        </div>
                      </div>
                    </a>
                  </li>
                  <li className="mb-2">
                    <a
                      className="dropdown-item border-radius-md"
                      href="javascript:;"
                    >
                      <div className="d-flex py-1">
                        <div className="my-auto">
                          <img
                            src="../assets/img/small-logos/logo-spotify.svg"
                            className="avatar avatar-sm bg-gradient-dark  me-3 "
                            alt=""
                          />
                        </div>
                        <div className="d-flex flex-column justify-content-center">
                          <h6 className="text-sm font-weight-normal mb-1">
                            <span className="font-weight-bold">New album</span>{" "}
                            by Travis Scott
                          </h6>
                          <p className="text-xs text-secondary mb-0">
                            <i className="fa fa-clock me-1"></i>1 day
                          </p>
                        </div>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a
                      className="dropdown-item border-radius-md"
                      href="javascript:;"
                    >
                      <div className="d-flex py-1">
                        <div className="avatar avatar-sm bg-gradient-secondary  me-3  my-auto">
                          {/* <svg
                          width="12px"
                          height="12px"
                          viewBox="0 0 43 36"
                          version="1.1"
                          xmlns="http://www.w3.org/2000/svg"
                          xmlns:xlink="http://www.w3.org/1999/xlink"
                        >
                          <title>credit-card</title>
                          <g
                            stroke="none"
                            stroke-width="1"
                            fill="none"
                            fill-rule="evenodd"
                          >
                            <g
                              transform="translate(-2169.000000, -745.000000)"
                              fill="#FFFFFF"
                              fill-rule="nonzero"
                            >
                              <g transform="translate(1716.000000, 291.000000)">
                                <g transform="translate(453.000000, 454.000000)">
                                  <path
                                    className="color-background"
                                    d="M43,10.7482083 L43,3.58333333 C43,1.60354167 41.3964583,0 39.4166667,0 L3.58333333,0 C1.60354167,0 0,1.60354167 0,3.58333333 L0,10.7482083 L43,10.7482083 Z"
                                    opacity="0.593633743"
                                  ></path>
                                  <path
                                    className="color-background"
                                    d="M0,16.125 L0,32.25 C0,34.2297917 1.60354167,35.8333333 3.58333333,35.8333333 L39.4166667,35.8333333 C41.3964583,35.8333333 43,34.2297917 43,32.25 L43,16.125 L0,16.125 Z M19.7083333,26.875 L7.16666667,26.875 L7.16666667,23.2916667 L19.7083333,23.2916667 L19.7083333,26.875 Z M35.8333333,26.875 L28.6666667,26.875 L28.6666667,23.2916667 L35.8333333,23.2916667 L35.8333333,26.875 Z"
                                  ></path>
                                </g>
                              </g>
                            </g>
                          </g>
                        </svg> */}
                        </div>
                        <div className="d-flex flex-column justify-content-center">
                          <h6 className="text-sm font-weight-normal mb-1">
                            Payment successfully completed
                          </h6>
                          <p className="text-xs text-secondary mb-0">
                            <i className="fa fa-clock me-1"></i>2 days
                          </p>
                        </div>
                      </div>
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      {openSideNavBar && (
        <SideBarNav
          openSideNavBar={openSideNavBar}
          handleOpenSideNavBar={handleOpenSideNavBar}
        />
      )}
    </>
  );
};
