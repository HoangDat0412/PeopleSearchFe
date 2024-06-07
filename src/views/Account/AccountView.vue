<script setup>
import { ref } from "vue";
import FooterView from '@/components/Footer/FooterView.vue'
const name = ref("Hoàng Đạt");

const updateName = () => {
  console.log("Updated name:", name.value);
  // Add your update logic here
};
const oldPassword = ref("");
const newPassword = ref("");
const repeatPassword = ref("");

const changePassword = () => {
  if (newPassword.value === repeatPassword.value) {
    console.log("Passwords match, proceed with change");
    // Add your password change logic here
  } else {
    console.log("Passwords do not match");
  }
};
</script>

<template>
  <v-container fluid style="height: 100%; overflow-y: auto">
    <v-row>
      <v-col cols="12">
        <h2 class="title mb-3">ACCOUNT</h2>
        <v-divider></v-divider>

        <v-form class="mt-5">
          <div class="text-subtitle-1 text-medium-emphasis">Account Name</div>
          <v-text-field
            v-model="name"
            variant="solo"
            density="compact"
            outlined
          ></v-text-field>
          <v-btn type="submit" color="primary" class=""> Update </v-btn>
        </v-form>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12" class="mt-5">
        <h2 class="title mb-3">CHANGE PASSWORD</h2>
        <v-divider></v-divider>

        <v-form @submit.prevent="changePassword" class="mt-5">
          <v-text-field
            variant="solo"
            v-model="oldPassword"
            label="Old password"
            type="password"
            outlined
          ></v-text-field>
          <v-text-field
            variant="solo"
            v-model="newPassword"
            label="New password"
            type="password"
            outlined
          ></v-text-field>
          <v-text-field
            variant="solo"
            v-model="repeatPassword"
            label="Repeat new password"
            type="password"
            outlined
          ></v-text-field>
          <v-btn type="submit" color="primary" class="">
            Change Password
          </v-btn>
        </v-form>
      </v-col>
    </v-row>
  </v-container>

  <FooterView/>
</template>



<style scoped>
.title {
  font-size: 18px;
  font-weight: 400;
  text-transform: uppercase;
}
</style>
