<template>
  <div class="mx-auto max-w-screen-xl p-4 sm:p-6 lg:p-8">
    <!-- We've used 3xl here, but feel free to try other max-widths based on your needs -->
    <router-view />
  </div>
</template>

<script setup lang="ts">
import { RouterView } from 'vue-router'
</script>

<style lang="scss" scoped></style>
