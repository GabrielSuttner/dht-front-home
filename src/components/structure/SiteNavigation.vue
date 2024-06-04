<template>
  <div class="bg-white dark:bg-gray-700">
    <TransitionRoot as="template" :show="open">
      <Dialog as="div" class="relative z-40 lg:hidden" @close="open = false">
        <TransitionChild
          as="template"
          enter="transition-opacity ease-linear duration-300"
          enter-from="opacity-0"
          enter-to="opacity-100"
          leave="transition-opacity ease-linear duration-300"
          leave-from="opacity-100"
          leave-to="opacity-0"
        >
          <div class="fixed inset-0 bg-black bg-opacity-25" />
        </TransitionChild>

        <div class="fixed inset-0 z-40 flex">
          <TransitionChild
            as="template"
            enter="transition ease-in-out duration-300 transform"
            enter-from="-translate-x-full"
            enter-to="translate-x-0"
            leave="transition ease-in-out duration-300 transform"
            leave-from="translate-x-0"
            leave-to="-translate-x-full"
          >
            <DialogPanel
              class="relative w-1/3 flex max-w-md flex-col overflow-y-auto bg-white dark:bg-gray-900 pb-12 shadow-xl"
            >
              <div class="flex justify-end px-4 pb-2 pt-5">
                <button
                  type="button"
                  class="-m-2 inline-flex items-center justify-center rounded-md p-2 text-gray-400"
                  @click="open = false"
                >
                  <span class="sr-only">Close menu</span>
                  <XMarkIcon class="h-6 w-6" aria-hidden="true" />
                </button>
              </div>

              <div class="grid grid-cols-1 items-end gap-x-6 gap-y-10 text-right pr-6">
                <router-link v-for="page in navigation" :key="page.name" :to="`${page.href}`">
                  {{ page.name }}
                </router-link>
              </div>
            </DialogPanel>
          </TransitionChild>
        </div>
      </Dialog>
    </TransitionRoot>
    <header class="relative">
      <nav aria-label="Top">
        <!-- Head navigation -->
        <div class="bg-white dark:bg-gray-700 dark:text-gray-100 hidden md:block">
          <div class="border-b border-gray-200 dark:border-gray-700">
            <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
              <div class="flex h-16 items-center justify-between">
                <div class="items-center flex gap-x-10 w-full lg:justify-between">
                  <!-- Logo (lg+) -->
                  <div class="flex items-center">
                    <router-link to="/" class="flex items-center">
                      <span class="sr-only">Your Company</span>
                      <img class="h-8 w-auto" src="/images/site/logo.png" alt="" />
                      <div class="ml-4 font-semibold text-yellow-700">
                        Decorative Hardware Technologies
                      </div>
                    </router-link>
                  </div>

                  <div class="h-full justify-center space-x-8 flex">
                    <router-link
                      v-for="page in navigation"
                      :key="page.name"
                      :to="`${page.href}`"
                      class="relative z-10 text-gray-700 dark:text-gray-200 -mb-px flex items-center border-b-2 pt-px text-sm font-medium transition-colors duration-200 ease-out"
                    >
                      {{ page.name }}
                    </router-link>
                    <button
                      type="button"
                      @click="handleRoute"
                      class="relative z-10 text-gray-700 dark:text-gray-200 -mb-px flex items-center border-b-2 pt-px text-sm font-medium transition-colors duration-200 ease-out"
                    >
                      login
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- Mobile navigation -->
        <div class="md:hidden h-16 px-4">
          <!-- Logged out mobile view -->
          <div class="h-full justify-center items-center space-x-8 flex">
            <router-link to="/" class="mr-2">
              <span class="sr-only">Your Company</span>
              <img src="/images/site/logo.png" alt="" class="h-8 w-auto" />
            </router-link>
            <router-link
              v-for="page in navigation"
              :key="page.name"
              :to="`${page.href}`"
              class="relative z-10 text-gray-700 dark:text-gray-400 -mb-px flex items-center border-b-2 pt-px text-sm font-medium transition-colors duration-200 ease-out"
            >
              {{ page.name }}
            </router-link>
            <a
              :href="loginRoute"
              class="relative z-10 text-gray-700 dark:text-gray-400 -mb-px flex items-center border-b-2 pt-px text-sm font-medium transition-colors duration-200 ease-out"
            >
              Login
            </a>
          </div>
        </div>
      </nav>
    </header>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
import { XMarkIcon } from '@heroicons/vue/20/solid';

import { Dialog, DialogPanel, TransitionChild, TransitionRoot } from '@headlessui/vue';

const navigation: { name: string; href: string }[] = [
  {
    name: 'contact',
    href: '/contact'
  },
  {
    name: 'about',
    href: '/about'
  }
];

const loginRoute = computed(() => {
  return import.meta.env.VITE_APP_ENV === 'development'
    ? 'http://localhost:5173/u/profile'
    : 'https://decorativehardwaretechnologies.com/u/profile';
});

function handleRoute() {
  window.location.href = loginRoute.value;
}

const open = ref(false);
</script>
