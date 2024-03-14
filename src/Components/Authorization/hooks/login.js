import { ToastifyFailed, ToastifySuccess } from "@/common/Toastify";
import { localStorageConst, userData } from "@/constant/localStorage";
import { Redirect, Reload } from "@/helper/base";
// import { AuthorizationApi } from "@/service/auth/auth";
import { LocalStorageHelper } from "@/utils/localStorage";
import { BaseUrls } from "../../../../env";

// const { login } = new AuthorizationApi();
const BASE_URL = process.env.NEXT_SHOPOADMIN_BASE_URL;

const loginCheckTemp = {
  email: "mohan@gmail.com",
  password: "1234",
};

export const handleLogin = async (data) => {
  const emailCheck = data?.email === loginCheckTemp?.email;
  const passwordCheck = data?.password === loginCheckTemp?.password;
  // const res = await login(data);
  if (!emailCheck) {
    ToastifyFailed("Email is Incorrect");
    Reload();
  } else if (!passwordCheck) {
    ToastifyFailed("Password is Incorrect");
    Reload();
  } else {
    LocalStorageHelper?.setItem(
      localStorageConst?.JWTSELLER,
      userData?.access_token
    );
    LocalStorageHelper?.setItem(
      localStorageConst.EXPIREIN,
      userData?.expires_in
    );
    LocalStorageHelper?.setItem(localStorageConst.REMEMBER, data?.rememberMe);
    const user = {
      id: userData?.admin?.id,
      name: userData?.admin?.name,
      email: userData?.admin?.email,
      avatar: `${BASE_URL || BaseUrls.BASE_URL}/${userData?.admin?.image}`,
    };
    LocalStorageHelper?.setItem(localStorageConst?.USER, user);
    ToastifySuccess(`Welcome Back ${user?.name}`);
    Redirect("/");
  }
};
