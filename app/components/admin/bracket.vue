<script lang="ts" setup>
const TOP_16_LENGTH = 8;
const TOP_8_LENGTH = 4;
const TOP_4_LENGTH = 2;

const modelValue = defineModel<Bracket>({
  required: true,
});

const emit = defineEmits<{
  (e: "update:modelValue", value: Bracket): void;
  (e: "save"): void;
}>();

watch(modelValue, () => {
  emit("save");
});
</script>

<template>
  <UiSection>
    <h2 class="text-lg font-bold">Bracket</h2>

    <div class="flex flex-col gap-4 my-4">
      <div>
        <h3 class="font-semibold">Type of Bracket</h3>
        <div class="flex flex-col">
          <div>
            <input
              type="radio"
              id="top24"
              :value="true"
              v-model="modelValue.hasTwoTop16"
            />&nbsp;
            <label for="top24">Top24</label>
          </div>
          <div>
            <input
              type="radio"
              id="top16"
              :value="false"
              v-model="modelValue.hasTwoTop16"
            />&nbsp;
            <label for="top16">Top16</label>
          </div>
        </div>
      </div>

      <UiSection class="!bg-white overflow-x-auto">
        <div
          class="grid grid-cols-5 grid-rows-8 gap-x-8 gap-y-3 min-w-max"
        >
          <!-- Column 1: 1–8 -->
          <div class="col-[1] row-[1]">
            <AdminBracketBattle
              v-model="modelValue.top16A[0]"
            />
          </div>
          <div class="col-[1] row-[2]">
            <AdminBracketBattle
              v-model="modelValue.top16A[1]"
            />
          </div>
          <div class="col-[1] row-[3]">
            <AdminBracketBattle
              v-model="modelValue.top16A[2]"
            />
          </div>
          <div class="col-[1] row-[4]">
            <AdminBracketBattle
              v-model="modelValue.top16A[3]"
            />
          </div>
          <div class="col-[1] row-[5]">
            <AdminBracketBattle
              v-model="modelValue.top16A[4]"
            />
          </div>
          <div class="col-[1] row-[6]">
            <AdminBracketBattle
              v-model="modelValue.top16A[5]"
            />
          </div>
          <div class="col-[1] row-[7]">
            <AdminBracketBattle
              v-model="modelValue.top16A[6]"
            />
          </div>
          <div class="col-[1] row-[8]">
            <AdminBracketBattle
              v-model="modelValue.top16A[7]"
            />
          </div>

          <!-- Column 2: 9–16 -->
          <div class="col-[2] row-[1]">
            <AdminBracketBattle
              v-model="modelValue.top16B[0]"
            />
          </div>
          <div class="col-[2] row-[2]">
            <AdminBracketBattle
              v-model="modelValue.top16B[1]"
            />
          </div>
          <div class="col-[2] row-[3]">
            <AdminBracketBattle
              v-model="modelValue.top16B[2]"
            />
          </div>
          <div class="col-[2] row-[4]">
            <AdminBracketBattle
              v-model="modelValue.top16B[3]"
            />
          </div>
          <div class="col-[2] row-[5]">
            <AdminBracketBattle
              v-model="modelValue.top16B[4]"
            />
          </div>
          <div class="col-[2] row-[6]">
            <AdminBracketBattle
              v-model="modelValue.top16B[5]"
            />
          </div>
          <div class="col-[2] row-[7]">
            <AdminBracketBattle
              v-model="modelValue.top16B[6]"
            />
          </div>
          <div class="col-[2] row-[8]">
            <AdminBracketBattle
              v-model="modelValue.top16B[7]"
            />
          </div>

          <!-- Column 3: 17-20 -->
          <div class="col-[3] row-[1]">
            <AdminBracketBattle
              v-model="modelValue.top8[0]"
            />
          </div>
          <div class="col-[3] row-[3]">
            <AdminBracketBattle
              v-model="modelValue.top8[1]"
            />
          </div>
          <div class="col-[3] row-[5]">
            <AdminBracketBattle
              v-model="modelValue.top8[2]"
            />
          </div>
          <div class="col-[3] row-[7]">
            <AdminBracketBattle
              v-model="modelValue.top8[3]"
            />
          </div>

          <!-- Column 4: 21-23 -->
          <div class="col-[4] row-[2]">
            <AdminBracketBattle
              v-model="modelValue.top4[0]"
            />
          </div>
          <div class="col-[4] row-[6]">
            <AdminBracketBattle
              v-model="modelValue.top4[1]"
            />
          </div>

          <!-- Column 5: 24 -->
          <div class="col-[5] row-[4]">
            <AdminBracketBattle
              v-model="modelValue.final"
            />
          </div>
        </div>
      </UiSection>
    </div>

    <UiButton
      class="mt-4 px-2 py-1 text-xs bg-green-500 text-white rounded hover:bg-green-600 transition-colors duration-200"
      @click="$emit('save')"
      variant="success"
    >
      Save
    </UiButton>
  </UiSection>
</template>
