<template>
  <div>
    <PhoneAppScreen>
      <template #body>
        <div class="p-4">
          <div class="flex gap-2">
            <div class="text-xs leading-6 text-gray-500 dark:text-gray-200">
              <button type="button" @click="$emit('changeView')">
                <EyeIcon class="h-6 w-6 inline-block" />
                View on destop
              </button>
            </div>
            <div class="text-sm text-gray-900"></div>
            <PlusCircleIcon class="ml-auto h-6 w-6 text-cyan-600" />
          </div>
          <div class="mt-3 border-t border-gray-200 pt-5">
            <div class="flex items-baseline gap-2 text-gray-900 dark:text-gray-200">
              <div class="text-2xl tabular-nums tracking-tight">
                {{ revenue }}
              </div>
              <div class="text-sm">USD</div>
              <div class="ml-auto text-sm tabular-nums tracking-tight text-cyan-500">+12.5%</div>
            </div>
            <div class="mt-6 flex gap-4 text-xs text-gray-500 dark:text-gray-300">
              <div>D</div>
              <div class="font-semibold text-cyan-600">W</div>
              <div>M</div>
              <div>Y</div>
            </div>
            <div class="mt-3 rounded-lg ring-1 ring-inset ring-black/5 overflow-hidden">
              <VueApexCharts
                ref="mainChart"
                id="main-chart"
                type="area"
                height="286"
                width="286"
                :options="mainChartOptions"
                :series="chartSeries"
              />
            </div>
            <div
              class="mt-4 rounded-lg bg-cyan-500 px-4 py-2 text-center text-sm font-semibold text-white"
            >
              Analyze Data
            </div>
            <div class="mt-3 divide-y divide-gray-100 text-sm text-gray-900 dark:text-gray-200">
              <div class="flex justify-between py-1">
                <div class="text-gray-500 dark:text-gray-200">Sales</div>
                <div class="font-medium">$ 90,539</div>
              </div>
              <div class="flex justify-between py-1">
                <div class="text-gray-500 dark:text-gray-200">Invoices</div>
                <div class="font-medium">$ 55,428</div>
              </div>
              <div class="flex justify-between py-1">
                <div class="text-gray-500 dark:text-gray-200">Collection</div>
                <div class="font-medium">$ 66,177</div>
              </div>
            </div>
          </div>
        </div>
      </template>
    </PhoneAppScreen>
  </div>
</template>

<script setup lang="ts">
import { ref, type Ref, type ComputedRef, computed, onMounted } from 'vue';
import PhoneAppScreen from './PhoneAppScreen.vue';
import VueApexCharts from 'vue3-apexcharts';

import { EyeIcon, PlusCircleIcon } from '@heroicons/vue/24/outline';

defineEmits(['changeView']);

const chartSeries: Ref<any[]> = ref([
  {
    name: 'Sales',
    data: [14236, 13753, 15521, 13753, 14236, 19040],
    color: '#00b33c'
  },
  {
    name: 'Invoiced',
    data: [7272, 10639, 7917, 7272, 7838, 14490],
    color: '#ffcc00'
  },
  {
    name: 'Collected',
    data: [7272, 6431, 4946, 14490, 18548, 14490],
    color: '#ff3333'
  }
]);

const revenue = ref('$ 90,539');

function formatAccountingNumber(number: number): string {
  const formattedNumber = number.toFixed(0).replace(/\B(?=(\d{3})+(?!\d))/g, ',');

  return `$ ${formattedNumber}`;
}

const mainChartColors: ComputedRef<any> = computed(() => {
  if (document.documentElement.classList.contains('dark')) {
    return {
      borderColor: '#374151',
      labelColor: '#9CA3AF',
      opacityFrom: 0,
      opacityTo: 0.15
    };
  } else {
    return {
      borderColor: '#F3F4F6',
      labelColor: '#6B7280',
      opacityFrom: 0.45,
      opacityTo: 0
    };
  }
});
const isDark = computed(() => document.documentElement.classList.contains('dark'));

const categories = computed(() => {
  const now = new Date();
  const dates = Array.from({ length: 6 }, (_, i) => {
    const date = new Date(now);
    date.setDate(now.getDate() - i);
    return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
  });
  return dates.reverse();
});

const mainChartOptions = ref({
  chart: {
    id: 'main-chart',
    fontFamily: 'Inter, sans-serif',
    toolbar: {
      show: false
    },
    background: isDark.value ? '#1f2937' : '#fff'
  },
  fill: {
    type: 'gradient',
    gradient: {
      enabled: true,
      opacityFrom: mainChartColors.value.opacityFrom,
      opacityTo: mainChartColors.value.opacityTo
    }
  },
  dataLabels: {
    enabled: false
  },
  tooltip: {
    style: {
      fontSize: '14px',
      fontFamily: 'Inter, sans-serif'
    },
    y: {
      formatter: (val: number) => `${formatAccountingNumber(val)}`
    }
  },
  grid: {
    show: true,
    borderColor: mainChartColors.value.borderColor,
    strokeDashArray: 1,
    padding: {
      left: 10,
      bottom: 5,
      right: 10
    }
  },
  markers: {
    size: 5,
    strokeColors: '#ffffff',
    hover: {
      size: undefined,
      sizeOffset: 3
    }
  },
  legend: {
    show: false
  },
  yaxis: {
    show: false
  },
  xaxis: {
    categories: categories.value,
    type: 'category',
    labels: {
      show: false
    },
    axisBorder: {
      color: mainChartColors.value.borderColor
    },
    axisTicks: {
      color: mainChartColors.value.borderColor
    },
    crosshairs: {
      show: true,
      position: 'back',
      stroke: {
        color: mainChartColors.value.borderColor,
        width: 1,
        dashArray: 10
      }
    }
  },
  theme: {
    mode: isDark.value ? 'dark' : 'light',
    palette: 'palette2',
    monochrome: {
      enabled: false,
      color: '#255aee',
      shadeTo: 'dark',
      shadeIntensity: 0.65
    }
  }
});

const mainChart = ref<ApexCharts>();

onMounted(() => {
  if (mainChart.value) {
    const chart = new ApexCharts(mainChart.value, mainChartOptions.value);
    chart.render();
  }
});
</script>

<style scoped></style>
