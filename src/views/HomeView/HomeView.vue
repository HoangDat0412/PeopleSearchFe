<script setup>
import "./home.scss";
import CardIntroHomeView from "@/components/CardIntroHome/CardIntroHomeView.vue";
import { ref } from "vue";
import ChattitleHome from '@/components/ChatTitleHome/ChatTitleHome.vue'
import FooterView from '@/components/Footer/FooterView.vue'
// khai báo biến
const tab = ref(null);
// const show = useShowStore()
 import KeyBoard from "@/components/KeyBoard/KeyBoard.vue";
// import { useShowStore } from "@/stores/show";
</script>

<template>
  <v-container class="pa-4" fluid style="height: 100%; overflow-y: auto">
    <v-row>
      <v-col cols="12">
        <h1 style="font-weight: 500">General</h1>
      </v-col>
    </v-row>
    <v-row class="mb-6">
      <v-col cols="12" class="mt-1">
        <h2>Get started with Chat</h2>
      </v-col>
      <v-col cols="12" sm="6" md="4">
        <CardIntroHomeView
          title="Search By Information"
          subtitle="1000 million people"
          text="If you want to find people give me name, email, phone, cccd, passport, age, etc. I will give you detail information of this people and album images, album video, album void."
        />
      </v-col>
      <v-col cols="12" sm="6" md="4">
        <CardIntroHomeView
          title="Search Photo and Video"
          subtitle="2000 million file photo & video"
          text="If you want to find people by photo and video you have, give me and I will give you detail information people of this photo or video and album images, album video, album void."
        />
      </v-col>
      <v-col cols="12" sm="6" md="4">
        <CardIntroHomeView
          title="Search Void and Audio"
          subtitle="1500 million file audio"
          text="If you want to find people by file music, void or audio, give me and I will give you detail information people of this file and album images, album video, album void."
        />
      </v-col>
      <v-col cols="12" sm="6" md="4">
        <CardIntroHomeView
          title="Discover Vehicle"
          subtitle="1500 million vehicle"
          text="Give me a number palate of car or motobike, etc. I can  tell you something such as: last location found, kind of vehicle, owner, etc."
        />
      </v-col>
      <v-col cols="12" sm="6" md="4">
        <CardIntroHomeView
          title="Discover Picture"
          subtitle="2500 million picture, draw"
          text="Give me file of video or picture or draw, etc. I can tell you something I relize from them."
        />
      </v-col>
    </v-row>

    <v-row class="mb-12">
      <v-col cols="12" class="mt-1">
        <h2>Teamspace activity</h2>
      </v-col>
      <v-col cols="12">
        <v-card>
          <v-tabs v-model="tab">
            <v-tab value="one">Hightlight chat</v-tab>
            <v-tab value="two">Recently created</v-tab>
            <v-tab value="three">All chat</v-tab>
          </v-tabs>

          <v-card-text>
            <v-tabs-window v-model="tab">
              <v-tabs-window-item value="one">
                <v-row align="center" dense class="mt-3 mb-3">
                  <v-col cols="12" sm="4" md="3">
                    <ChattitleHome/>
                  </v-col>
                </v-row>
              </v-tabs-window-item>
              <v-tabs-window-item value="two"> 
                <v-row align="center" dense class="mt-3 mb-3">
                  <v-col cols="12" sm="4" md="3">
                    <ChattitleHome/>
                  </v-col>
                </v-row>  
              </v-tabs-window-item>
              <v-tabs-window-item value="three"> 
                <v-row align="center" dense class="mt-3 mb-3">
                  <v-col cols="12" sm="4" md="3">
                    <ChattitleHome/>
                  </v-col>
                </v-row>  
              </v-tabs-window-item>
            </v-tabs-window>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>



    <KeyBoard/>

    <FooterView/>
  </v-container>

  
</template>

<style scoped>
h2 {
  font-size: 20px;
}
</style>
