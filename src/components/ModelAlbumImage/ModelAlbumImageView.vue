<script setup>
import { useShowStore } from "@/stores/show";
import AlbumImageView from "../AlbumImage/AlbumImageView.vue";
const show = useShowStore();

</script>

<template>
  <v-dialog v-model="show.showAlbumImage" width="auto">
    <v-card max-width="500">
      <v-card-text>
        <AlbumImageView />
      </v-card-text>
      <template v-slot:actions>
        <v-btn
          class="ms-auto"
          text="Close"
          @click="show.showAlbumImage = false"
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
