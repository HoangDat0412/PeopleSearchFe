<script setup>
import { useUserStore } from "@/stores/user";
import avataruser from "@/assets/img/useravatar.jpg";
const props = defineProps(["search"]);
let search = props.search;
const user = useUserStore();
</script>

<template>
  <v-col cols="12" class="d-flex">
    <div class="me-3">
      <v-avatar color="grey-lighten-1">
        <v-img
          alt="User"
          :src="avataruser"
        ></v-img>
      </v-avatar>
    </div>
    <div>
      <v-toolbar-title style="font-size: 15px">{{
        user.userInformation?.current_user_name
      }}</v-toolbar-title>
      <v-card class="">
        <v-card-item>
          <p v-if="search?.name">Name: {{ search?.name }}</p>
          <p v-if="search?.search">Search: {{ search?.search }}</p>
          <p v-if="search?.gender">Gender: {{ search?.gender }}</p>
          <p v-if="search?.phone">Phone: {{ search?.phone }}</p>
          <p v-if="search?.email">Email: {{ search?.email }}</p>
          <p v-if="search?.address">Address: {{ search?.address }}</p>
          <p v-if="search?.national">National: {{ search?.national }}</p>
          <p v-if="search?.cccd">CCCD/Passport: {{ search?.cccd }}</p>
          <p v-if="search?.linkfacebook">
            Link Facebook: {{ search?.linkfacebook }}
          </p>
        </v-card-item>
      </v-card>
    </div>
  </v-col>
</template>
