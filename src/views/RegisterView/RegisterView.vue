<script setup>
// thư viện
import { ref } from 'vue';
import { mdiEmailOutline, mdiEyeOff, mdiEye,mdiAccount } from '@mdi/js'
const visible = ref(false)
import { checkNull, ValidateEmail } from '@/validation/validation'
import { useUserStore } from '@/stores/user'
const user = useUserStore()
const email = ref('')
const errorEmail = ref('')
const passWord = ref('')
const errorPassword = ref('')
const username = ref('')
const errUserName = ref('')

const handleRegister = async () => {
  if (!checkNull(email.value)) {
    errorEmail.value = 'email không được bỏ trống'
  } else {
    errorEmail.value = ''
  }
  if (!checkNull(passWord.value)) {
    errorPassword.value = 'password must be not null'
  } else {
    errorPassword.value = ''
  }
  if (!checkNull(username.value)) {
    errUserName.value = 'username must be not null'
  } else {
    errUserName.value = ''
  }
  console.log(email.value);
  console.log(ValidateEmail(email.value));
  !ValidateEmail(email.value) ? (errorEmail.value = 'email is invalid') : (errorEmail.value = '')

  // const data = {
  //   email: email.value,
  //   password: passWord.value
  // }
  const flag =
    checkNull(email.value) &&
    checkNull(passWord.value) &&
    ValidateEmail(email.value) &&
    checkNull(username.value)
  if (flag) {
    await user.register({
      email: email.value,
      username: username.value,
      password: passWord.value
    })
  }
}
</script>
<template>
    <div>
        <v-img class="mx-auto my-6" max-width="228"
            src="https://cdn.vuetifyjs.com/docs/images/logos/vuetify-logo-v3-slim-text-light.svg"></v-img>

        <v-card class="mx-auto pa-12 pb-8" elevation="8" max-width="448" rounded="lg">
            <div class="text-subtitle-1 text-medium-emphasis">Email</div>
            <v-text-field v-model="email" :error-messages="errorEmail" density="compact" :prepend-inner-icon="mdiEmailOutline" variant="outlined"></v-text-field>
            <div class="text-subtitle-1 text-medium-emphasis">Account</div>
            <v-text-field v-model="username" :error-messages="errUserName" density="compact" :prepend-inner-icon="mdiAccount" variant="outlined"></v-text-field>
            <div class="text-subtitle-1 text-medium-emphasis d-flex align-center justify-space-between">
                Password
            </div>

            <v-text-field v-model="passWord" :error-messages="errorPassword" :append-inner-icon="visible ? mdiEyeOff : mdiEye" :type="visible ? 'text' : 'password'"
                density="compact" prepend-inner-icon="mdi-lock-outline" variant="outlined"
                @click:append-inner="visible = !visible"></v-text-field>
            <v-btn class="mb-8" color="blue" size="large" variant="tonal" block @click="handleRegister">
                Register
            </v-btn>

            <v-card-text class="text-center">
                <RouterLink class="text-blue text-decoration-none" to="/login" rel="noopener noreferrer">
                    Sign in now <v-icon icon="mdi-chevron-right"></v-icon>
                </RouterLink>
            </v-card-text>
        </v-card>
    </div>
</template>
