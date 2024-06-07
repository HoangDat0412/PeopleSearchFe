<script setup>
import {
  mdiMessageText,
  mdiDotsVertical,
  mdiDeleteOutline,
  mdiPencilOutline,
  mdiStar,
  mdiShare,
} from "@mdi/js";
import { ref } from "vue";

// khai báo biến
const isEdit = ref(false);
const isHighlight = ref(false);
const title = ref("Xin Chào mọi người");

// khai báo function
const handleUpdateTitle = () => {
  //   if (title.value.trim() === '') {
  //     notify({
  //       title: 'Update Chat Title Error',
  //       text: 'Your chat title must be not null',
  //       type: 'error'
  //     })
  //   } else {
  //     useSearch.UpdateChat(chat?.id, {
  //       name: title.value,
  //       higlighted: chat?.higlighted
  //     })

  //   }

  isEdit.value = false;
};

// const handleUpdateHighLight = (status) => {
//   useSearch.UpdateChat(chat?.id, {
//     name: chat?.name,
//     higlighted: status
//   })

//   isHighlight.value = status
// }

// const handleDeleteChat = () => {
//   useSearch.DeleteChat(chat?.id)
// }

const handleEdit = () => {
  isEdit.value = true;
};
</script>

<template>
  <v-card style="font-size: 18px" class="mx-auto card_home" link>
    <template v-slot:title>
      <v-text-field
        v-if="isEdit"
        density="compact"
        v-model="title"
        variant="solo"
        @keyup.enter="() => handleUpdateTitle()"
      ></v-text-field>
      <RouterLink
        v-else
        style="color: unset; text-decoration: none; font-weight: 500"
        to="/chat/1"
        >{{ title }}</RouterLink
      >
    </template>
    <template v-slot:prepend>
      <v-icon
        style="font-size: 16px"
        color="primary"
        :icon="mdiMessageText"
      ></v-icon>
    </template>
    <!-- <template v-slot:append>
      
    </template> -->
    <v-card-text class="d-flex justify-space-between align-center"
      ><span>Create 4 day ago</span>
      <div class="menu">
        <v-menu>
          <template v-slot:activator="{ props }">
            <span v-bind="props">
              <v-icon style="font-size: 16px" :icon="mdiDotsVertical"></v-icon>
            </span>
          </template>
          <v-list>
            <v-list-item value="delete" style="min-height: 0" class="my-1">
              <v-list-item-title
                class="d-flex align-center"
                style="color: #d50000; font-size: 13px"
              >
                <span style="font-size: 12px" class="me-1"
                  ><v-icon :icon="mdiDeleteOutline"
                /></span>
                Delete</v-list-item-title
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
                Edit</v-list-item-title
              >
            </v-list-item>
            <v-list-item value="HightLight" style="min-height: 0" class="my-1">
              <v-list-item-title
                class="d-flex align-center"
                style="font-size: 13px"
              >
                <span
                  v-if="isHighlight"
                  style="font-size: 12px; color: #ffeb3b"
                  class="me-1"
                  ><v-icon :icon="mdiStar"
                /></span>
                <span v-else style="font-size: 12px" class="me-1"
                  ><v-icon :icon="mdiStar"
                /></span>
                HightLight</v-list-item-title
              >
            </v-list-item>
            <v-list-item value="share" style="min-height: 0" class="my-1">
              <v-list-item-title
                class="d-flex align-center"
                style="font-size: 13px"
              >
                <span style="font-size: 12px" class="me-1"
                  ><v-icon :icon="mdiShare"
                /></span>
                Share</v-list-item-title
              >
            </v-list-item>
          </v-list>
        </v-menu>
      </div></v-card-text
    >
  </v-card>
</template>
