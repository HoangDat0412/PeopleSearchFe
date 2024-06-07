<script setup>
// thư viện
import { mdiDotsVertical, mdiDeleteOutline, mdiPencilOutline, mdiStar, mdiShare, mdiCheck } from '@mdi/js'
import { ref } from 'vue';
import './chattitle.scss'

// khai báo biến
const isEdit = ref(false)
const isHighlight = ref(false)
const title = ref("Nguyễn Văn A")

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

    isEdit.value = false
}

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
    isEdit.value = true
}


</script>

<template>
    <main class="my-1">
        <v-list-item density="compact" value="home" height="30" v-if="!isEdit" >
            <div class="d-flex align-center justify-space-between">
                <RouterLink class="" style="text-decoration: none; color: unset;" to="/chat">{{ title }}</RouterLink>
                <div class="menu">
                    <v-menu>
                        <template v-slot:activator="{ props }">
                            <span v-bind="props" style="font-size: 12px; font-weight: 300;">
                                <v-icon :icon="mdiDotsVertical" />
                            </span>
                        </template>
                        <v-list>
                            <v-list-item value="delete" style="min-height: 0;" class="my-1">
                                <v-list-item-title class="d-flex align-center" style="color: #D50000; font-size: 13px;">
                                    <span style="font-size: 12px;" class="me-1"><v-icon
                                            :icon="mdiDeleteOutline" /></span>
                                    Delete</v-list-item-title>
                            </v-list-item>
                            <v-list-item value="edit" style="min-height: 0;" class="my-1" @click="handleEdit()">
                                <v-list-item-title class="d-flex align-center" style="font-size: 13px;"> <span
                                        style="font-size: 12px;" class="me-1"><v-icon :icon="mdiPencilOutline" /></span>
                                    Edit</v-list-item-title>
                            </v-list-item>
                            <v-list-item value="HightLight" style="min-height: 0;" class="my-1">
                                <v-list-item-title class="d-flex align-center" style="font-size: 13px;">
                                    <span v-if="isHighlight" style="font-size: 12px; color: #FFEB3B;"
                                        class="me-1"><v-icon :icon="mdiStar" /></span>
                                    <span v-else style="font-size: 12px;" class="me-1"><v-icon :icon="mdiStar" /></span>
                                    HightLight</v-list-item-title>
                            </v-list-item>
                            <v-list-item value="share" style="min-height: 0;" class="my-1">
                                <v-list-item-title class="d-flex align-center" style="font-size: 13px;"> <span
                                        style="font-size: 12px;" class="me-1"><v-icon :icon="mdiShare" /></span>
                                    Share</v-list-item-title>
                            </v-list-item>
                        </v-list>
                    </v-menu>
                </div>
            </div>
        </v-list-item>

        <div v-else class="d-flex align-center justify-space-between edit">
            <v-text-field density="compact"  @keyup.enter="() => handleUpdateTitle()" v-model="title" variant="solo"></v-text-field>
            <span class="ms-1" @click="handleUpdateTitle()">
                <v-icon :icon="mdiCheck" />
            </span>
        </div>
    </main>

</template>

<style scoped>
.v-list-item--density-default.v-list-item--two-line {
    min-height: 0px;
}

.menu .v-list-item--density-default.v-list-item--one-line {
    min-height: 0px;
}
</style>