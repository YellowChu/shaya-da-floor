<script lang="ts" setup>
const props = withDefaults(
  defineProps<{
    modelValue?: PreselectionDancer[];
  }>(),
  {
    modelValue: () => [],
  }
);

const emit = defineEmits<{
  (
    e: "update:modelValue",
    value: PreselectionDancer[]
  ): void;
  (e: "save"): void;
}>();

const moveUp = (index: number) => {
  if (index > 0) {
    const dancers = [...props.modelValue];
    const current = dancers[index];
    const previous = dancers[index - 1];
    if (current && previous) {
      dancers[index] = previous;
      dancers[index - 1] = current;
    }

    emit("update:modelValue", dancers);
  }
};

const moveDown = (index: number) => {
  if (index < props.modelValue.length - 1) {
    const dancers = [...props.modelValue];
    const current = dancers[index];
    const next = dancers[index + 1];
    if (current && next) {
      dancers[index] = next;
      dancers[index + 1] = current;
    }

    emit("update:modelValue", dancers);
  }
};

const moveToEnd = (index: number) => {
  const dancers = [...props.modelValue];
  const dancer = dancers.splice(index, 1)[0];
  if (dancer) {
    dancers.push(dancer);
  }

  emit("update:modelValue", dancers);
};

const removePreselectionDancer = (id: number) => {
  const dancers = props.modelValue.filter(
    (d) => d.id !== id
  );

  emit("update:modelValue", dancers);
};
</script>

<template>
  <div>
    <h2 class="text-lg font-bold">Preselection</h2>

    <div class="max-h-[24rem] overflow-scroll">
      <TransitionGroup
        name="dancer-list"
        tag="div"
        class="flex flex-col gap-2"
      >
        <div
          v-for="(dancer, index) in modelValue"
          :key="dancer.id"
          class="flex items-center gap-2 p-2 bg-gray-50 rounded"
        >
          <span class="flex-1"
            >{{ dancer.id }} {{ dancer.name }}</span
          >
          <div class="flex gap-1">
            <button
              class="px-2 py-1 text-xs bg-blue-500 text-white rounded hover:bg-blue-600 disabled:bg-gray-300 disabled:cursor-not-allowed transition-colors duration-200"
              @click="moveUp(index)"
              :disabled="index === 0"
              title="Move Up"
            >
              ↑
            </button>
            <button
              class="px-2 py-1 text-xs bg-blue-500 text-white rounded hover:bg-blue-600 disabled:bg-gray-300 disabled:cursor-not-allowed transition-colors duration-200"
              @click="moveDown(index)"
              :disabled="index === modelValue.length - 1"
              title="Move Down"
            >
              ↓
            </button>
            <button
              class="px-2 py-1 text-xs bg-green-500 text-white rounded hover:bg-green-600 disabled:bg-gray-300 disabled:cursor-not-allowed transition-colors duration-200"
              @click="moveToEnd(index)"
              :disabled="index === modelValue.length - 1"
              title="Move to End"
            >
              ⇊
            </button>
            <button
              class="px-2 py-1 text-xs bg-red-500 text-white rounded hover:bg-red-600 transition-colors duration-200"
              @click="removePreselectionDancer(dancer.id)"
              title="Remove"
            >
              ✕
            </button>
          </div>
        </div>
      </TransitionGroup>
    </div>
    <button
      class="mt-4 px-2 py-1 text-xs bg-green-500 text-white rounded hover:bg-green-600 transition-colors duration-200"
      @click="$emit('save')"
    >
      Save
    </button>
  </div>
</template>

<style scoped>
/* List transition animations */
.dancer-list-move,
.dancer-list-enter-active,
.dancer-list-leave-active {
  transition: all 0.3s ease;
}

.dancer-list-enter-from {
  opacity: 0;
  transform: translateX(-20px) scale(0.95);
}

.dancer-list-leave-to {
  opacity: 0;
  transform: translateX(20px) scale(0.95);
}

.dancer-list-leave-active {
  position: absolute;
  right: 0;
  left: 0;
}

/* Additional hover and focus animations */
.dancer-list-item {
  animation: slideIn 0.3s ease-out;
}

@keyframes slideIn {
  from {
    opacity: 0;
    transform: translateY(-10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Button press animation */
button:active {
  transform: scale(0.95);
  transition: transform 0.1s;
}
</style>
