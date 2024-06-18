<script setup>
import { useInputStore } from "@/stores/input";
import { useSearchStore } from "@/stores/search";
import { useShowStore } from "@/stores/show";
import { checkNull } from "@/validation/validation";
import { notify } from "@kyvg/vue3-notification";
import { mdiFormSelect, mdiKeyboard } from "@mdi/js";
import { useRoute } from "vue-router";
const show = useShowStore();
const props = defineProps(["chatid"]);
const chatid = props.chatid;
const usesearch = useSearchStore();
const route = useRoute();

const inputStore = useInputStore();

const handleSearch = async () => {
  const flag =
    checkNull(inputStore.name) ||
    checkNull(inputStore.gender) ||
    checkNull(inputStore.phone) ||
    checkNull(inputStore.age) ||
    checkNull(inputStore.email) ||
    checkNull(inputStore.address) ||
    checkNull(inputStore.cccd) ||
    checkNull(inputStore.linkfacebook);

  const data = {
    name: inputStore.name,
    email: inputStore.email,
    address: inputStore.address,
    national: inputStore.national,
    phone: inputStore.phone,
    cccd: inputStore.cccd,
    gender: inputStore.gender,
    linkfacebook: inputStore.linkfacebook,
    age: inputStore.age,
    // birth:
  };

  if (flag) {
    show.showFormSearch = false;
    show.showSpiner = true;
    if (route.name === "chat") {
      await usesearch.MultipleSearch(data, chatid);
    } else {
      await usesearch.CreateChatMultipleSearch(data);
    }

    show.showSpiner = false;
  } else {
    notify({
      text: "Please input information for search",
      type: "error",
    });
  }
};
// show input keyboard
import KeyBoardInputName from "@/components/KeyBoardInput/KeyBoardInputName.vue";
</script>

<template>
  <v-dialog v-model="show.showFormSearchName" width="500">
    <v-card>
      <v-card-text>
        <p class="text-h6 mb-6 mt-2 d-flex align-center">
          <span class="me-2">
            <v-icon
              color="success"
              style="font-size: 22px"
              :icon="mdiFormSelect"
            ></v-icon>
          </span>
          Search By Full Name
        </p>
        <v-row dense>
          <v-col cols="12" >
            <KeyBoardInputName v-if="show.showNameKeyboard" />
            <div v-else>
              <div class="text-subtitle-1 text-medium-emphasis">Full Name</div>
              <v-text-field v-model="inputStore.name" variant="solo" density="compact">
                <template v-slot:prepend>
                  <v-icon
                    :icon="mdiKeyboard"
                    @click="show.showNameKeyboard = true"
                    class="me-1"
                  ></v-icon>
                </template>
              </v-text-field>
            </div>
          </v-col>
        </v-row>

        <small class="text-caption text-medium-emphasis"
          >*indicates required field</small
        >
      </v-card-text>

      <v-divider></v-divider>

      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn
          text="Close"
          variant="plain"
          @click="show.showFormSearchName = false"
        ></v-btn>
        <v-btn
          color="primary"
          text="Search"
          variant="tonal"
          @click="handleSearch"
        ></v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>
