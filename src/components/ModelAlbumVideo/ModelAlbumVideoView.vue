<script setup>
import { useShowStore } from '@/stores/show';
import AlbumVideoView from '../AlbumVideo/AlbumVideoView.vue';
const show = useShowStore()
</script>

<template>
    <v-dialog
      v-model="show.showAlbumVideo"
      width="auto"
    >
      <v-card
        max-width="500"
      >
      <v-card-text>
        <AlbumVideoView />
      </v-card-text>
        <template v-slot:actions>
          <v-btn
            class="ms-auto"
            text="Ok"
            @click="show.showAlbumVideo = false"
          ></v-btn>
        </template>
      </v-card>
    </v-dialog>
</template>


<style scoped>
.v-overlay {
    z-index: 1000 !important;
}
</style>