<script setup>
import SearchRequestView from "@/components/SearchRequest/SearchRequestView.vue";
import ResultChatView from "@/components/ResultChat/ResultChatView.vue";
const props = defineProps(['chat'])
const chat = props.chat
// import NoteView from '@/components/Note/NoteView.vue'
</script>

<template>
  <SearchRequestView :search="chat?.content?.search" style="height: fit-content;"/>
  <ResultChatView :result="chat?.content?.result" :id="chat?.id" style="height: fit-content;"/>
  <!-- <NoteView :chatid="props.chat.id"/> -->
</template>
