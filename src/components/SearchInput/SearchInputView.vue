<script setup>
// khai báo thư viện
import { ref } from 'vue';
import { mdiAttachment, mdiFormSelect, mdiMicrophone, mdiSend,mdiNoteText } from '@mdi/js';
import './searchinput.scss'
import { useShowStore } from '@/stores/show';

// khai báo biến 
const input = ref('');
const show = useShowStore();
</script>

<template>
    <div class="wrap-input">
        <div class="custom-input">
            <v-text-field v-model="input" placeholder="Search by full name" variant="solo"
                density="compact" outlined dense hide-details></v-text-field>
            <div class="actions">
                <v-btn size="small" :prepend-icon="mdiFormSelect" @click="show.showFormSearch = true">
                    <template v-slot:prepend>
                        <v-icon color="primary"></v-icon>
                    </template>
                    <span class="d-none d-md-inline">Search Information</span>
                </v-btn>
                <v-btn size="small" :prepend-icon="mdiAttachment" @click="show.showFormVideo = true">
                    <template v-slot:prepend>
                        <v-icon color="primary"></v-icon>
                    </template>
                    <span class="d-none d-md-inline">Search Image/Video</span>
                </v-btn>
                <v-btn size="small" :prepend-icon="mdiMicrophone" @click="show.showFormAudio = true">
                    <template v-slot:prepend>
                        <v-icon color="primary"></v-icon>
                    </template>
                    <span class="d-none d-md-inline">Search Audio</span>
                </v-btn>
                <v-btn size="small" :prepend-icon="mdiNoteText" @click="show.showNote = !show.showNote">
                    <template v-slot:prepend>
                        <v-icon color="primary"></v-icon>
                    </template>
                    <span class="d-none d-md-inline">Edit Note</span>
                </v-btn>



                <v-btn size="small" class="ms-auto" icon>
                    <v-icon :icon="mdiSend" />
                </v-btn>
            </div>
        </div>
    </div>
</template>
