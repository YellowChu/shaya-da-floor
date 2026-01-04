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
  <div>
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

      <div class="flex gap-16">
        <div>
          <h3 class="font-semibold mb-2">Top 16A</h3>
          <div
            class="grid grid-cols-2 grid-rows-4 grid-flow-col gap-2"
          >
            <div
              v-for="idx in Array(TOP_16_LENGTH).keys()"
              :key="idx"
              class="mb-2 item"
            >
              <h4 class="font-semibold">
                Battle {{ idx + 1 }}
              </h4>
              <div
                v-if="modelValue.top16A[idx]"
                class="flex flex-col gap-1"
              >
                <div class="flex gap-1">
                  <input
                    class="border-2 border-gray-300 px-2 rounded"
                    type="text"
                    placeholder="Dancer A"
                    v-model="
                      modelValue.top16A[idx].dancerA.name
                    "
                  />
                  <input
                    type="checkbox"
                    v-model="
                      modelValue.top16A[idx].dancerA.isLoser
                    "
                  />
                </div>
                <div class="flex gap-1">
                  <input
                    class="border-2 border-gray-300 px-2 rounded"
                    type="text"
                    placeholder="Dancer B"
                    v-model="
                      modelValue.top16A[idx].dancerB.name
                    "
                  />
                  <input
                    type="checkbox"
                    v-model="
                      modelValue.top16A[idx].dancerB.isLoser
                    "
                  />
                </div>
              </div>
              <div
                v-else
                class="text-red-900"
              >
                No battle data
              </div>
            </div>
          </div>
        </div>

        <div>
          <h3 class="font-semibold mb-2">Top 16B</h3>
          <div
            class="grid grid-cols-2 grid-rows-4 grid-flow-col gap-2"
          >
            <div
              v-for="idx in Array(TOP_16_LENGTH).keys()"
              :key="idx"
              class="mb-2"
            >
              <h4 class="font-semibold">
                Battle {{ idx + 1 }}
              </h4>
              <div
                v-if="modelValue.top16B[idx]"
                class="flex flex-col gap-1"
              >
                <div class="flex gap-1">
                  <input
                    class="border-2 border-gray-300 px-2 rounded"
                    type="text"
                    placeholder="Dancer A"
                    v-model="
                      modelValue.top16B[idx].dancerA.name
                    "
                  />
                  <input
                    type="checkbox"
                    v-model="
                      modelValue.top16B[idx].dancerA.isLoser
                    "
                  />
                </div>
                <div class="flex gap-1">
                  <input
                    class="border-2 border-gray-300 px-2 rounded"
                    type="text"
                    placeholder="Dancer B"
                    v-model="
                      modelValue.top16B[idx].dancerB.name
                    "
                  />
                  <input
                    type="checkbox"
                    v-model="
                      modelValue.top16B[idx].dancerB.isLoser
                    "
                  />
                </div>
              </div>
              <div
                v-else
                class="text-red-900"
              >
                No battle data
              </div>
            </div>
          </div>
        </div>

        <div>
          <h3 class="font-semibold mb-2">Top 8</h3>
          <div
            class="grid grid-cols-1 grid-rows-4 grid-flow-col gap-2"
          >
            <div
              v-for="idx in Array(TOP_8_LENGTH).keys()"
              :key="idx"
              class="mb-2"
            >
              <h4 class="font-semibold">
                Battle {{ idx + 1 }}
              </h4>
              <div
                v-if="modelValue.top8[idx]"
                class="flex flex-col gap-1"
              >
                <div class="flex gap-1">
                  <input
                    class="border-2 border-gray-300 px-2 rounded"
                    type="text"
                    placeholder="Dancer A"
                    v-model="
                      modelValue.top8[idx].dancerA.name
                    "
                  />
                  <input
                    type="checkbox"
                    v-model="
                      modelValue.top8[idx].dancerA.isLoser
                    "
                  />
                </div>
                <div class="flex gap-1">
                  <input
                    class="border-2 border-gray-300 px-2 rounded"
                    type="text"
                    placeholder="Dancer B"
                    v-model="
                      modelValue.top8[idx].dancerB.name
                    "
                  />
                  <input
                    type="checkbox"
                    v-model="
                      modelValue.top8[idx].dancerB.isLoser
                    "
                  />
                </div>
              </div>
              <div
                v-else
                class="text-red-900"
              >
                No battle data
              </div>
            </div>
          </div>
        </div>

        <div>
          <h3 class="font-semibold mb-2">Top 4</h3>
          <div
            class="grid grid-cols-1 grid-rows-2 grid-flow-col gap-2"
          >
            <div
              v-for="idx in Array(TOP_4_LENGTH).keys()"
              :key="idx"
              class="mb-2"
            >
              <h4 class="font-semibold">
                Battle {{ idx + 1 }}
              </h4>
              <div
                v-if="modelValue.top4[idx]"
                class="flex flex-col gap-1"
              >
                <div class="flex gap-1">
                  <input
                    class="border-2 border-gray-300 px-2 rounded"
                    type="text"
                    placeholder="Dancer A"
                    v-model="
                      modelValue.top4[idx].dancerA.name
                    "
                  />
                  <input
                    type="checkbox"
                    v-model="
                      modelValue.top4[idx].dancerA.isLoser
                    "
                  />
                </div>
                <div class="flex gap-1">
                  <input
                    class="border-2 border-gray-300 px-2 rounded"
                    type="text"
                    placeholder="Dancer B"
                    v-model="
                      modelValue.top4[idx].dancerB.name
                    "
                  />
                  <input
                    type="checkbox"
                    v-model="
                      modelValue.top4[idx].dancerB.isLoser
                    "
                  />
                </div>
              </div>
              <div
                v-else
                class="text-red-900"
              >
                No battle data
              </div>
            </div>
          </div>
        </div>

        <div>
          <h3 class="font-semibold mb-2">Final</h3>
          <div class="mb-2">
            <h4 class="font-semibold">Battle</h4>
            <div class="flex flex-col gap-1">
              <div class="flex gap-1">
                <input
                  class="border-2 border-gray-300 px-2 rounded"
                  type="text"
                  placeholder="Dancer A"
                  v-model="modelValue.final.dancerA.name"
                />
                <input
                  type="checkbox"
                  v-model="modelValue.final.dancerA.isLoser"
                />
              </div>
              <div class="flex gap-1">
                <input
                  class="border-2 border-gray-300 px-2 rounded"
                  type="text"
                  placeholder="Dancer B"
                  v-model="modelValue.final.dancerB.name"
                />
                <input
                  type="checkbox"
                  v-model="modelValue.final.dancerB.isLoser"
                />
              </div>
            </div>
          </div>

          <h3 class="font-semibold mb-2 mt-2">Winner</h3>
          <input
            class="border-2 border-gray-300 px-2 rounded"
            type="text"
            placeholder="Winner"
            v-model="modelValue.winner"
          />
        </div>
      </div>
    </div>

    <button
      class="mt-4 px-2 py-1 text-xs bg-green-500 text-white rounded hover:bg-green-600 transition-colors duration-200"
      @click="$emit('save')"
    >
      Save
    </button>
  </div>
</template>
