<template>
  <div class="xl:w-[1000] xl:h-[800]">
    <!-- <div>
      <div
        class="bg-white dark:bg-gray-700 dark:text-gray-100 hidden md:block border-b border-gray-200 dark:border-gray-700"
      >
        <div class="flex h-16 items-center justify-between px-8 relative">
          <div class="items-center flex gap-x-10 w-full justify-start">
            <div class="flex items-center">
              <span class="sr-only">Your Company</span>
              <img class="h-8 w-auto" src="/images/site/logo.png" alt="" />
            </div>

            <div class="h-full justify-center space-x-8 flex">
              <div
                v-for="page in navigation"
                :key="page"
                class="relative z-10 text-gray-700 dark:text-gray-200 -mb-px flex items-center border-b-2 pt-px text-sm font-medium transition-colors duration-200 ease-out"
              >
                {{ page }}
              </div>
            </div>
          </div>
          <div class="flex items-center">
            <div
              class="flex-shrink-1 flex items-center rounded-md dark:bg-gray-900 dark:hover:bg-gray-600 text-gray-400 dark:text-gray-100 bg-white hover:bg-gray-200 py-1 px-4 mx-2 border hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
              <MagnifyingGlassIcon class="h-5 w-5 text-gray-400 inline" aria-hidden="true" />
              <span class="inline pl-2">search</span>
            </div>

            <BellIcon class="h-8 w-8 rounded-full" />
            <UserIcon class="h-8 w-8 rounded-full" />
          </div>
        </div>
      </div>
    </div> -->
    <img
      v-if="isDark"
      src="https://dht.sfo3.cdn.digitaloceanspaces.com/site/home-screen-dark.PNG"
      alt="App screenshot"
      class="w-full rounded-md shadow-2xl ring-1 ring-gray-900/10"
    />
    <img
      v-else
      src="https://dht.sfo3.cdn.digitaloceanspaces.com/site/home-screen.PNG"
      alt="App screenshot"
      class="w-full rounded-md shadow-2xl ring-1 ring-gray-900/10"
    />
  </div>
</template>

<script setup lang="ts">
defineProps<{
  isDark: boolean;
}>();
</script>

<style scoped></style>
