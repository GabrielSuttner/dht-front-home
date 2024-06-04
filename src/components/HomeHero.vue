<template>
  <div class="overflow-hidden py-20 sm:py-32 lg:pb-32 xl:pt-36 xl:pb-36">
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div class="lg:grid lg:grid-cols-12 lg:gap-x-8 lg:gap-y-20">
        <div
          class="relative z-10 mx-auto max-w-2xl lg:col-span-7 lg:max-w-none lg:pt-6 xl:col-span-6"
        >
          <h1 class="text-4xl font-medium tracking-tight text-gray-900 dark:text-gray-200">
            Expand your showroom to the cloud.
          </h1>
          <p class="mt-6 text-lg text-gray-600 dark:text-gray-400">
            Expand your showroom to the cloud with a fully branded revenue generating website. We
            offer a wide range of tools to help you manage your inventory and increase your sales.
          </p>
          <div class="mt-8 flex flex-wrap gap-x-6 gap-y-4">
            <button
              class="inline-flex justify-center rounded-lg py-2 px-3 text-sm font-semibold outline-2 outline-offset-2 transition-colors bg-gray-800 dark:bg-gray-200 text-white dark:text-gray-700 hover:bg-gray-900 active:bg-gray-800 active:text-white/80"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                class="h-6 w-6 flex-none"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
                />
              </svg>
              <span class="ml-2.5">Schedule demo</span>
            </button>
            <button
              href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
              class="inline-flex justify-center rounded-lg border py-[calc(theme(spacing.2)-1px)] px-[calc(theme(spacing.3)-1px)] text-sm outline-2 outline-offset-2 transition-colors border-gray-300 text-gray-700 dark:text-gray-200 hover:border-gray-400 active:bg-gray-100 active:text-gray-700/80"
            >
              <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" class="h-6 w-6 flex-none">
                <circle cx="12" cy="12" r="11.5" stroke="#D4D4D4" />
                <path
                  d="M9.5 14.382V9.618a.5.5 0 0 1 .724-.447l4.764 2.382a.5.5 0 0 1 0 .894l-4.764 2.382a.5.5 0 0 1-.724-.447Z"
                  fill="#A3A3A3"
                  stroke="#A3A3A3"
                />
              </svg>
              <span class="ml-2.5">Watch the video</span>
            </button>
          </div>
        </div>
        <div class="relative mt-10 sm:mt-20 lg:col-span-5 lg:row-span-2 lg:mt-20 xl:col-span-6">
          <div
            class="absolute left-1/2 top-4 h-[1026px] w-[1026px] -translate-x-1/3 stroke-gray-300/70 [mask-image:linear-gradient(to_bottom,white_20%,transparent_75%)] sm:top-16 sm:-translate-x-1/2 lg:-top-16 lg:ml-12 xl:-top-14 xl:ml-0"
          >
            <svg
              viewBox="0 0 1026 1026"
              fill="none"
              aria-hidden="true"
              class="absolute inset-0 h-full w-full animate-spin-slow"
            >
              <path
                d="M1025 513c0 282.77-229.23 512-512 512S1 795.77 1 513 230.23 1 513 1s512 229.23 512 512Z"
                stroke="#06b6d4"
                strokeOpacity="0.7"
              />
              <path
                d="M513 1025C230.23 1025 1 795.77 1 513"
                stroke="#D4D4D4"
                strokeLinecap="round"
              />
            </svg>
            <svg
              viewBox="0 0 1026 1026"
              fill="none"
              aria-hidden="true"
              class="absolute inset-0 h-full w-full animate-spin-reverse-slower"
            >
              <path
                d="M913 513c0 220.914-179.086 400-400 400S113 733.914 113 513s179.086-400 400-400 400 179.086 400 400Z"
                stroke="#D4D4D4"
                strokeOpacity="0.7"
              />
              <path
                d="M913 513c0 220.914-179.086 400-400 400"
                stroke="#06b6d4"
                strokeLinecap="round"
              />
            </svg>
          </div>
          <div
            v-if="appView == 'phone'"
            class="-mx-4 h-[448px] px-9 [mask-image:linear-gradient(to_bottom,white_60%,transparent)] sm:mx-0 lg:absolute lg:-inset-x-10 lg:-bottom-20 lg:-top-10 lg:h-auto lg:px-0 lg:pt-10 xl:-bottom-32"
          >
            <PhoneFrame class="mx-auto max-w-[366px]">
              <PhoneAppDemo @changeView="$emit('changeView')" />
            </PhoneFrame>
          </div>
          <div
            v-else
            class="h-[750px] w-[1200px] px-9 [mask-image:linear-gradient(to_bottom,white_60%,transparent)] sm:mx-0 lg:absolute lg:-top-10 lg:px-0 lg:pt-10 xl:top-0 xl:left-10"
          >
            <DesktopFrame>
              <DesktopAppDemo :isDark="isDark" />
            </DesktopFrame>
          </div>
        </div>
        <div class="relative -mt-4 lg:col-span-7 lg:mt-0 xl:col-span-6">
          <p
            class="text-center text-sm font-semibold text-gray-900 dark:text-gray-200 lg:text-left"
          >
            Try now to
          </p>
          <ul
            role="list"
            class="mx-auto mt-8 flex max-w-xl flex-wrap justify-center gap-x-10 gap-y-8 lg:mx-0 lg:justify-start text-gray-900 dark:text-gray-200"
          >
            <li v-for="feature in features" :key="feature.label" class="flex gap-2">
              <component :is="feature.component" class="h-6 w-6" />
              <span>{{ feature.label }}</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import PhoneFrame from './PhoneFrame.vue';
import DesktopFrame from './DesktopFrame.vue';
import PhoneAppDemo from './PhoneAppDemo.vue';
import DesktopAppDemo from './DesktopAppDemo.vue';
import {
  BanknotesIcon,
  UserGroupIcon,
  WrenchScrewdriverIcon,
  ClockIcon
} from '@heroicons/vue/24/outline';

defineProps<{
  appView: string;
  isDark: boolean;
}>();

defineEmits(['changeView']);

const features = [
  {
    label: 'Build Trust',
    component: UserGroupIcon
  },
  {
    label: 'Save Time',
    component: ClockIcon
  },
  {
    label: 'Grow Revenue',
    component: BanknotesIcon
  },
  {
    label: 'Decrease Mistakes',
    component: WrenchScrewdriverIcon
  }
];
</script>

<style scoped></style>
