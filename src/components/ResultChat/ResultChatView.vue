<script setup>
import './resultchat.scss'
import CarouselPeopleView from '@/components/CarouselPeople/CarouselPeopleView.vue'
import logo from "@/assets/img/darklogo.jpeg";
const props = defineProps(['result', 'id'])
let result = props.result

import { mdiDotsHorizontal,mdiDeleteOutline,mdiPencilOutline } from '@mdi/js';
import { useShowStore } from '@/stores/show';
import { useNoteStore } from '@/stores/note';

const show = useShowStore()
const note = useNoteStore()
const handleDeleteChat = ()=>{
}
const handleEdit = ()=>{
  note.chatid = props.id
  show.showNote = true
}

</script>

<template>
    <v-col cols="12" class="d-flex align-start" style="height: fit-content;">
        <div class="me-3">
            <v-avatar >
                <v-img alt="People Search" :src="logo"></v-img>
            </v-avatar>
        </div>
        <div>
            <v-toolbar-title style="font-size: 15px;">People Search</v-toolbar-title>
            <v-card v-if="result.length === 0">
                <v-card-item>
                    <p>Please Give Me More Information To Find People</p>
                    <p class="mt-2">Search Request Example:</p>
                    <p>Name: Trịnh Quốc Việt</p>
                    <p>Address: 387 Lê Văn Lương P.Tân Phong Q.07 TPHCM</p>
                </v-card-item>
            </v-card>
        </div>
    </v-col>
    <v-container v-if="result?.length > 0" class="resultchat">
        <v-carousel hide-delimiters show-arrows style="height: fit-content;" class="carousel-result">
            <CarouselPeopleView class="" :item="item" :resultlength="result.length" v-for="(item, key) in result" :key="key"/>

            <div class="edit-note-result" style="cursor: pointer;">

                <v-menu>
            <template v-slot:activator="{ props }">
              <span v-bind="props" style="font-size: 12px; font-weight: 300">
                <v-icon :icon="mdiDotsHorizontal" />
              </span>
            </template>
            <v-list>
              <v-list-item
                value="delete"
                style="min-height: 0"
                class="my-1"
                @click="() => handleDeleteChat()"
              >
                <v-list-item-title
                  class="d-flex align-center"
                  style="color: #d50000; font-size: 13px"
                >
                  <span style="font-size: 12px" class="me-1"
                    ><v-icon :icon="mdiDeleteOutline"
                  /></span>
                  Delete Chat</v-list-item-title
                >
              </v-list-item>
              <v-list-item
                value="edit"
                style="min-height: 0"
                class="my-1"
                @click="handleEdit()"
              >
                <v-list-item-title
                  class="d-flex align-center"
                  style="font-size: 13px"
                >
                  <span style="font-size: 12px" class="me-1"
                    ><v-icon :icon="mdiPencilOutline"
                  /></span>
                  Edit Note</v-list-item-title
                >
              </v-list-item>
             
            </v-list>
          </v-menu>
            </div>
        </v-carousel>

    </v-container>
    

</template>

<style scoped>
.carousel-result {
    position: relative;
}
.carousel-result .edit-note-result {
    position: absolute;
    top: 10px;
    right: 10px;
    z-index: 100;
}
</style>