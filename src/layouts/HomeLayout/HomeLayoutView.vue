<script setup>
// library 
import { ref } from 'vue'
import { mdiMenu, mdiHome, mdiMagnify, mdiCog, mdiLogout } from '@mdi/js'
import avataruser from '@/assets/img/useravatar.jpg'
import './homelayout.scss'
// component
import GroupChatTitle from '@/components/GroupChatTitle/GroupChatTitle.vue';
// biến 
const drawer = ref(true)


</script>

<template>
  <v-app id="inspire" style="height: 100vh; overflow-y: hidden;">
    <v-navigation-drawer v-model="drawer" width="300">
      <v-menu class="ps-2 pe-2">
        <template v-slot:activator="{ props }">
          <v-card style="cursor: pointer;" v-bind="props">
            <v-list-item class="mt-2 mb-2" :prepend-avatar="avataruser" subtitle="sandra_a88@gmailcom"
              title="Sandra Adams"></v-list-item>
          </v-card>
        </template>

        <v-list>
          <v-list-item value="account" :prepend-icon="mdiCog">
            <RouterLink style="color: unset; text-decoration: none;font-size: unset;" to="/account"> Account</RouterLink>
          </v-list-item>
          <v-list-item value="logout" :prepend-icon="mdiLogout">
            <v-list-item-title> Logout</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
      <v-divider></v-divider>

      <v-list nav>
        <v-list-item :prepend-icon="mdiHome" to="/dashboard" title="Dashboard" value="dashboard"></v-list-item>
        <v-list-item :prepend-icon="mdiMagnify" to="/" title="New Search" value="newsearch"></v-list-item>
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
      <v-app-bar-title style="justify-content:end ;">
        <div class=" d-flex align-center justify-center pe-15">
            <img style="border-radius: 50%;" src="https://i.pinimg.com/564x/9d/e4/97/9de497cbac67554d199b5945006f14d0.jpg" alt="Logo" width="35" height="35" />
            <div class="ms-3">PeopleSearch</div>
          </div>
      </v-app-bar-title>
    </v-app-bar>

    <v-main style="height: 100vh; overflow-y: unset;">
      <!-- Your main content goes here -->
      <RouterView />
      
    </v-main>

  </v-app>
</template>

<style scoped>

</style>