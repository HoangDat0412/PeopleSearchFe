<script setup>
import { useInputStore } from '@/stores/input';
import { ref } from "vue";
const inputStore = useInputStore()
const language = ref("")
</script>

<template>

    <v-text-field label="Append inner" v-model="inputStore.name" variant="solo">
      <template v-slot:append>
        <select
          v-model="language"
          class="v-btn v-btn--elevated v-theme--light v-btn--density-default v-btn--size-small v-btn--variant-elevated"
        >
          <option value="keyboard" disabled>Keyboard</option>
          <option value="English">English</option>
          <option value="French">French</option>
          <option value="Russian">Russian</option>
          <option value="Hindi">Hindi</option>
          <option value="Hebrew">Hebrew</option>
        </select>
      </template>
    </v-text-field>

    




</template>
