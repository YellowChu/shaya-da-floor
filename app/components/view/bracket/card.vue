<script lang="ts" setup>
const props = defineProps<{
  dancerA: string;
  dancerB: string;
  hideDancerB?: boolean;
}>();
</script>

<template>
  <div class="flex flex-col gap-2">
    <div
      class="flex items-center justify-center px-4 py-2 text-white font-bold w-[180px] h-[70px] bg-red-700 opacity-90 rounded"
    >
      {{ dancerA }}
    </div>
    <div
      v-if="!hideDancerB"
      class="flex items-center justify-center px-4 py-2 text-white font-bold w-[180px] h-[70px] bg-red-700 opacity-80 rounded"
    >
      {{ dancerB }}
    </div>
  </div>
</template>
