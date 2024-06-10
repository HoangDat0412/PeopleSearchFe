<script setup>
import Editor from "@tinymce/tinymce-vue";
import { useShowStore } from "@/stores/show";
import { mdiClose } from "@mdi/js";
import { onBeforeMount, ref } from "vue";
import { useSearchStore } from "@/stores/search";
import { useChatStore } from "@/stores/chat";
const show = useShowStore();

const props = defineProps(['chatid'])
const chatid = props.chatid
const useSearch = useSearchStore()
const chat = useChatStore()
const editorRef = ref("");
onBeforeMount(async ()=>{
  await useSearch.GetChatContent(chatid)
  editorRef.value = useSearch.chatContent?.note
})
const handleUpdateNote = async() =>{
  await chat.UpdateChat(chatid,{
    note:editorRef.value
  })

}
</script>

<template>
  <v-navigation-drawer location="right" v-model="show.showNote" width="510">
    <div class="mt-2 mb-2 d-flex justify-space-between">
      <v-btn size="small"  @click="show.showNote = false">
        <v-icon :icon="mdiClose"></v-icon>
      </v-btn>
      <v-btn size="small" @click="handleUpdateNote">
        Save
      </v-btn>
    </div>

    <main id="sample" style="position: relative">
      <Editor
        v-model="editorRef"
        style="height: 100%"
        api-key="36eoq21c3oufqsxwph8kro700eiewqbshmx5mua6023wrkpy"
        :init="{
          toolbar_mode: 'sliding',
          plugins:
            'anchor autolink charmap codesample emoticons image link lists media searchreplace table visualblocks wordcount linkchecker',
          toolbar:
            'undo redo | blocks fontfamily fontsize | bold italic underline strikethrough | link image media table | align lineheight | numlist bullist indent outdent | emoticons charmap | removeformat',
        }"
      
      />
      <!--   :initial-value="useSearch.chatContent?.note" -->
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
