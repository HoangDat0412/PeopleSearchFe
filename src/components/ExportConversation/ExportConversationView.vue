<script setup>
import SearchRequestView from "@/components/SearchRequest/SearchRequestView.vue";
import logo from "@/assets/img/darklogo.jpeg";
import cccd from "@/assets/img/cccd.png";
const props = defineProps(["chat"]);
const chat = props.chat;
// import NoteView from '@/components/Note/NoteView.vue'
</script>

<template>
  <SearchRequestView
    :search="chat?.content?.search"
    style="height: fit-content"
  />
  <v-col cols="12" class="d-flex align-start" style="height: fit-content">
    <div class="me-3">
      <v-avatar>
        <v-img alt="People Search" :src="logo"></v-img>
      </v-avatar>
    </div>
    <div>
      <v-toolbar-title style="font-size: 15px">People Search</v-toolbar-title>
      <v-card v-if="chat?.content?.result.length === 0">
        <v-card-item>
          <p>Please Give Me More Information To Find People</p>
          <p class="mt-2">Search Request Example:</p>
          <p>Name: Trịnh Quốc Việt</p>
          <p>Address: 387 Lê Văn Lương P.Tân Phong Q.07 TPHCM</p>
        </v-card-item>
      </v-card>
    </div>
  </v-col>
  <v-container v-if="chat?.content?.result?.length > 0" class="resultchat">
    <v-row>
      <v-col cols="12" v-for="(item, key) in chat?.content?.result" :key="key">
        <v-card
          :color="color"
          :variant="variant"
          class="mx-auto cardresultsearch mb-2"
        >
          <v-card-item>
            <v-row id="element-to-print" class="mt-1">
              <v-col cols="12" md="6">
                <div class="">
                  <div class="text-subtitle-2" style="font-weight: 600">
                    CCCD/Passport
                  </div>
                  <img width="100%" :src="cccd" alt="Căn Cước Công Dân" />
                </div>
              </v-col>
              <v-col cols="12" md="6">
                <v-card class="">
                  <v-card-item>
                    <p class="mb-1">FullName: {{ item?.name }}</p>
                    <p class="mb-1">Email: {{ item?.email }}</p>
                    <p class="mb-1">Phone: {{ item?.phone }}</p>
                    <p class="mb-1">BirthDay: {{ item?.birth }}</p>
                    <p class="mb-1">IP: {{ item?.ip }}</p>
                    <p class="mb-1">CCCD/Passport: {{ item?.identity_id }}</p>
                    <p class="mb-1">Link Facebook: {{ item?.linkfacebook }}</p>
                    <p class="mb-1">Gender: {{ item?.gender }}</p>
                    <p class="mb-1">Address: {{ item?.address }}</p>
                    <p class="mb-1">Relationship: {{ item?.relationship }}</p>
                    <p class="mb-1">Bio: {{ item?.biography }}</p>
                  </v-card-item>
                </v-card>
              </v-col>
            </v-row>
          </v-card-item>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

