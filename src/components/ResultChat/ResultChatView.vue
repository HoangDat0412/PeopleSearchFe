<script setup>
import './resultchat.scss'
import CarouselPeopleView from '@/components/CarouselPeople/CarouselPeopleView.vue'

const props = defineProps(['result', 'id'])
let result = props.result
</script>

<template>
    <v-col cols="12" class="d-flex align-start" style="height: fit-content;">
        <div class="me-3">
            <v-avatar color="grey-lighten-1">
                <v-img alt="John" src="https://i.pinimg.com/564x/9d/e4/97/9de497cbac67554d199b5945006f14d0.jpg"></v-img>
            </v-avatar>
        </div>
        <div>
            <v-toolbar-title style="font-size: 15px;">People Search</v-toolbar-title>
            <v-card v-if="result.length === 0">
                <v-card-item>
                    <p>Please Give Me More Information To Find People</p>
                </v-card-item>
            </v-card>
        </div>
    </v-col>
    <v-container v-if="result?.length > 0" class="resultchat">
        <v-carousel hide-delimiters show-arrows style="height: fit-content;">
            <CarouselPeopleView :item="item" :resultlength="result.length" v-for="(item, key) in result" :key="key"/>
        </v-carousel>

    </v-container>

</template>