<template>
  <div class="bg-gray-50 dark:bg-gray-900 w-full min-h-screen">
    <div v-if="isLoggedIn" class="relative">
      <RouterView />
      <div class="fixed right-1 bottom-1 z-10">
        <MessagesContainer />
      </div>
    </div>
    <div v-else>
      <LogIn />
    </div>
  </div>
</template>

<script setup lang="ts">
import { RouterView } from 'vue-router';
import { computed } from 'vue';

import LogIn from './../components/auth/LogIn.vue';
import MessagesContainer from './../components/messages/MessagesContainer.vue';
import { useAuthStore } from './../stores/AuthStore';

const authStore = useAuthStore();

const isLoggedIn = computed(() => {
  return authStore.isLoggedIn;
});
</script>

<style scoped></style>
