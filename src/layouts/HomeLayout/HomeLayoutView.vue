<script setup>
// library
import { onBeforeMount, ref } from "vue";
import {
  mdiMenu,
  mdiHome,
  mdiMagnify,
  mdiCog,
  mdiLogout,
  mdiHelp,
} from "@mdi/js";
import avataruser from "@/assets/img/useravatar.jpg";
import banerlogo from "@/assets/img/lightbannerlogo.png";
import banerlogodark from "@/assets/img/darkbannerlogo.png";
import "./homelayout.scss";
import { useUserStore } from "@/stores/user";
import router from "@/router";
// component
import GroupChatTitle from "@/components/GroupChatTitle/GroupChatTitle.vue";
import { RouterLink } from "vue-router";
// import Cookies from "js-cookie";
// import { TOKEN } from "@/utils/config";
// biến
const drawer = ref(true);
const user = useUserStore();
// function vuejs
onBeforeMount(async () => {
  if (!user.loginstatus) {
    await user.getUserInformation();
    if (!user?.userInformation?.current_user_name) {
      router.push("/login");
    }
  }
});

</script>

<template>
  <v-app
    id="inspire"
    style="height: 100vh; overflow-y: hidden"
    :theme="user.theme"
  >
    <v-navigation-drawer v-model="drawer" width="300">
      <RouterLink to="/" class="d-flex align-center justify-center">
        <img
          v-if="user.theme === 'light'"
          :src="banerlogo"
          alt="Logo People Search"
          width="165"
        />
        <img v-else :src="banerlogodark" alt="Logo People Search" width="165" />
      </RouterLink>
      <v-divider></v-divider>

      <v-list nav>
        <v-list-item
          :prepend-icon="mdiHome"
          to="/dashboard"
          title="Dashboard"
          value="dashboard"
          style="width: 65%"
        ></v-list-item>
        <v-list-item
          :prepend-icon="mdiMagnify"
          to="/newsearch"
          title="New Search"
          value="newsearch"
          style="width: 65%"
        ></v-list-item>
      </v-list>

      <GroupChatTitle />
    </v-navigation-drawer>

    <v-app-bar class="d-flex justify-space-between">
      <v-app-bar-nav-icon @click="drawer = !drawer" class="d-block d-md-none">
        <v-icon :icon="mdiMenu" />
      </v-app-bar-nav-icon>
      <!-- <div>
        <v-btn color="primary" @click.stop="show.showNote = true"> Toggle </v-btn>
      </div> -->

      <v-app-bar-title>
        <div class="d-flex align-center justify-end me-1">
          <v-btn
            :prepend-icon="mdiHelp"
            to="/guide"
            class="me-3"
            style="border: solid 1px rgba(0, 0, 0, 0.05)"
          >
            <template v-slot:prepend>
              <v-icon color="primary"></v-icon>
            </template>
            Guide
          </v-btn>

          <v-menu class="ps-2 pe-2">
            <template v-slot:activator="{ props }">
              <v-card style="cursor: pointer" v-bind="props">
                <v-list-item
                  class="mt-2 mb-2"
                  :prepend-avatar="avataruser"
                  :subtitle="user?.userInformation?.current_user_email"
                  :title="user?.userInformation?.current_user_name"
                ></v-list-item>
              </v-card>
            </template>

            <v-list>
              <v-list-item value="account" :prepend-icon="mdiCog">
                <RouterLink
                  style="color: unset; text-decoration: none; font-size: unset"
                  to="/account"
                >
                  Account</RouterLink
                >
              </v-list-item>
              <v-list-item
                value="logout"
                :prepend-icon="mdiLogout"
                @click="() => user.logout()"
              >
                <v-list-item-title> Logout</v-list-item-title>
              </v-list-item>
            </v-list>
          </v-menu>
        </div>
      </v-app-bar-title>
    </v-app-bar>

    <v-main style="height: 100vh; overflow-y: unset">
      <RouterView />
    </v-main>
  </v-app>
</template>

<style scoped></style>
