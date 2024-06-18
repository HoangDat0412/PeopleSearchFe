<script setup>
// thư viện
import { ref } from 'vue';
import { mdiEmailOutline, mdiEyeOff, mdiEye } from '@mdi/js'
import { useUserStore } from '@/stores/user';
import { checkNull } from '@/validation/validation';
import banerlogo from "@/assets/img/darkbannerlogo.png"
// khai báo biến
const visible = ref(false)
const user = useUserStore()
const passWord = ref('')
const errorPassword = ref('')
const username = ref('')
const errUserName = ref('')

const handleLogin = async () => {
  if (!checkNull(passWord.value)) {
    errorPassword.value = 'password không được bỏ trống'
  } else {
    errorPassword.value = ''
  }
  if (!checkNull(username.value)) {
    errUserName.value = 'password không được bỏ trống'
  } else {
    errUserName.value = ''
  }
  const flag = checkNull(passWord.value) && checkNull(username.value)
  if (flag) {
    await user.login({
      username: username.value,
      password: passWord.value
    })
  }
}
</script>
<template>
    <div style="overflow-y: hidden; height: 100vh;" class="pb-5 login">
        <v-img class="mx-auto mt-6" max-width="270"
            :src="banerlogo"></v-img>

        <v-card class="mx-auto pa-12 pb-8" elevation="8" max-width="448" rounded="lg">
            <div class="text-subtitle-1 text-medium-emphasis">Account</div>

            <v-text-field v-model="username" :error-messages="errUserName" density="compact" :prepend-inner-icon="mdiEmailOutline" variant="outlined"></v-text-field>

            <div class="text-subtitle-1 text-medium-emphasis d-flex align-center justify-space-between">
                Password

                <RouterLink class="text-caption text-decoration-none text-blue" to="/forgotpassword" rel="noopener noreferrer"
                    target="_blank">
                    Forgot login password?</RouterLink>
            </div>

            <v-text-field v-model="passWord" :error-messages="errorPassword" :append-inner-icon="visible ? mdiEyeOff : mdiEye" :type="visible ? 'text' : 'password'"
                density="compact" prepend-inner-icon="mdi-lock-outline" variant="outlined"
                @click:append-inner="visible = !visible"></v-text-field>
<!-- 
            <v-card class="mb-12" color="surface-variant" variant="tonal">
                <v-card-text class="text-medium-emphasis text-caption d-flex flex-column justify-center">
                    <span class="text-subtitle-2 text-center">Login With</span>
                    <div class="text-center mt-3">
                        <div>
                            <v-btn  color="primary" class="me-2" style="font-size: 18px;">
                                <v-icon :icon="mdiFacebook"></v-icon>
                            </v-btn>

                            <v-btn  color="red" style="font-size: 18px;">
                                <v-icon :icon="mdiGmail"></v-icon>
                            </v-btn>
                        </div>
                    </div>
                </v-card-text>
            </v-card> -->

            <v-btn class="mb-2" color="blue" size="large" variant="tonal" block @click="handleLogin">
                Log In
            </v-btn>

            <v-card-text class="text-center">
                <RouterLink class="text-blue text-decoration-none" to="/register" rel="noopener noreferrer">
                    Sign up now <v-icon icon="mdi-chevron-right"></v-icon>
                </RouterLink>
            </v-card-text>
        </v-card>
    </div>
</template>

<style scoped>
.login{
    background: url('../../assets/img/background.jpg');
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
}
</style>
