<script setup>
import ExportConversationView from "@/components/ExportConversation/ExportConversationView.vue";
import { watchEffect } from "vue";
import { useSearchStore } from "@/stores/search";
import { onBeforeRouteUpdate, useRoute } from "vue-router";
import { mdiDownload } from "@mdi/js";
import html2pdf from "html2pdf.js";
// khai báo biến
const route = useRoute();
const useSearch = useSearchStore();
// khai báo function vuejs
watchEffect(async () => {
  await useSearch.GetChatDetail(route.params.id);
});
onBeforeRouteUpdate(async (to, from, next) => {
  // fetchChatDetail(to.params.id);
  await useSearch.GetChatDetail(to.params.id);
  next();
});

const exportToPDF = () => {
  html2pdf(document.getElementById("element-to-print"), {
    margin: 0.5,
    filename: `session-chat-${route.params.id}.pdf`,
    image: { type: "png", quality: 0.98 },
    html2canvas: { scale: 2 },
    jsPDF: { unit: "in", format: "letter", orientation: "portrait" },
    enableLinks: true,
  });
};
</script>

<template>
  <v-app class="chatview">
    <v-container>
      <v-row style="height: 90vh; overflow-y: auto">
        <v-col cols="12" style="text-align: end;">
          <v-btn
            :prepend-icon="mdiDownload"
            @click="exportToPDF">
          
            <template v-slot:prepend>
              <v-icon color="primary"></v-icon>
            </template>
            Export Session
          </v-btn>
        </v-col>
        <v-col cols="12" id="element-to-print">
          <ExportConversationView
            v-for="chat in useSearch?.chatDetail"
            :key="chat?.id"
            :chat="chat"
          />
        </v-col>
      </v-row>
    </v-container>
  </v-app>
</template>

<style scoped>
.chatview {
  overflow-x: hidden;
  overflow-y: auto;
  height: 100vh;
}
</style>
