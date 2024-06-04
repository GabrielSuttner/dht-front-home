<template>
  <div v-for="(feature, featureIdx) of features" :key="feature.name">
    <FeatureRight v-if="featureIdx % 2 == 0" :feature="feature" />
    <FeatureLeft v-else :feature="feature" />
  </div>
</template>

<script setup lang="ts">
import {
  FingerPrintIcon,
  BanknotesIcon,
  UserGroupIcon,
  ShoppingCartIcon,
  TruckIcon,
  MagnifyingGlassIcon
} from '@heroicons/vue/24/outline';
import FeatureRight from './../components/home/featureRight.vue';
import FeatureLeft from './../components/home/featureLeft.vue';

const features = [
  {
    name: 'Route Generation',
    title: 'Efficient Route Planning',
    link: 'route-generation',
    description:
      'Generate optimal delivery routes instantly with a single click, ensuring faster deployment and timely deliveries. This feature streamlines the logistics process, allowing for efficient planning and execution of delivery schedules.',
    icon: TruckIcon,
    video: '/videos/Route-generation.webm'
  },
  {
    name: 'Specialized pricing',
    title: 'Live, Negotiated Item Prices',
    link: 'specialized-pricing',
    description:
      'Customers can view real-time, negotiated prices for items. This transparency enhances trust and allows users to make informed purchasing decisions.',
    icon: BanknotesIcon,
    video: '/videos/Specialized-pricing.webm'
  },
  {
    name: 'Multiple users',
    title: 'Role-Based Permissions',
    link: 'multiple-users',
    description:
      'Your customers can assign various roles to different users (e.g., admin, manager, sales representative). Each role has specific permissions, ensuring secure access and efficient collaboration.',
    icon: UserGroupIcon,
    video: '/videos/Multiple-users.webm'
  },
  {
    name: 'Search',
    title: 'Advanced Search',
    link: 'search',
    description:
      'Users can quickly find items using an improved search feature. Whether searching by name, category, or other criteria, the system provides accurate results.',
    icon: MagnifyingGlassIcon,
    video: '/videos/advanced-search.webm'
  },
  {
    name: 'Saved carts',
    title: 'Convenient Order Management',
    link: 'saved-carts',
    description:
      'Customers can save their shopping carts for later. This feature is especially useful for complex orders or when users need to revisit their selections.',
    icon: ShoppingCartIcon,
    video: '/videos/Saved-carts.webm'
  },
  {
    name: 'Descriptive favorites',
    title: 'Personalized Favorites',
    link: 'descriptive-favorites',
    description:
      ' Users can save items as favorites and add descriptive notes. This makes it easy to recall preferred products and share recommendations with colleagues.',
    icon: FingerPrintIcon,
    video: '/videos/Descriptive-favorites.webm'
  },
  {
    name: 'Get paid faster',
    title: 'Flexible Order Splitting',
    link: 'get-paid-faster',
    description:
      'When necessary, users can split orders into multiple shipments. This accommodates different delivery locations, timing preferences, or other requirements.',
    icon: BanknotesIcon,
    video: '/videos/Get-paid-faster.webm'
  },
  {
    name: 'Invoice generation',
    title: 'Seamless Invoicing',
    link: 'invoice-generation',
    description: '',
    icon: BanknotesIcon,
    video: '/videos/invoice-generation.webm'
  },
  {
    name: 'Order history',
    title: 'Simplified Order Tracking',
    link: 'order-history',
    description: 'Customers can see all past orders and invoices in one place.',
    icon: BanknotesIcon,
    video: '/videos/order-history.webm'
  },
  {
    name: 'Integration',
    title: 'Accounting Software Integration',
    link: 'integration',
    description: 'Integrate with your accounting software to keep your books up to date.',
    icon: BanknotesIcon,
    video: '/videos/integration.webm'
  },
  {
    name: 'Live inventory',
    title: 'Real-Time Inventory Updates',
    link: 'live-inventory',
    description: 'Customers see the live inventory of each item on the website.',
    icon: BanknotesIcon,
    video: '/videos/live-inventory.webm'
  }
];
</script>
