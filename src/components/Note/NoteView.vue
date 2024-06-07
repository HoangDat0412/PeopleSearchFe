<script setup>
import Editor from "@tinymce/tinymce-vue";
import { useShowStore } from "@/stores/show";
import { mdiClose } from "@mdi/js";
const show = useShowStore();
</script>

<template>
  <v-navigation-drawer location="right" v-model="show.showNote" width="510">
    <div class="mt-2 mb-2 d-flex justify-space-between">
      <v-btn size="small"  @click="show.showNote = false">
        <v-icon :icon="mdiClose"></v-icon>
      </v-btn>
      <v-btn size="small" @click="show.showNote = false">
        Save
      </v-btn>
    </div>

    <main id="sample" style="position: relative">
      <Editor
        style="height: 100%"
        api-key="36eoq21c3oufqsxwph8kro700eiewqbshmx5mua6023wrkpy"
        :init="{
          toolbar_mode: 'sliding',
          plugins:
            'anchor autolink charmap codesample emoticons image link lists media searchreplace table visualblocks wordcount linkchecker',
          toolbar:
            'undo redo | blocks fontfamily fontsize | bold italic underline strikethrough | link image media table | align lineheight | numlist bullist indent outdent | emoticons charmap | removeformat',
        }"
        initial-value="Welcome to TinyMCE!"
      />
    </main>
  </v-navigation-drawer>
</template>

<style scoped>
#sample {
  display: flex;
  flex-direction: column;
  place-items: center;
  width: 100%;
  height: 90%;
}
</style>
