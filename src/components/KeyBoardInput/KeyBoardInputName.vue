<script setup>
import { ref, onMounted, watch } from "vue";
import Keyboard from "simple-keyboard";
import "simple-keyboard/build/css/index.css";
import { useInputStore } from "@/stores/input";
import { mdiKeyboard } from "@mdi/js";
import { useShowStore } from "@/stores/show";
const currentLanguage = ref("English");
const shiftToggle = ref(false);

let keyboard = null;
const storeInput = useInputStore();

import {layouts,languages} from '@/utils/config'

const handleChange = (inputValue) => {
  storeInput.name = inputValue;
  keyboard.setInput(inputValue);
};

const handleKeyPress = (button) => {
  if (button === "{shift}" || button === "{lock}") handleShift();
};

const handleShift = () => {
  shiftToggle.value = !shiftToggle.value;
  const layoutName = shiftToggle.value ? "shift" : "default";
  keyboard.setOptions({
    layoutName,
  });
};

const changeLanguage = () => {
  keyboard.setOptions({
    layout: layouts[currentLanguage.value],
    layoutName: "default"
  });
  shiftToggle.value = false;
};

onMounted(() => {
  keyboard = new Keyboard(".simple-keyboard", {
    onChange: handleChange,
    onKeyPress: handleKeyPress,
    layout: layouts[currentLanguage.value],
    layoutName: "default",
  });
})

watch(currentLanguage, () => {
  changeLanguage();
});

const show = useShowStore()

</script>

<template>

  <div class="keyboard-container">
    <v-text-field label="Full Name" v-model="storeInput.name" variant="solo">
      <template v-slot:append>
        <v-icon :icon="mdiKeyboard" @click="show.showNameKeyboard = false" class="me-1"></v-icon>
        <v-select
          v-model="currentLanguage"
          :items="languages"
          dense
          hide-details
          outlined
          class="language-select"
        ></v-select>
      </template>
    </v-text-field>
    <div  class="simple-keyboard"></div>
  </div>
</template>

