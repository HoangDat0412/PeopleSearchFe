<script setup>
import './resultchat.scss'
import CarouselPeopleView from '@/components/CarouselPeople/CarouselPeopleView.vue'
</script>

<template>
    <v-col cols="12" class="d-flex align-center">
        <div class="me-3">
            <v-avatar color="grey-lighten-1">
                <v-img alt="John" src="https://cdn.vuetifyjs.com/images/john.jpg"></v-img>
            </v-avatar>
        </div>
        <div>
            <v-toolbar-title style="font-size: 15px;">People Search</v-toolbar-title>
        </div>
    </v-col>
    <v-container class="resultchat">

        <v-carousel hide-delimiters show-arrows style="height: fit-content;">
            <CarouselPeopleView/>
            <CarouselPeopleView/>
        </v-carousel>
    </v-container>
</template>