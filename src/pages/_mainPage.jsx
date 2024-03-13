import { useState, useEffect } from "react";
import { SideBarNav } from "@/common/SideBar";
import { LocalStorageHelper } from "@/utils/localStorage";
import { localStorageConst } from "@/constant/localStorage";
import { Authorization } from "@/Components/Authorization";
import { Base } from "@/common/Base";

const authorized = (Component, pageProps) => (
  <>
    <SideBarNav />
    <Base>
      <Component {...pageProps} />
    </Base>
  </>
);

const MainPage = ({ Component, pageProps }) => {
  const [userPresented, setUserPresented] = useState(false);
  const [wait, setWait] = useState(true);

  useEffect(() => {
    const sellerAuthToken = LocalStorageHelper.getItem(
      localStorageConst.JWTSELLER
    );
    if (sellerAuthToken) setUserPresented(true);
    else setWait(false);
  }, []);

  return (
    <div>
      {userPresented
        ? authorized(Component, pageProps)
        : !wait && <Authorization />}
    </div>
  );
};

export default MainPage;
