<script setup>
// khai báo thư viện
import { ref } from "vue";
import {
  mdiAttachment,
  mdiFormSelect,
  mdiMicrophone,
  mdiSend,
  mdiNoteText,
} from "@mdi/js";
import "./searchinput.scss";
import { useShowStore } from "@/stores/show";
import { useSearchStore } from "@/stores/search";
import { notify } from "@kyvg/vue3-notification";
import { useRoute } from "vue-router";
import KeyboardModelView from "../KeyboardModel/KeyboardModelView.vue";
import { useInputStore } from "@/stores/input";

// khai báo biến
const storeInput = useInputStore()
const search = ref(storeInput.search);
const show = useShowStore();
const usesearch = useSearchStore();
const route = useRoute();
const language = ref("keyboard")

// khai báo function

const handleChangeKeyBoard = ()=>{
  show.showKeyBoard = true
}

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
    <div class="custom-input">
      <v-text-field
        v-model="search"
        placeholder="Search by full name"
        variant="solo"
        density="compact"
        outlined
        dense
        hide-details
      ></v-text-field>
      <div class="actions">
        <v-btn
          size="small"
          :prepend-icon="mdiFormSelect"
          @click="show.showFormSearch = true"
        >
          <template v-slot:prepend>
            <v-icon color="primary"></v-icon>
          </template>
          <span class="d-none d-md-inline">Search Information</span>
        </v-btn>
        <v-btn
          size="small"
          :prepend-icon="mdiAttachment"
          @click="show.showFormVideo = true"
        >
          <template v-slot:prepend>
            <v-icon color="primary"></v-icon>
          </template>
          <span class="d-none d-md-inline">Search Image/Video</span>
        </v-btn>
        <v-btn
          size="small"
          :prepend-icon="mdiMicrophone"
          @click="show.showFormAudio = true"
        >
          <template v-slot:prepend>
            <v-icon color="primary"></v-icon>
          </template>
          <span class="d-none d-md-inline">Search Audio</span>
        </v-btn>

        <v-btn
          size="small"
          :prepend-icon="mdiNoteText"
          @click="show.showNote = !show.showNote"
        >
          <template v-slot:prepend>
            <v-icon color="primary"></v-icon>
          </template>
          <span class="d-none d-md-inline">Edit Note</span>
        </v-btn>

        <select v-model="language" @change="handleChangeKeyBoard" class="v-btn v-btn--elevated v-theme--light v-btn--density-default v-btn--size-small v-btn--variant-elevated">
          <option value="keyboard" disabled>Keyboard</option>
          <option value="English" >English</option>
          <option value="French" >French</option>
          <option value="Russian" >Russian</option>
          <option value="Hindi" >Hindi</option>
          <option value="Hebrew" >Hebrew</option>
        </select>

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
    <!-- 
    <v-btn @click="show.showKeyBoard = true">
      Open KeyBoard
    </v-btn> -->
    <KeyboardModelView :language="language"/>
  </div>
</template>
