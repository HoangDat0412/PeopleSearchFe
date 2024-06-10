<script setup>
// component
import ChatTitleView from "@/components/ChatTitle/ChatTitleView.vue";
import { useSearchStore } from "@/stores/search";
import { watchEffect } from "vue";

// khai báo biến
const usesearch = useSearchStore()

// hàm trong vuejs 
watchEffect(async () => {
  await usesearch.GetAllChat()
  // await user.getApi()
})
</script>

<template>
  <main>
    
    <div class="groupchattitle">
        <v-list-subheader class="ms-3 pt-2" style="font-weight: 900; font-size: 16px;">Current Chat</v-list-subheader>
      <v-list nav>
        <ChatTitleView v-for="chat in usesearch?.listChat" :key="chat.id" :chat="chat" />
      </v-list>
    </div>
  </main>
</template>

<style scoped>
.groupchattitle {
  height: 60vh;
  overflow-y: auto;
}
</style>
