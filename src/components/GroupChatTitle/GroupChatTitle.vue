<script setup>
// component
import ChatTitleView from "@/components/ChatTitle/ChatTitleView.vue";
</script>

<template>
  <main>
    
    <div class="groupchattitle">
        <v-list-subheader class="ms-3 pt-2" style="font-weight: 900; font-size: 16px;">Current Chat</v-list-subheader>
      <v-list nav>
        <ChatTitleView />
        <ChatTitleView />
        <ChatTitleView />
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
