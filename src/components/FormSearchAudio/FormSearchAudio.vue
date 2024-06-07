<script setup>
import { useShowStore } from '@/stores/show';
import { ref } from 'vue';
import { mdiMicrophone } from '@mdi/js'
// khai báo biến
const show = useShowStore();
const message = ref('')
const fileUrl = ref(null)
const fileType = ref('')

// function
const previewFile = (event) => {
    const file = event.target.files[0]
    if (file) {
        const fileTypes = ['audio']
        const type = file.type.split('/')[0]

        if (fileTypes.includes(type)) {
            fileUrl.value = URL.createObjectURL(file)
            fileType.value = type
        } else {
            fileUrl.value = null
            fileType.value = ''
            alert('Please select a valid audio')
        }
    } else {
        fileUrl.value = null
        fileType.value = ''
    }
}
</script>

<template>
    <v-dialog v-model="show.showFormAudio" width="400px">
        <v-card>
            <v-card-text>
                <p class="text-h6 mb-6 mt-2 d-flex align-center"><span class="me-2">
                        <v-icon color="success" style="font-size: 22px;" :icon="mdiMicrophone"></v-icon>
                    </span> Search By Audio</p>

                <v-row dense>
                    <v-col cols="12">
                        <label class="ms-1 mb-3" style="font-size: 14px;">Message</label>
                        <v-text-field v-model="message" density="compact" class="mt-1" variant="solo"
                            required></v-text-field>
                    </v-col>

                    <v-col cols="12">
                        <label class="ms-1 mb-3" style="font-size: 14px;">File Audio</label>
                        <v-file-input density="compact" @change="previewFile" class="mt-1" variant="solo" multiple
                            required></v-file-input>
                    </v-col>
                    <div v-if="fileUrl" class="mb-3 text-center">
                        <audio v-if="fileType === 'audio'" :src="fileUrl" controls class="img-thumbnail"
                            style="width: 100%"></audio>
                    </div>
                </v-row>

                <small class="text-caption text-medium-emphasis">*indicates required field</small>
            </v-card-text>

            <v-divider></v-divider>

            <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn text="Close" variant="plain" @click="show.showFormAudio = false"></v-btn>
                <v-btn color="primary" text="Search" variant="tonal" @click="show.showFormAudio = false"></v-btn>
            </v-card-actions>
        </v-card>
    </v-dialog>
</template>