import router from "@/router";
import { service } from "@/service/baseService";
import { defineStore } from "pinia";
import Cookies from "js-cookie";
import { DOMAIN, REFRESHTOKEN, TOKEN } from "@/utils/config";
import { notify } from "@kyvg/vue3-notification";
import axios from "axios";

export const useUserStore = defineStore("user", {
  state: () => ({
    userLogin: "",
    userInformation: {},
    userList: [],
    newuserlist: [],
    responseRegister: null,
    chechOutResult: null,
    updateSuccess: true,
    userUpdate: {},
    logoutStatus: "",
    userUpdateResult: true,
    theme: "light",
    loginstatus: false,
  }),
  getters: {},
  actions: {
    async register(data) {
      try {
        const result = await service.login(`AccountManagement/register/`, data);
        if (result?.status === 201) {
          router.push({ path: "/login" });
          notify({
            title: "Register Success",
            type: "success",
          });
        }
        if (result?.status === 409) {
          notify({
            title: "Email already exist",
            type: "warn",
          });
        }
      } catch (error) {
        console.log(error?.response?.status);
        if (error?.response?.status === 409) {
          notify({
            title: "Email already exists ",
            type: "error",
          });
        } else if (error?.response?.status === 400) {
          notify({
            title:
              "Enter a valid username. This value may contain only letters, numbers, and @/./+/-/_ characters.",
            type: "error",
          });
        } else {
          notify({
            title: "False To Register",
            text: "Please Check Your Information is valid",
            type: "error",
          });
          console.log(error);
        }
      }
    },
    async login(data) {
      try {
        const result = await service.login(`AccountManagement/login/`, data);
        if (result?.status === 200) {
          Cookies.set(TOKEN, result.data.access);
          Cookies.set(REFRESHTOKEN, result.data.refresh);
          this.loginstatus = true
          const user = await axios({
            method:"GET",
            url:`${DOMAIN}API/CurrentUserId/`,
            headers: {
              'Content-Type': 'application/json',
              Authorization: `Bearer ${result.data.access}`,
            },
          });
          if (user?.status === 200) {
            this.userInformation = { ...user.data };
          }
          notify({
            type: "success",
            title: `Welcome back to People Search`,
          });
          router.push({ path: "/" });
        }
      } catch (error) {
        if (error.response.status === 400) {
          notify({
            type: "error",
            title: `Wrong account or password`,
          });
        } else {
          notify({
            type: "error",
            title: `${error.message}`,
          });
        }
      }
    },
    async getUserInformation() {
      try {
        const result = await service.get(`API/CurrentUserId/`);
        if (result?.status === 200) {
          this.userInformation = { ...result.data };
        }
      } catch (error) {
        this.userInformation = false;
      }
    },
    async logout() {
      try {
        Cookies.remove(TOKEN);
        Cookies.remove(REFRESHTOKEN);
        notify({
          title: "logout Account Success",
          type: "success",
        });
        this.getUserInformation();
        router.push("/login");
      } catch (error) {
        notify({
          title: "Logout Account Error",
          type: "error",
        });
      }
    },
    async userUpdateInformation(data) {
      try {
        const result = await service.put(
          "AccountManagement/UpdateUsername/",
          data
        );
        if (result.status === 200) {
          notify({
            title: "Update username success",
            type: "success",
          });
          return this.getUserInformation();
        }
      } catch (error) {
        if (error.response.status === 400) {
          notify({
            title: `user name already exist`,
            type: "error",
          });
        } else {
          notify({
            title: `update user name false `,
            type: "error",
          });
        }
        console.log(error);
      }
    },
    async resetPassword(data) {
      try {
        const result = await service.post(
          `AccountManagement/confirm-email/`,
          data
        );
        if (result.status === 200) {
          notify({
            type: "success",
            title: "The mail to reset password",
          });
        } else {
          notify({
            type: "error",
            title: "Not found account",
          });
        }
      } catch (error) {
        console.log(error);
        notify({
          type: "error",
          title: "Not found account",
        });
      }
    },
  },
});
