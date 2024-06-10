<script setup>
// import
import { onBeforeMount, ref } from "vue";
import FooterView from "@/components/Footer/FooterView.vue";
import { notify } from "@kyvg/vue3-notification";
import { useUserStore } from "@/stores/user";

// khaii báo biến
const user = useUserStore();
const name = ref("");
const oldPassword = ref("");
const newPassword = ref("");
const repeatPassword = ref("");

// function
const handleUpdateUserName = async () => {
  if (name.value.trim() === "") {
    notify({
      title: "Update false user name can't null",
      type: "error",
    });
  } else {
    await user.userUpdateInformation({
      username: name.value,
    });
  }
};

const changePassword = () => {
  if (newPassword.value === repeatPassword.value) {
    notify({
      type: "error",
      title: "Passwords match, proceed with change",
    });
    // Add your password change logic here
  } else {
    notify({
      type: "error",
      title: "Passwords do not match",
    });
  }
};
// function của vuejs
onBeforeMount(async () => {
  await user.getUserInformation();
  name.value = user.userInformation?.current_user_name;
});
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
          <v-btn
            type="button"
            @click="() => handleUpdateUserName()"
            color="primary"
            class=""
          >
            Update
          </v-btn>
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
    <v-row>
      <v-col cols="12" class="mt-5">
        <h2 class="title mb-3">Multi-factor authentication</h2>
        <v-divider></v-divider>

        <v-form class="mt-5">
          <v-select
          variant="solo"
            :items="[
              { title: 'On', value: true },
              { title: 'Off', value: false },
            ]"
            density="compact"
          ></v-select>
          <v-btn type="submit" color="primary" class=""> Save </v-btn>
        </v-form>
      </v-col>
    </v-row>
  </v-container>

  <FooterView />
</template>

<style scoped>
.title {
  font-size: 18px;
  font-weight: 400;
  text-transform: uppercase;
}
</style>
