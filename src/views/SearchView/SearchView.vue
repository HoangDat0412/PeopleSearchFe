<script setup>
// thư viện,component
import './searchview.scss'
import SearchInput from '../../components/SearchInput/SearchInputView.vue'
import FormSearchVideo from '@/components/FormSearchVideo/FormSearchVideo.vue'
import FormSearchAudio from '@/components/FormSearchAudio/FormSearchAudio.vue';
import FormSearch from '@/components/FormSearch/FormSearch.vue'
import { mdiAttachment, mdiFormSelect, mdiMicrophone} from '@mdi/js';
import { mdiHandWaveOutline } from '@mdi/js';
import { useShowStore } from '@/stores/show';

// khai báo biến 
const show = useShowStore();
</script>

<template>
  <v-app class="searchview">
    <v-container>
      <v-row style="height: 68vh; overflow-y: auto; align-items: center; gap: 20px;">
        <v-col cols="12" class="d-flex flex-column text-center welcome">
          <h1>Welcome to People Search <v-icon class="wave-hand" :icon="mdiHandWaveOutline"></v-icon>
          </h1>
          <div class="d-flex justify-center">
            <p>
              Get started by search People By Information, Images, Audio and Video
            </p>
          </div>

          <v-row align="center" justify="center" dense class="mt-5">
            <v-col cols="12" sm="6" md="4" >
              <v-card class="mx-auto" max-width="500" title="Search By Information" link @click="show.showFormSearch = true">
                <template v-slot:prepend>
                  <v-icon color="primary" :icon="mdiFormSelect"></v-icon>
                </template>
                <v-card-text style="text-align: left;">Give me fullname, email, phone, cccd/passport, age, etc to find someone</v-card-text>
              </v-card>
            </v-col>
            <v-col cols="12" sm="6" md="4">
              <v-card class="mx-auto" max-width="500" title="Search By Image/Video" link @click="show.showFormVideo = true">
                <template v-slot:prepend>
                  <v-icon color="primary" :icon="mdiAttachment"></v-icon>
                </template>
                <v-card-text style="text-align: left;">Give me a photo/video of a person. I can tell you his/her all bio insformation i have</v-card-text>
              </v-card>
            </v-col>
            <v-col cols="12" sm="6" md="4">
              <v-card class="mx-auto" max-width="500" title="Search By Void/Audio" link @click="show.showFormAudio = true">
                <template v-slot:prepend>
                  <v-icon color="primary" :icon="mdiMicrophone"></v-icon>
                </template>
                <v-card-text style="text-align: left;">Give me a file of voice. I can tell you something I realize from them</v-card-text>
              </v-card>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
      <SearchInput />
      <FormSearchVideo />
      <FormSearchAudio />
      <FormSearch />
    </v-container>
  </v-app>
</template>
