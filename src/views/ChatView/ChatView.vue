<script setup>
// import component, thư viện
import SearchInput from '../../components/SearchInput/SearchInputView.vue'
import FormSearchVideo from '@/components/FormSearchVideo/FormSearchVideo.vue'
import FormSearchAudio from '@/components/FormSearchAudio/FormSearchAudio.vue';
import FormSearch from '@/components/FormSearch/FormSearch.vue'
import NoteView from '@/components/Note/NoteView.vue'
import ConversationView from '@/components/Conversation/ConversationView.vue'
import { watchEffect } from 'vue';
import { useSearchStore } from '@/stores/search';
import { onBeforeRouteUpdate, useRoute } from 'vue-router';
// import { useShowStore } from '@/stores/show';

// khai báo biến 
const route = useRoute()
const useSearch = useSearchStore()

// khai báo function vuejs 
watchEffect(async () => {
  await useSearch.GetChatDetail(route.params.id)
  
})
onBeforeRouteUpdate(async (to, from, next) => {
  // fetchChatDetail(to.params.id);
  await useSearch.GetChatDetail(to.params.id)
  next()
})
</script>

<template>
    <v-app class="chatview">
        <v-container>
            <v-row style="height: 68vh; overflow-y: auto;">
                <v-col cols="12">
                    <ConversationView v-for="chat in useSearch?.chatDetail" :key="chat?.id" :chat="chat"/>
                </v-col>
            </v-row>

            <SearchInput />
            <FormSearchVideo />
            <FormSearchAudio />
            <FormSearch :chatid="route.params.id"/>
        </v-container>
        <NoteView :chatid="route.params.id"/>
    </v-app>
</template>

<style scoped>
    .chatview {
        overflow-x: hidden;
        overflow-y: auto;
        height: 100vh;
    }
</style>