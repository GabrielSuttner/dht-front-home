<template>
  <main class="isolate bg-white dark:bg-gray-900 antialiased">
    <HomeHero :appView="appView" @changeView="changeView()" :isDark="isDark" />

    <!-- Feature section -->

    <div class="py-12 sm:py-32">
      <div class="mx-auto max-w-7xl px-6 lg:px-8">
        <div class="mx-auto max-w-2xl lg:mx-0">
          <h2
            class="text-3xl font-bold tracking-tight text-gray-900 dark:text-gray-200 sm:text-4xl"
          >
            Everything you need to save time and grow revenue
          </h2>
          <p class="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300">
            Vendor ERP was designed for you to manage your inventory and grow your sales. We have
            everything you need maximize your time generating revenue.
          </p>
        </div>
      </div>
      <div v-for="(feature, featureIdx) of adminFeatures" :key="feature.name">
        <FeatureRight v-if="featureIdx % 2 == 0" :feature="feature" />
        <FeatureLeft v-else :feature="feature" />
      </div>
    </div>

    <div class="py-24 sm:py-32">
      <div class="mx-auto max-w-7xl px-6 lg:px-8 relative">
        <div
          class="absolute left-1/2 top-4 h-[1026px] w-[1026px] -translate-x-1/3 stroke-gray-300/70 [mask-image:linear-gradient(to_bottom,white_20%,transparent_75%)] sm:top-16 sm:-translate-x-1/2 lg:-top-16 lg:ml-12 xl:-top-14 xl:translate-x-1/4 xl:ml-0"
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
            <path d="M513 1025C230.23 1025 1 795.77 1 513" stroke="#D4D4D4" strokeLinecap="round" />
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
        <div class="mx-auto max-w-2xl sm:text-center">
          <h2 class="text-base font-semibold leading-7 text-blue-600">integrated e-commerce</h2>
          <p
            class="mt-2 text-3xl font-bold tracking-tight text-gray-900 dark:text-gray-200 sm:text-4xl"
          >
            E-Commerce integrated to your workflow
          </p>
          <p class="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300">
            Vendor ERP has a custom e-commerce platform that is integrated into your workflow. This
            allows you to manage your inventory and grow your sales all in one place.
          </p>
        </div>
      </div>
      <div class="relative overflow-hidden pt-16">
        <div class="mx-auto max-w-7xl px-6 lg:px-8">
          <img
            src="https://dht.sfo3.cdn.digitaloceanspaces.com/images/site/dht-home-screen.PNG"
            alt="App screenshot"
            class="mb-[-6%] rounded-xl shadow-2xl ring-1 ring-gray-900/10"
            width="2432"
            height="1442"
          />
          <div class="relative" aria-hidden="true">
            <div class="absolute -inset-x-20 bottom-0 bg-gradient-to-t from-white pt-[7%]" />
          </div>
        </div>
      </div>
      <div v-for="(feature, featureIdx) of clientFeatures" :key="feature.name">
        <FeatureRight v-if="featureIdx % 2 == 0" :feature="feature" />
        <FeatureLeft v-else :feature="feature" />
      </div>
    </div>

    <!-- Testimonial section -->
    <div class="mx-auto mt-32 max-w-7xl sm:mt-56 sm:px-6 lg:px-8">
      <div
        class="relative overflow-hidden bg-gray-400 dark:bg-gray-700 px-6 py-20 shadow-xl sm:rounded-3xl sm:px-10 sm:py-24 md:px-12 lg:px-20"
      >
        <img
          class="absolute inset-0 h-full w-full object-cover brightness-150"
          src="/images/site/warehouse.png"
          alt=""
        />
        <div class="absolute inset-0 bg-gray-900/90 mix-blend-multiply" />
        <div class="absolute -left-80 -top-56 transform-gpu blur-3xl" aria-hidden="true">
          <div
            class="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-r from-[#ff4694] to-[#776fff] opacity-[0.45]"
            style="
              clip-path: polygon(
                74.1% 44.1%,
                100% 61.6%,
                97.5% 26.9%,
                85.5% 0.1%,
                80.7% 2%,
                72.5% 32.5%,
                60.2% 62.4%,
                52.4% 68.1%,
                47.5% 58.3%,
                45.2% 34.5%,
                27.5% 76.7%,
                0.1% 64.9%,
                17.9% 100%,
                27.6% 76.8%,
                76.1% 97.7%,
                74.1% 44.1%
              );
            "
          />
        </div>
        <div
          class="hidden md:absolute md:bottom-16 md:left-[50rem] md:block md:transform-gpu md:blur-3xl"
          aria-hidden="true"
        >
          <div
            class="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-r from-[#ff4694] to-[#776fff] opacity-25"
            style="
              clip-path: polygon(
                74.1% 44.1%,
                100% 61.6%,
                97.5% 26.9%,
                85.5% 0.1%,
                80.7% 2%,
                72.5% 32.5%,
                60.2% 62.4%,
                52.4% 68.1%,
                47.5% 58.3%,
                45.2% 34.5%,
                27.5% 76.7%,
                0.1% 64.9%,
                17.9% 100%,
                27.6% 76.8%,
                76.1% 97.7%,
                74.1% 44.1%
              );
            "
          />
        </div>
        <div class="relative mx-auto max-w-2xl lg:mx-0">
          <div class="text-white text-2xl font-bold">
            <GlobeAltIcon class="text-white w-12 inline-block" />
            Our vision
          </div>
          <figure>
            <blockquote class="mt-6 text-lg font-semibold text-white sm:text-xl sm:leading-8">
              <p>
                To give you confidence in your inventory and to make you your customers' preferred
                vendor.
              </p>
            </blockquote>
            <figcaption class="mt-6 text-base text-white">
              <div class="font-semibold">Gabriel Suttner</div>
              <div class="mt-1">CEO</div>
            </figcaption>
          </figure>
        </div>
      </div>
    </div>

    <div class="py-24 sm:py-32">
      <div class="mx-auto max-w-7xl px-6 lg:px-8">
        <div class="mx-auto max-w-2xl sm:text-center">
          <h2
            class="text-3xl font-bold tracking-tight text-gray-900 dark:text-gray-200 sm:text-4xl"
          >
            Simple no-tricks pricing
          </h2>
          <!-- <p class="mt-6 text-lg leading-8 text-gray-600">
          Distinctio et nulla eum soluta et neque labore quibusdam. Saepe et quasi iusto modi velit
          ut non voluptas in. Explicabo id ut laborum.
        </p> -->
        </div>
        <div
          class="mx-auto mt-16 max-w-2xl rounded-3xl ring-1 ring-gray-200 dark:bg-gray-700 sm:mt-20 lg:mx-0 lg:flex lg:max-w-none"
        >
          <div class="p-8 sm:p-10 lg:flex-auto">
            <h3 class="text-2xl font-bold tracking-tight text-gray-900 dark:text-gray-200">
              One price for it all
            </h3>
            <p class="mt-6 text-base leading-7 text-gray-600 dark:text-gray-300">
              {{ price }} does not include up to date products or set up fee. Up to date products
              are available for an additional fee.
            </p>
            <div class="mt-10 flex items-center gap-x-4">
              <h4
                class="flex-none text-sm font-semibold leading-6 text-blue-600 dark:text-blue-300"
              >
                What’s included
              </h4>
              <div class="h-px flex-auto bg-gray-100" />
            </div>
            <ul
              role="list"
              class="mt-8 grid grid-cols-1 gap-4 text-sm leading-6 text-gray-600 dark:text-gray-300 sm:grid-cols-2 sm:gap-6"
            >
              <li
                v-for="feature in adminFeatures.filter((el) => el.name != 'Up to date products')"
                :key="feature.name"
                class="flex gap-x-3"
              >
                <CheckIcon
                  class="h-6 w-5 flex-none text-blue-600 dark:text-blue-300"
                  aria-hidden="true"
                />
                {{ feature.name }}
              </li>
              <li v-for="feature in clientFeatures" :key="feature.name" class="flex gap-x-3">
                <CheckIcon
                  class="h-6 w-5 flex-none text-blue-600 dark:text-blue-300"
                  aria-hidden="true"
                />
                {{ feature.name }}
              </li>
            </ul>
          </div>
          <div class="-mt-2 p-2 lg:mt-0 lg:w-full lg:max-w-md lg:flex-shrink-0">
            <div
              class="rounded-2xl bg-gray-50 dark:bg-gray-900 py-10 text-center ring-1 ring-inset ring-gray-900/5 lg:flex lg:flex-col lg:justify-center lg:py-16 h-full"
            >
              <div class="mx-auto max-w-xs px-8">
                <p class="text-base font-semibold text-gray-600 dark:text-gray-300">Pay monthly</p>
                <p class="mt-6 flex items-baseline justify-center gap-x-2">
                  <span
                    class="text-5xl font-bold tracking-tight text-gray-900 dark:text-gray-200"
                    >{{ price }}</span
                  >
                  <span
                    class="text-sm font-semibold leading-6 tracking-wide text-gray-600 dark:text-gray-300"
                    >USD*</span
                  >
                </p>
                <router-link
                  to="/contact"
                  class="mt-10 block w-full rounded-md bg-blue-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
                >
                  Get access
                </router-link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>

  <!-- Footer -->
</template>

<script setup lang="ts">
import {
  BanknotesIcon,
  UserGroupIcon,
  ShoppingCartIcon,
  TruckIcon,
  MagnifyingGlassIcon,
  HeartIcon,
  ArchiveBoxArrowDownIcon,
  CheckIcon,
  LinkIcon,
  WrenchScrewdriverIcon,
  ClockIcon
} from '@heroicons/vue/24/outline';
import { GlobeAltIcon } from '@heroicons/vue/20/solid';
import FeatureRight from '../components/FeatureRight.vue';
import FeatureLeft from '../components/FeatureLeft.vue';
import HomeHero from './../components/HomeHero.vue';
import { computed, ref } from 'vue';

const appView = ref('phone');
const isDark = computed(
  () =>
    localStorage.getItem('darkMode') === 'true' ||
    (!('darkMode' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)
);

const price = '$449';

const adminFeatures = [
  {
    title: 'build trust',
    name: 'Specialized pricing',
    description:
      "Your customers can view, real-time, prices you negotiated with them. This transparency enhances trust and allows your customer's to make informed purchasing decisions.",
    icon: UserGroupIcon,
    video: '/videos/Specialized-pricing.webm'
  },
  {
    title: 'improved cash flow',
    name: 'Get paid faster',
    description:
      "Your customers don't want to pay for items they haven't received. With Vendor ERP, you can split orders for items you have delivered and send an invoice for the delivered products, thus ensuring you get paid faster.",
    icon: BanknotesIcon,
    video: '/videos/splitting-orders.webm'
  },
  {
    title: 'save time',
    name: 'Invoice generation',
    description:
      'You can generate invoices for orders individually or a group of orders at once. This feature saves you time and ensures accurate billing.',
    icon: ClockIcon,
    video: '/videos/invoice-generation.webm'
  },
  {
    title: 'decrease mistakes',
    name: 'Cross function integration',
    description: 'Integrate with your accounting software to keep your books up to date.',
    icon: LinkIcon,
    image: '/images/site/integration-image.webp'
  },
  {
    title: 'save time',
    name: 'Route Generation',
    description:
      'Generate optimal delivery routes instantly with a single click, ensuring faster deployment and timely deliveries. This feature streamlines the logistics process, allowing for efficient planning and execution of delivery schedules.',
    video: '/videos/Route-generation.webm',
    icon: TruckIcon
  }
];

const clientFeatures = [
  {
    title: 'save time',
    name: 'Live inventory',
    description:
      'Your customers can see the live inventory of each item on the website when they are signed in. This allows them to make informed decisions about their purchases without taking your employees time on the phone.',
    icon: WrenchScrewdriverIcon,
    video: '/videos/liveinventory.webm'
  },
  {
    title: '',
    name: 'Multiple users',
    description:
      'Your customers can assign various roles to different users (e.g., admin, manager, sales representative). Each role has specific permissions, ensuring secure access and efficient collaboration.',
    icon: UserGroupIcon,
    video: '/videos/Multiple-users.webm'
  },
  {
    title: 'save time',
    name: 'Advanced search',
    description:
      "Your customers can quickly find items on your website using an advanced search feature. Whether searching by name, category, or other criteria, the system provides accurate results. Empowering your customer's to find what they need will decrease the time you spend on the phone.",
    icon: MagnifyingGlassIcon,
    video: '/videos/advanced-search.webm'
  },
  {
    title: '',
    name: 'Save orders for later',
    description:
      'Customers can save their shopping carts for later. This feature is especially useful for complex orders or when users need to revisit their selections.',
    icon: ShoppingCartIcon,
    video: '/videos/save-carts.webm'
  },
  {
    title: '',
    name: 'Descriptive favorites',
    description:
      'Your customers can save items as favorites and add descriptive titles. This makes it easy to recall preferred products and share recommendations with colleagues.',
    icon: HeartIcon,
    video: '/videos/Descriptive-favorites.webm'
  },
  {
    title: 'build trust',
    name: 'Specialized pricing',
    description:
      'Your customers can view real-time, negotiated prices for items. This transparency enhances trust and allows users to make informed purchasing decisions.',
    icon: BanknotesIcon,
    video: '/videos/customer-specialized-pricing.webm'
  },
  {
    title: 'save time',
    name: 'Order history',
    description:
      'Your customers can see all past orders and invoices in one place. They can also reorder items from past orders. This feature saves your customers time and increases your sales.',
    icon: ArchiveBoxArrowDownIcon,
    video: '/videos/orderhistory.webm'
  },
  {
    title: 'save time',
    name: 'Pay invoice',
    description:
      'Your customers can pay their invoices online. This feature saves your customers time and increases your sales.',
    icon: BanknotesIcon,
    video: '/videos/pay-invoice.mp4'
  }
];

function changeView() {
  appView.value = appView.value === 'phone' ? 'desktop' : 'phone';
}
</script>

<style scoped></style>
