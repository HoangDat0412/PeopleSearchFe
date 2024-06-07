<script setup>
// import component, thư viện
import SearchInput from '../../components/SearchInput/SearchInputView.vue'
import FormSearchVideo from '@/components/FormSearchVideo/FormSearchVideo.vue'
import FormSearchAudio from '@/components/FormSearchAudio/FormSearchAudio.vue';
import FormSearch from '@/components/FormSearch/FormSearch.vue'
import SearchRequestView from '@/components/SearchRequest/SearchRequestView.vue'
import ResultChatView from '@/components/ResultChat/ResultChatView.vue'
import NoteView from '@/components/Note/NoteView.vue'
// import { useShowStore } from '@/stores/show';

// khai báo biến 
// const show = useShowStore();
</script>

<template>
    <v-app class="chatview">
        <v-container>
            <v-row justify="center" style="height: 68vh; overflow-y: auto;">
                <SearchRequestView />
                <ResultChatView />
            </v-row>

            <SearchInput />
            <FormSearchVideo />
            <FormSearchAudio />
            <FormSearch />
        </v-container>
        <NoteView/>
    </v-app>
</template>

<style scoped>
    .chatview {
        overflow-x: hidden;
        overflow-y: auto;
        height: 100vh;
    }
</style>