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
import KeyBoardInputEmail from "../KeyBoardInput/KeyBoardInputEmail.vue";
import KeyBoardInputLinkFacebook from "@/components/KeyBoardInput/KeyBoardInputLinkFaceBook.vue";
import KeyBoardInputAddress from '@/components/KeyBoardInput/KeyBoardInputAddress.vue'
</script>

<template>
  <v-dialog v-model="show.showFormSearch" width="auto">
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
          Search Information
        </p>
        <v-row dense>
          <v-col cols="12" sm="6">
            <KeyBoardInputName v-if="show.showNameKeyboard" />
            <v-text-field
              v-else
              v-model="inputStore.name"
              label="Full Name"
              variant="solo"
            >
              <template v-slot:append>
                <v-icon
                  :icon="mdiKeyboard"
                  @click="show.showNameKeyboard = true"
                  class="me-1"
                ></v-icon>
              </template>
            </v-text-field>
          </v-col>

          <v-col cols="12" sm="6">
            <v-text-field
              v-model="inputStore.age"
              label="Age"
              variant="solo"
            ></v-text-field>
          </v-col>

          <v-col cols="12" sm="6">
            <v-text-field label="IP" variant="solo"></v-text-field>
          </v-col>

          <v-col cols="12" sm="6">
            <KeyBoardInputEmail v-if="show.showEmailKeyboard" />
            <v-text-field
              v-else
              v-model="inputStore.email"
              label="Email"
              variant="solo"
            >
              <template v-slot:append>
                <v-icon
                  :icon="mdiKeyboard"
                  @click="show.showEmailKeyboard = true"
                  class="me-1"
                ></v-icon>
              </template>
            </v-text-field>
          </v-col>

          <v-col cols="12" sm="6">
            <v-text-field
              v-model="inputStore.cccd"
              label="CCCD/Passport"
              variant="solo"
            ></v-text-field>
          </v-col>

          <v-col cols="12" sm="6">
            <v-text-field
              v-model="inputStore.phone"
              label="Phone"
              variant="solo"
            ></v-text-field>
          </v-col>
          <v-col cols="12" sm="6">
            <v-text-field label="MST" variant="solo"></v-text-field>
          </v-col>

          <v-col cols="12" sm="6">
            <KeyBoardInputLinkFacebook v-if="show.showLinkFaceBookKeyboard" />
            <v-text-field
              v-else
              v-model="inputStore.linkfacebook"
              label="Link Facebook"
              variant="solo"
            >
              <template v-slot:append>
                <v-icon
                  :icon="mdiKeyboard"
                  @click="show.showLinkFaceBookKeyboard = true"
                  class="me-1"
                ></v-icon>
              </template>
            </v-text-field>
          </v-col>

          <v-col cols="12" sm="6">
            <v-select
              :items="['Male', 'Femail']"
              v-model="inputStore.gender"
              label="Gender"
              variant="solo"
            ></v-select>
          </v-col>

          <v-col cols="12" sm="6">
            <KeyBoardInputAddress v-if="show.showAddressKeyboard" />
            <v-text-field
              v-else
              label="Address"
              v-model="inputStore.address"
              variant="solo"
            >
              <template v-slot:append>
                <v-icon
                  :icon="mdiKeyboard"
                  @click="show.showAddressKeyboard = true"
                  class="me-1"
                ></v-icon>
              </template>
            </v-text-field>
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
          @click="show.showFormSearch = false"
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
