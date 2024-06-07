<script setup>
import { GoogleMap, Marker } from 'vue3-google-map'

const center = { lat: 40.689247, lng: -74.044502 }
const center2 = { lat: 47.689247, lng: -75.044502 }
const markerOptions = { position: center, label: 'L1', title: 'LADY LIBERTY' }
const markerOptions2 = { position: center2, label: 'L2', title: 'Location 2' }
</script>

<template>
  <GoogleMap
    api-key="AIzaSyARV3yR6gGBaVxy79egsVdp51BteYXjmGU"
    style="width: 100%; height: 200px"
    :center="center"
    :zoom="15"
  >
    <Marker :options="markerOptions" />
    <Marker :options="markerOptions2" />
  </GoogleMap>
</template>