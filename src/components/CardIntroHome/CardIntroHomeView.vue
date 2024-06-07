<script setup>
import { ref } from "vue";
import {mdiChevronUp,mdiChevronDown} from '@mdi/js'
const props = defineProps(['title','subtitle','text'])
const show = ref(false);
</script>

<template>
  <v-card class="mx-auto" max-width="344">
    <v-card-title>{{ props?.title }}</v-card-title>
    <v-card-subtitle> {{ props?.subtitle }}</v-card-subtitle>
    <v-card-actions>
      <v-btn color="orange-lighten-2" text="Explore" to="/"></v-btn>
      <v-spacer></v-spacer>
      <v-btn
        :icon="show ? mdiChevronUp : mdiChevronDown"
        @click="show = !show"
      ></v-btn>
    </v-card-actions>
    <v-expand-transition>
      <div v-show="show">
        <v-divider></v-divider>
        <v-card-text>
            {{ props?.text }}
        </v-card-text>
      </div>
    </v-expand-transition>
  </v-card>
</template>
