<script setup>
import { onMounted, ref } from 'vue'
import lightGallery from 'lightgallery'
import lgVideo from 'lightgallery/plugins/video'

// Import LightGallery CSS
import 'lightgallery/css/lightgallery.css'
import 'lightgallery/css/lg-video.css'
const galleryVideo = ref(null)

onMounted(() => {
  lightGallery(galleryVideo.value, {
    plugins: [lgVideo],
    speed: 500
  })
})
</script>

<template>
    <div ref="galleryVideo" class="gallery mt-3">
        <a  v-for="n in 6" :key="n"  href="https://www.youtube.com/embed/zLwpcLJibw0?si=VYTF-4xwYz1YHc7I">
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
