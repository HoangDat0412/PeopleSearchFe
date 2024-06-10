<script setup>
import { ref, onMounted, watch } from "vue";
import Keyboard from "simple-keyboard";
import "simple-keyboard/build/css/index.css";
import './keyboard.scss'
import { useInputStore } from "@/stores/input";
import { mdiKeyboard } from "@mdi/js";
import { useShowStore } from "@/stores/show";
import {layouts,languages} from '@/utils/config'
const currentLanguage = ref("English");
const shiftToggle = ref(false);

let keyboard = null;
const storeInput = useInputStore();

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

const handleChange = (inputValue) => {
  storeInput.address = inputValue;
  keyboard.setInput(inputValue);
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
    <v-text-field label="Address" v-model="storeInput.address" variant="solo">
      <template v-slot:append>
        <v-icon :icon="mdiKeyboard" @click="show.showAddressKeyboard = false" class="me-1"></v-icon>
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

