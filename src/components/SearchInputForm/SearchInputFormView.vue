<script setup>
// khai báo thư viện
import { ref, watch } from "vue";
import { mdiSend } from "@mdi/js";
import { useShowStore } from "@/stores/show";
import { useSearchStore } from "@/stores/search";
import { notify } from "@kyvg/vue3-notification";
import { useRoute } from "vue-router";
import KeyboardModelView from "../KeyboardModel/KeyboardModelView.vue";
import { useInputStore } from "@/stores/input";
import FormSearchName from "@/components/FormSearchName/FormSearchName.vue"
import SelectLanguage from "../SelectLanguage/SelectLanguage.vue";
// khai báo biến
const storeInput = useInputStore();
const search = ref(storeInput.search);
const show = useShowStore();
const usesearch = useSearchStore();
const route = useRoute();
const language = ref("keyboard");

// khai báo function

const handleChangeKeyBoard = () => {
  show.showKeyBoard = true;
};

watch(language, () => {
  handleChangeKeyBoard();
});

const handleSearch = async () => {
  if (search.value.trim() !== "") {
    if (route.name === "chat") {
      show.SetShowSpinner(true);
      await usesearch.SimpleSearchName(search.value, route.params.id);
      search.value = "";
      show.SetShowSpinner(false);
    } else {
      show.SetShowSpinner(true);
      await usesearch.CreateChat({
        name: search.value,
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
  <div class="wrap-input">
    <div class="custom-input d-flex align-center pt-4 pb-4">
      <v-text-field
        v-model="search"
        placeholder="Search by full name - phone number - passport - address"
        variant="solo"
        density="compact"
        outlined
        dense
        hide-details
      >
        <template v-slot:prepend>
          <SelectLanguage/>
        </template>
      </v-text-field>
      <div class="ms-auto">
        <!-- <div style="width: 80%;">
          <v-btn
          size="small"
          @click="show.showFormSearchName = true"
        >
          <span class="d-none d-md-inline">Search FullName</span>
        </v-btn>
        <v-btn
          size="small"
          @click="show.showFormSearchEmail = true"
        >
          <span class="d-none d-md-inline">Search Email</span>
        </v-btn>
        <v-btn
          size="small"
          @click="show.showFormSearchEmail = true"
        >
          <span class="d-none d-md-inline">Search Phone</span>
        </v-btn>
        <v-btn
          size="small"
          @click="show.showFormSearchEmail = true"
        >
          <span class="d-none d-md-inline">Search CCCD/Passport</span>
        </v-btn>
        <v-btn
          size="small"
          @click="show.showFormSearchEmail = true"
        >
          <span class="d-none d-md-inline">Search linkfacebook</span>
        </v-btn>
        </div> -->

        <v-progress-circular
          v-if="show.showSpiner"
          class="ms-auto"
          color="primary"
          indeterminate
        ></v-progress-circular>
        <v-btn v-else size="small" class="ms-auto" icon @click="handleSearch">
          <v-icon :icon="mdiSend" />
        </v-btn>
      </div>
    </div>
    <KeyboardModelView :language="language" />
    <FormSearchName/>
  </div>
</template>
