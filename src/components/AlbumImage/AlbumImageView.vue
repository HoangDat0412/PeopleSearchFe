<script setup>
import 'lightgallery/css/lightgallery.css';
import 'lightgallery/css/lg-zoom.css';
import 'lightgallery/css/lg-thumbnail.css';
import './albumimage.scss'
import { onMounted, ref } from 'vue';
import lgThumbnail from 'lightgallery/plugins/thumbnail';
import lgZoom from 'lightgallery/plugins/zoom';
import LightGallery from 'lightgallery';

const galleryRef = ref(null);

onMounted(() => {
    if (galleryRef.value) {
        galleryRef.value.instance = LightGallery(galleryRef.value, {
            plugins: [lgZoom, lgThumbnail],
        });
    }
});
</script>

<template>
    <div ref="galleryRef" class="gallery mt-3">
        <a  v-for="n in 6" :key="n" :href="`https://picsum.photos/500/300?image=${n * 5 + 10}`">
            <img :src="`https://picsum.photos/500/300?image=${n * 5 + 10}`"/>
        </a>
    </div>
</template>


<style scoped>
.gallery{
    display: flex;
    justify-content: center;
    width: 100%;
    gap: 17px;
    flex-wrap: wrap;
}
.gallery a {
    width: 27%
}
.gallery img {
    width: 100%;
    -webkit-transform: scale(1);
    transform: scale(1);
    -webkit-transition: 0.3s ease-in-out;
    transition: 0.3s ease-in-out;
}

.gallery img:hover {
    -webkit-transform: scale(1.3);
    transform: scale(1.3);
}

.v-overlay {
    z-index: 1000 !important;
}
</style>
