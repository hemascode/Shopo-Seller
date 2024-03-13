import { ToastifyFailed, ToastifySuccess } from "@/common/Toastify";
import { localStorageConst } from "@/constant/localStorage";
import { Redirect } from "@/helper/base";
import { AuthorizationApi } from "@/service/auth/auth";
import { LocalStorageHelper } from "@/utils/localStorage";
import { BaseUrls } from "../../../../env";

const { login } = new AuthorizationApi();
const BASE_URL = process.env.NEXT_SHOPOADMIN_BASE_URL;

export const handleLogin = async (data) => {
  const res = await login(data);
  if (res?.error) {
    ToastifyFailed(res?.error);
  } else {
    LocalStorageHelper?.setItem(
      localStorageConst?.JWTSELLER,
      res?.access_token
    );
    const userData = {
      id: res?.admin?.id,
      name: res?.admin?.name,
      email: res?.admin?.email,
      avatar: `${BASE_URL || BaseUrls.BASE_URL}/${res?.admin?.image}`,
    };
    LocalStorageHelper?.setItem(localStorageConst?.USER, userData);
    ToastifySuccess(`Welcome Back ${userData?.name}`);
    Redirect("/");
  }
};
