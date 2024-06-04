<template>
  <SlideInComponent
    as="div"
    transition="horizontalToRight"
    :translateEffect="true"
    :opacityEffect="true"
    :moreDelay="false"
  >
    <div class="overflow-hidden py-24 sm:py-32">
      <div class="mx-auto max-w-9xl px-6 lg:px-8">
        <div
          class="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3"
        >
          <div
            class="max-w-none overflow-hidden rounded-xl shadow-xl ring-1 ring-gray-400/10 md:-ml-4 lg:-ml-0 lg:col-span-2 h-full bg-black px-8"
          >
            <span v-if="feature.video">
              <video class="outline-none" autoplay muted loop playsinline>
                <source :src="feature.video" type="video/webm" />
              </video>
            </span>
            <span v-else>
              <image :src="feature.image" />
            </span>
          </div>
          <div class="lg:ml-auto lg:pl-4 lg:pt-4">
            <div class="lg:max-w-lg">
              <h2 class="text-base font-semibold leading-7 text-blue-600 flex items-center">
                <component :is="feature.icon" class="w-8 h-8 inline-flex mr-2" />
                {{ feature.title }}
              </h2>
              <p
                class="mt-2 text-3xl font-bold tracking-tight text-gray-900 dark:text-gray-200 sm:text-4xl"
              >
                {{ feature.name }}
              </p>
              <p class="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300">
                {{ feature.description }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </SlideInComponent>
</template>

<script setup lang="ts">
import type { PropType } from 'vue';
import SlideInComponent from './SlideInComponent.vue';

defineProps({
  feature: {
    type: Object as PropType<{
      title: string;
      name: string;
      description: string;
      icon: any;
      video?: string;
      image?: string;
    }>,
    required: true
  }
});
</script>
