<script setup>
import banerlogo from "@/assets/img/lightbannerlogo.png";
import banerlogodark from "@/assets/img/darkbannerlogo.png";
import { useUserStore } from "@/stores/user";

const user = useUserStore()
</script>

<template>
    <v-divider></v-divider>
    <v-footer >
        
      <v-container>
        <v-row>
          <v-col cols="12" md="4">
            <h3>Help & Support</h3>
            <ul>
              <li><a href="/guide">View Tutorials</a></li>
              <li><a href="mailto:peoplesearch@gmail.com">Request a New Feature</a></li>
              <li><a href="mailto:peoplesearch@gmail.com">Report a Bug</a></li>
            </ul>
          </v-col>
          <v-col cols="12" md="4">
            <h3>Community & Tools</h3>
            <ul>
              <li><a href="#!">Join Our Community</a></li>
            </ul>
          </v-col>
          <v-col cols="12" md="4">
            <h3>Terms & Policies</h3>
            <ul>
              <li><a href="/guide">Privacy Notice</a></li>
              <li><a href="/guide">Terms of Service</a></li>
            </ul>
          </v-col>
        </v-row>
        <v-row class="mt-5 d-flex justify-center">
          <div class=" d-flex align-center">
            <v-img v-if="user.theme === 'light' " :src="banerlogo" alt="Logo" width="100" height="100" />
            <v-img v-else :src="banerlogodark" alt="Logo"  width="100" height="100" />
            <div class="ms-3">&copy; 2024 PeopleSearch</div>
          </div>
        </v-row>
      </v-container>
    </v-footer>
  </template>
  
  <style scoped>
  h3 {
    font-size: 1.2em;
    font-weight: 500;
  }
  ul {
    list-style-type: none;
    padding: 0;
  }
  ul li {
    margin: 5px 0;
  }
  ul li a {
    color: unset;
    text-decoration: none;
  }
  ul li a:hover {
    text-decoration: underline;
  }
  </style>