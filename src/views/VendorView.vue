<template>
  <div class="mx-auto max-w-screen-xl p-4 sm:p-6 lg:p-8">
    <router-view v-if="authStore.hasPermission(Permissions.VIEW_VENDORS)" />
    <div v-else><NoPermission /></div>
  </div>
</template>

<script setup lang="ts">
import { RouterView } from 'vue-router';

import { useAuthStore } from './../stores/AuthStore';
import { Permissions } from './../../ts-types/customEnums/permissions';
import NoPermission from './../components/shared/NoPermission.vue';
const authStore = useAuthStore();
</script>
