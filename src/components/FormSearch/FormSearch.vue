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

const handleShowKeyboard = ()=>{
  show.showNameKeyboard = false;
  show.showAddressKeyboard = false;
  show.showEmailKeyboard = false;
  show.showLinkFaceBookKeyboard = false
}

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
            <div v-else>
              <div class="text-subtitle-1 text-medium-emphasis">Full Name</div>
              <v-text-field v-model="inputStore.name" variant="solo" density="compact">
                <template v-slot:prepend>
                  <v-icon
                    :icon="mdiKeyboard"
                    @click="()=>{
                      handleShowKeyboard()
                      show.showNameKeyboard = true
                    }"
                    class="me-1"
                  ></v-icon>
                </template>
              </v-text-field>
            </div>
          </v-col>
          <v-col cols="12" sm="6">
            <KeyBoardInputLinkFacebook v-if="show.showLinkFaceBookKeyboard" />
            <div  v-else>
              <div class="text-subtitle-1 text-medium-emphasis">Link Facebook</div>
              <v-text-field
             
              v-model="inputStore.linkfacebook"
              density="compact"
              variant="solo"
            >
              <template v-slot:prepend>
                <v-icon
                  :icon="mdiKeyboard"
                  @click="()=>{
                      handleShowKeyboard()
                      show.showLinkFaceBookKeyboard = true
                    }"
                  class="me-1"
                ></v-icon>
              </template>
            </v-text-field>
            </div>
          </v-col>

          <v-col cols="12" sm="6">
            <KeyBoardInputEmail v-if="show.showEmailKeyboard" />
            <div v-else>
              <div class="text-subtitle-1 text-medium-emphasis">Email</div>
              <v-text-field
              v-model="inputStore.email"
              variant="solo"
              density="compact"
            >
              <template v-slot:prepend>
                <v-icon
                  :icon="mdiKeyboard"
                  @click="()=>{
                      handleShowKeyboard()
                      show.showEmailKeyboard = true
                    }"
                  class="me-1"
                ></v-icon>
              </template>
            </v-text-field>
            </div>
          </v-col>

          <v-col cols="12" sm="6">
            <KeyBoardInputAddress v-if="show.showAddressKeyboard" />
            <div  v-else>
              <div class="text-subtitle-1 text-medium-emphasis">Address</div>
              <v-text-field
              density="compact"
              v-model="inputStore.address"
              variant="solo"
            >
              <template v-slot:prepend>
                <v-icon
                  :icon="mdiKeyboard"
                  @click="()=>{
                      handleShowKeyboard()
                      show.showAddressKeyboard = true
                    }"
                  class="me-1"
                ></v-icon>
              </template>
            </v-text-field>
            </div>
          </v-col>

          
          <v-col cols="12" sm="6">
            <div class="text-subtitle-1 text-medium-emphasis">Age</div>
            <v-text-field
              v-model="inputStore.age"
              variant="solo"
              density="compact"
            ></v-text-field>
          </v-col>

          <v-col cols="12" sm="6">
            <div class="text-subtitle-1 text-medium-emphasis">Internet Protocol</div>
            <v-text-field variant="solo" density="compact"></v-text-field>
          </v-col>

          <v-col cols="12" sm="6">
            <div class="text-subtitle-1 text-medium-emphasis">CCCD/Passport</div>
            <v-text-field
              v-model="inputStore.cccd"
              density="compact"
              variant="solo"
            ></v-text-field>
          </v-col>

          <v-col cols="12" sm="6">
            <div class="text-subtitle-1 text-medium-emphasis">Phone</div>
            <v-text-field
              v-model="inputStore.phone"
              density="compact"
              variant="solo"
            ></v-text-field>
          </v-col>
          <v-col cols="12" sm="6">
            <div class="text-subtitle-1 text-medium-emphasis">MST</div>
            <v-text-field density="compact" variant="solo"></v-text-field>
          </v-col>



          <v-col cols="12" sm="6">
            <div class="text-subtitle-1 text-medium-emphasis">Gender</div>
            <v-select
              :items="['male', 'femail']"
              v-model="inputStore.gender"
              density="compact"
              variant="solo"
            ></v-select>
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
