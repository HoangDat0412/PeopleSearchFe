<script setup>
import html2pdf from "html2pdf.js";
import cccd from "@/assets/img/cccd.png";
import AlbumImageView from "@/components/AlbumImage/AlbumImageView.vue";
import AlbumVideoView from "@/components/AlbumVideo/AlbumVideoView.vue";
import MapView from "@/components/Map/MapView.vue";
const exportToPDF = () => {
  html2pdf(document.getElementById("element-to-print"), {
    margin: 1,
    filename: "HoangTuanAnhDat.pdf",
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
                Search Result: 10
              </div>
            </div>
           
          </v-col>
          <v-col cols="12" md="6">
            <v-card class="">
              <v-card-item>
                <p class="mb-1">FullName: Hoàng Tuấn Anh Đạt</p>
                <p class="mb-1">Email: hoang2811dat@gmail.com</p>
                <p class="mb-1">Phone: 0965820296</p>
                <p class="mb-1">Age: 21</p>
                <p class="mb-1">IP: Not Found</p>
                <p class="mb-1">CCCD/Passport: Not Found</p>
                <p class="mb-1">MST: Not Found</p>
                <p class="mb-1">Link Facebook: Not Found</p>
                <p class="mb-1">Gender: Male</p>
                <p class="mb-1">Address: Hà Nội</p>
                <p class="mb-1">Relationship:</p>
                <p class="mb-1">Bio:</p>
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
