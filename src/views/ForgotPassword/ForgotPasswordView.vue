<script setup>
</script>

<template>
    <div>
        <v-img class="mx-auto my-6" max-width="228"
            src="https://cdn.vuetifyjs.com/docs/images/logos/vuetify-logo-v3-slim-text-light.svg"></v-img>
        <v-card class="mx-auto pa-12 pb-8" elevation="8" max-width="448" rounded="lg">
            <div class="text-subtitle-1 text-medium-emphasis">Email</div>
            <v-text-field density="compact" :prepend-inner-icon="mdiEmailOutline" variant="outlined"></v-text-field>
            <v-btn class="mb-3" color="blue" size="large" variant="tonal" block>
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