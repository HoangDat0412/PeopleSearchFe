<script setup>
import html2pdf from "html2pdf.js";
import cccd from "@/assets/img/cccd.png";
import AlbumImageView from "@/components/AlbumImage/AlbumImageView.vue";
import AlbumVideoView from "@/components/AlbumVideo/AlbumVideoView.vue";
import MapView from "@/components/Map/MapView.vue";


// khai báo biến
const props = defineProps(['item', 'resultlength'])
const item = props?.item
const resultlength = props?.resultlength

const exportToPDF = () => {
  html2pdf(document.getElementById("element-to-print"), {
    margin: 1,
    filename: `${item?.name}.pdf`,
    image: { type: "png", quality: 0.98 },
    html2canvas: { scale: 2 },
    jsPDF: { unit: "in", format: "letter", orientation: "portrait" },
    enableLinks: true,
  });
};
</script>

<template>
  <v-carousel-item>
    <v-card
      :color="color"
      :variant="variant"
      class="mx-auto cardresultsearch mb-2"
    >
      <v-card-item>
        <v-row id="element-to-print">
          <v-col cols="12" md="6">
            <div class="">
              <div class="text-subtitle-2" style="font-weight: 600">
                CCCD/Passport
              </div>
              <img width="100%" :src="cccd" alt="Căn Cước Công Dân" />
              <div class="text-subtitle-2 text-center" style="font-weight: 600">
                Search Result: {{ resultlength }}
              </div>
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
        <v-row>
          <v-col cols="12" md="6">
            <div class="text-subtitle-2 mb-1 mt-5" style="font-weight: 600">
                Album Audio
              </div>
              <v-row>
                <v-col
                  v-for="n in 6"
                  :key="n"
                  class="d-flex child-flex"
                  cols="4"
                >
                  <audio controls loop>
                    <source
                      src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/9473/new_year_dubstep_minimix.ogg"
                      type="audio/ogg"
                    />
                    Your browser dose not Support the audio Tag
                  </audio>
                </v-col>
              </v-row>
          </v-col>

          <v-col cols="12" md="6">
            <div class="text-subtitle-2 mb-1 mt-5" style="font-weight: 600">
                Lastest Location Found
              </div>
              <MapView class="mt-4" />
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12" md="6">
            <div class="text-subtitle-2" style="font-weight: 600">
              Album Images
            </div>
            <AlbumImageView />
          </v-col>

          <v-col cols="12" md="6">
            <div class="text-subtitle-2" style="font-weight: 600">
              Album Video
            </div>
            <AlbumVideoView />
          </v-col>

          <v-col cols="12" md="6" style="padding-bottom: 80px">
            <v-btn @click="exportToPDF">DownLoad PDF</v-btn>
          </v-col>
        </v-row>
      </v-card-item>
    </v-card>
  </v-carousel-item>
</template>
