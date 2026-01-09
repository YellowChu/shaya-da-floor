<script lang="ts" setup>
const props = defineProps<{
  posters: string[];
}>();

const currentPoster = defineModel<string>();

const emit = defineEmits<{
  (e: "update:modelValue", value: string): void;
  (e: "save"): void;
}>();

watch(currentPoster, () => {
  emit("save");
});
</script>

<template>
  <UiSection>
    <h2 class="text-lg font-bold">Poster</h2>

    <div class="overflow-x-auto">
      <div class="min-w-max flex">
        <div
          v-for="poster in posters"
          :key="poster"
        >
          <UiSection
            v-if="poster"
            class="flex flex-col gap-2 ml-2"
          >
            <input
              type="radio"
              id="current-poster"
              :value="poster"
              v-model="currentPoster"
            />

            <div class="flex flex-col items-center">
              <NuxtImg
                :src="`/posters/${poster}`"
                width="200"
                class="object-cover rounded-md"
              />

              <div class="text-center font-bold">
                {{ poster }}
              </div>
            </div>
          </UiSection>
        </div>
      </div>
    </div>
  </UiSection>
</template>
