<script setup>
import { useUserStore } from '@/stores/user';
import { ValidateEmail, checkNull } from '@/validation/validation';
import { ref } from 'vue';
import banerlogo from "@/assets/img/lightbannerlogo.png"

const email = ref("")
const erremail = ref("")
const user = useUserStore()
const handleResetPassWord = async () => {
  if (!checkNull(email.value)) {
    erremail.value = 'email không được bỏ trống'
  } 
 !ValidateEmail(email.value) ? (erremail.value = 'email is invalid') : (erremail.value = '')

  const flag = checkNull(email.value) && ValidateEmail(email.value)
  if (flag) {
    await user.resetPassword({
        email:email.value
    })
  }
}
</script>

<template>
    <div style="overflow-y: hidden; height: 100vh;" >
        <v-img class="mx-auto my-6" max-width="228"
            :src="banerlogo"></v-img>
        <v-card class="mx-auto pa-12 pb-8" elevation="8" max-width="448" rounded="lg">
            <div class="text-subtitle-1 text-medium-emphasis">Email</div>
            <v-text-field :error-messages="erremail" v-model="email" density="compact" :prepend-inner-icon="mdiEmailOutline" variant="outlined"></v-text-field>
            <v-btn @click="handleResetPassWord" class="mb-3" color="blue" size="large" variant="tonal" block>
                Forgot Password
            </v-btn>
            <v-card-text class="text-center">
                <RouterLink class="text-blue text-decoration-none" to="/login" rel="noopener noreferrer">
                    Sign in now <v-icon icon="mdi-chevron-right"></v-icon>
                </RouterLink>
            </v-card-text>
        </v-card>
    </div>
</template>

