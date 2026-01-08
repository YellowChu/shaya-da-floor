<script setup lang="ts">
const modelValue = defineModel<BracketBattle>({});
</script>

<template>
  <UiSection
    v-if="modelValue"
    class="flex flex-col gap-1"
  >
    <div class="flex gap-1">
      <input
        class="border-2 border-gray-300 px-2 rounded"
        :class="
          modelValue.dancerA.isLoser && 'line-through'
        "
        type="text"
        placeholder="Dancer A"
        v-model="modelValue.dancerA.name"
      />
      <input
        type="checkbox"
        v-model="modelValue.dancerA.isLoser"
      />
    </div>
    <div class="flex gap-1">
      <input
        class="border-2 border-gray-300 px-2 rounded"
        :class="
          modelValue.dancerB.isLoser && 'line-through'
        "
        type="text"
        placeholder="Dancer B"
        v-model="modelValue.dancerB.name"
      />
      <input
        type="checkbox"
        v-model="modelValue.dancerB.isLoser"
      />
    </div>
  </UiSection>
  <div
    v-else
    class="text-red-900"
  >
    No battle data
  </div>
</template>
