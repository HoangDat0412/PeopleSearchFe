<script setup>
import VuePdfEmbed from 'vue-pdf-embed'

// essential styles
import 'vue-pdf-embed/dist/style/index.css'

// optional styles
import 'vue-pdf-embed/dist/style/annotationLayer.css'
import 'vue-pdf-embed/dist/style/textLayer.css'

import pdfSource from '../../assets/file/guide.pdf'

</script>

<template>
  <v-container class="pa-4" fluid style="height: 100%; overflow-y: auto">
    <VuePdfEmbed annotation-layer text-layer :source="pdfSource" style="height: 100%; width: 100%;"/>
  </v-container>
</template>