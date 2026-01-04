<script lang="ts" setup>
const modelValue = defineModel<CurrentViewEnum>({
  required: true,
});

const emit = defineEmits<{
  (e: "save"): void;
}>();

watch(modelValue, () => {
  emit("save");
});
</script>

<template>
  <div>
    <h2 class="text-lg font-bold">View</h2>
    <div class="flex flex-col">
      <div>
        <input
          type="radio"
          id="preselection"
          :value="CurrentViewEnum.Preselection"
          v-model="modelValue"
        />&nbsp;
        <label for="preselection">Preselection</label>
      </div>
      <div>
        <input
          type="radio"
          id="bracket"
          :value="CurrentViewEnum.Bracket"
          v-model="modelValue"
        />&nbsp;
        <label for="bracket">Bracket</label>
      </div>
      <div>
        <input
          type="radio"
          id="battle"
          :value="CurrentViewEnum.Battle"
          v-model="modelValue"
        />&nbsp;
        <label for="battle">Battle</label>
      </div>
    </div>
  </div>
</template>
