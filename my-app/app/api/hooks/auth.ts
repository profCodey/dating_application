import { axiosInstance } from "..";
// import {
//   loginFormValidator,
//   signupFormValidator,
// } from "@/app/utils/validators";
import axios from 'axios';
import { useMutation } from "@tanstack/react-query";
import { AxiosError, AxiosResponse } from "axios";
import { z } from "zod";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";
import { APP_TOKENS } from "@/utils/constant";
import { showNotification } from "@mantine/notifications";
import { queryClient } from "@/app/layout";
// import { LoginResponse } from "@/app/utils/interfaces";
import { ErrorItem } from "@/utils/validators/interfaces";

export function useRegister(cb: () => void){
  const router = useRouter();
  return useMutation({
    mutationFn:  (payload) =>{
      console.log('it got to the hooks', payload)
      return axiosInstance.post(`/api/auth/register/`, payload);
    },
    onSuccess: function (data) {
      console.log("data", data);
      showNotification({
        title: "Registration Successful",
        message:
          "You have successfully created your account. Kindly login to continue",
        color: "green",
      });
    cb && cb();
    },
    onError: function (data) {
      console.log('it got to error', data)
      // const response = data.response?.data as ErrorItem;
      // console.log("error", data);

      // const combinedDetails = response?.error.message || "Unable to log you in";

      // showNotification({
      //   title: response?.error.code,
      //   message: combinedDetails || "Registration unsuccessful",
      //   color: "red",
      // });
        showNotification({
          // title: data.response?.error.code,
          //@ts-ignore
          message: data.response.data.message || "Registration unsuccessful",
          color: "red",
        });
    },
  });
}

// export function useLogin() {
//   const router = useRouter();
//   const logout = useLogout();

//   function handleLoginSuccess(data: AxiosResponse<LoginResponse>) {
//     showNotification({
//       title: "Login successful",
//       message: "Signing you in",
//       color: "green",
//     });
//     router.push("/dashboard");
//   }

//   return useMutation({
//     mutationFn: function (payload: z.infer<typeof loginFormValidator>) {
//       return axiosInstance.post("/core/login/", payload);
//     },
//     onSuccess: function (data: AxiosResponse) {
//       const { access, refresh, first_name } = data.data.data;
//       Cookies.set(APP_TOKENS.ACCESS_TOKEN, access);
//       Cookies.set(APP_TOKENS.REFRESH_TOKEN, refresh);
//       Cookies.set(APP_TOKENS.USERID, data.data.user_id);
//       Cookies.set(APP_TOKENS.FIRSTNAME, first_name);

//       handleLoginSuccess(data);
//     },
//     onError: function (data: AxiosError) {
//       const response = data.response?.data as ErrorItem;
//       const message = response?.error.message || "Unable to log you in";
//       return showNotification({
//         title: "An error occured",
//         message,
//         color: "red",
//       });
//     },
//   });
// }

// export function useGetRefreshToken() {
//   const logout = useLogout();
//   return useMutation({
//     mutationFn: function () {
//       return axiosInstance.post("/core/refresh/", {
//         refresh: Cookies.get(APP_TOKENS.REFRESH_TOKEN),
//       });
//     },
//     onSuccess: function (data: AxiosResponse) {
//       const { access, refresh } = data.data;
//       Cookies.set(APP_TOKENS.ACCESS_TOKEN, access);
//       Cookies.set(APP_TOKENS.REFRESH_TOKEN, refresh);
//     },
//     onError: function (data: AxiosError) {
//       const response = data.response?.data as ErrorItem;
//       showNotification({
//         title: "An error occured",
//         message: response?.error.message || "An application error occured",
//       });
//       logout();
//     },
//   });
// }

// export function useLogout() {
//   const router = useRouter();
//   return function () {
//     Cookies.remove(APP_TOKENS.ACCESS_TOKEN);
//     Cookies.remove(APP_TOKENS.REFRESH_TOKEN);
//     Cookies.remove(APP_TOKENS.FIRSTNAME);
//     queryClient.clear();
//     router.push("/login");
//   };
// }

// export function useResetPassword(cb: () => void) {
//   return useMutation(
//     (payload: { email: string }) =>
//       axiosInstance.post("/core/reset-password/", payload),
//     {
//       onSuccess: function (data: AxiosResponse) {
//         showNotification({
//           title: "Request sent!",
//           message: data?.data.success,
//           color: "green",
//         });

//         cb();
//       },
//       onError: function (error: AxiosError) {
//         // console.log(error);
//         const errors = error.response?.data as Record<string, string>;

//         showNotification({
//           title: "An error occured",
//           message: "Unable to send instructions, please try later",
//           color: "red",
//         });
//       },
//     }
//   );
// }
