<script setup>
import { ref, watch } from "vue";
import { useShowStore } from "@/stores/show";
const show = useShowStore();
const language = ref("Keyboard");
import { languages } from "@/utils/config";
// khai báo function
const handleChangeKeyBoard = () => {
  show.showKeyBoard = true;
};
watch(language, () => {
  handleChangeKeyBoard();
});
</script>

<template>
  <v-autocomplete
    v-model="language"
    :items="languages"
    hide-details
    variant="solo"
    density="compact"
    class="v-btn--variant-elevated"
  ></v-autocomplete>
</template>
