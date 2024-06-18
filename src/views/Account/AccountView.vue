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
const erroldpassword = ref("")
const newPassword = ref("");
const errnewpassword = ref("")
const repeatPassword = ref("");
const errrepeatpassword = ref("")

const mfa = ref(false);
const theme = ref(user.theme);
const themes = ['light', 'dark'];

const handleChangeTheme = ()=>{
  user.theme = theme.value
}

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
  <v-container class="pa-10" fluid style="height: 100%; overflow-y: auto">
    <v-card class="pa-5">
      <v-card-title>Account Settings</v-card-title>
      <v-card-text>
        <v-form class="mt-5">
          <div class="text-subtitle-1 text-medium-emphasis">Theme</div>
          <v-select
            v-model="theme"
            :items="themes"
            density="compact"
            variant="solo"
          ></v-select>
          <v-btn type="button" size="small" color="primary" @click="handleChangeTheme">Save Changes</v-btn>
        </v-form>

        <v-form class="mt-5">
          <div class="text-subtitle-1 text-medium-emphasis">Current Password</div>
          <v-text-field
            v-model="oldPassword"
            type="password"
            required
                        density="compact"
            variant="solo"
          ></v-text-field>
          <div class="text-subtitle-1 text-medium-emphasis">New Password</div>
          <v-text-field
            v-model="newPassword"
            type="password"
            required
                        density="compact"
            variant="solo"
          ></v-text-field>
          <div class="text-subtitle-1 text-medium-emphasis">Repeat Password</div>
          <v-text-field
            v-model="newPassword"
            type="password"
            required
                        density="compact"
            variant="solo"
          ></v-text-field>
          <v-btn type="submit" size="small" color="primary">Change Password</v-btn>
        </v-form>

        <v-form class="mt-5">
          <div class="text-subtitle-1 text-medium-emphasis">Username</div>
          <v-text-field
            v-model="name"
            required
                                    density="compact"
            variant="solo"
          ></v-text-field>

          <v-btn type="button" @click="handleUpdateUserName()" size="small" color="primary">Change UserName</v-btn>
        </v-form>


        <v-form class="mt-5">
          <v-switch
            v-model="mfa"
            label="Multi-Factor Authentication"
          ></v-switch>
        </v-form>
      </v-card-text>
    </v-card>
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
