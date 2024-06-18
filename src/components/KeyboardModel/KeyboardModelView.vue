<script setup>
import { useShowStore } from '@/stores/show';
import KeyBoardView from '../KeyBoard/KeyBoardView.vue';
import { useInputStore } from '@/stores/input';
import { useRoute } from 'vue-router';
import { useSearchStore } from '@/stores/search';
import { notify } from '@kyvg/vue3-notification';
const show = useShowStore()
const props = defineProps(['language'])
const storeInput = useInputStore()
const route = useRoute();
const usesearch = useSearchStore()
const handleSearch = async () => {
  if (storeInput.search.trim() !== "") {
    show.showKeyBoard = false
    if (route.name === "chat") {
      show.SetShowSpinner(true);
      await usesearch.SimpleSearchName(storeInput.search, route.params.id);
      storeInput.search = "";
      show.SetShowSpinner(false);
    } else {
      show.SetShowSpinner(true);
      await usesearch.CreateChat({
        name: storeInput.search,
        higlighted: 0,
        note: null,
      });
      show.SetShowSpinner(false);
    }
  } else {
    notify({
      title: "Please give the name you want to search",
      type: "error",
    });
  }
};

</script>

<template>
        <v-dialog
      v-model="show.showKeyBoard"
      width="600px"
    >
      <v-card
     

      >
        <div class="pt-5 ps-5 pb-3 pe-5">
          <KeyBoardView :language="props.language"/>
        </div>
        <template v-slot:actions>
          <v-btn
            class="ms-auto"
            text="Search"
            @click="handleSearch"
          ></v-btn>
        </template>
      </v-card>
    </v-dialog>
</template>