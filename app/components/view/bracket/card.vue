<script lang="ts" setup>
const props = defineProps<{
  battle?: BracketBattle;
  borderWeight: "regular" | "medium" | "bold" | "extrabold";
}>();
</script>

<template>
  <UiCard
    class="py-2 px-3 w-[180px] h-[100px] flex flex-col justify-center items-center"
    :border-weight="props.borderWeight"
  >
    <div
      class="text-4xl font-extrabold tracking-wider text-[#143fff] text-center w-full"
    >
      <div
        class="whitespace-nowrap overflow-hidden text-clip w-full"
      >
        <span v-if="props.battle?.dancerA.name">
          {{ props.battle.dancerA.name }}
        </span>
        <span v-else>&nbsp;</span>
      </div>
      <div
        class="whitespace-nowrap overflow-hidden text-clip w-full"
      >
        <span v-if="props.battle?.dancerB.name">
          {{ props.battle.dancerB.name }}
        </span>
        <span v-else>&nbsp;</span>
      </div>
    </div>
  </UiCard>
</template>

<style></style>
