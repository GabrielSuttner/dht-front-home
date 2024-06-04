<template>
  <div class="flex flex-col">
    <div class="flex justify-between px-4 pt-4">
      <Bars3Icon class="h-6 w-6 flex-none dark:text-white" />
      <img src="/images/site/logo.png" width="24" height="12" alt="Company Logo" />
      <UserIcon class="h-6 w-6 flex-none dark:text-white" />
    </div>
    <div class="mt-8 flex-auto rounded-t-2xl bg-white dark:bg-gray-700">
      <slot name="body"> </slot>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Bars3Icon, UserIcon } from '@heroicons/vue/24/outline';
</script>

<style scoped></style>
