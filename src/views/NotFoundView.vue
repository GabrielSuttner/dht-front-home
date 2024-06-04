<template>
  <main
    class="mx-auto flex w-full max-w-7xl flex-auto flex-col justify-center px-6 py-24 sm:py-64 lg:px-8 dark:bg-gray-900 text-gray-900 dark:text-gray-200"
  >
    <p class="text-base font-semibold leading-8 text-indigo-600">404</p>
    <h1 class="mt-4 text-3xl font-bold tracking-tight sm:text-5xl">Page not found</h1>
    <p class="mt-6 text-base leading-7 text-gray-600 dark:text-gray-400">
      Sorry, we couldn’t find the page you’re looking for.
    </p>
    <div class="mt-10">
      <router-link to="/profile" class="text-sm font-semibold leading-7 text-indigo-600">
        <span aria-hidden="true">&larr;</span> Back to home
      </router-link>
    </div>
  </main>
</template>

<script setup lang="ts"></script>

<style scoped></style>
