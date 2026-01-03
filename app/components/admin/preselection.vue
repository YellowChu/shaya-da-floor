<script lang="ts" setup>
import Papa from "papaparse";

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

// Reordering functionality
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

const moveToStart = (index: number) => {
  const dancers = [...props.modelValue];
  const dancer = dancers.splice(index, 1)[0];
  if (dancer) {
    dancers.unshift(dancer);
  }

  emit("update:modelValue", dancers);
};

const moveToEnd = (index: number) => {
  const dancers = [...props.modelValue];
  const dancer = dancers.splice(index, 1)[0];
  if (dancer) {
    dancers.push(dancer);
  }

  emit("update:modelValue", dancers);
};

const toggleArchive = (id: number) => {
  const dancers = [...props.modelValue];
  const index = dancers.findIndex((d) => d.id === id);
  if (index !== -1 && dancers[index]) {
    dancers[index] = {
      ...dancers[index],
      archived: !dancers[index].archived,
    };
    emit("update:modelValue", dancers);
  }

  emit("update:modelValue", dancers);
};

// New item functionality
const newItemName = ref<string>("");

const addNewItem = () => {
  const name = newItemName.value.trim();
  if (!name) return;

  // Find the largest ID in the current list
  const largestId =
    props.modelValue.length > 0
      ? Math.max(
          ...props.modelValue.map((dancer) => dancer.id)
        )
      : 0;

  const newDancer: PreselectionDancer = {
    id: largestId + 1,
    name: name,
    archived: false,
  };

  const dancers = [...props.modelValue, newDancer];
  emit("update:modelValue", dancers);

  // Clear the input
  newItemName.value = "";
};

const handleNewItemKeydown = (event: KeyboardEvent) => {
  if (event.key === "Enter") {
    addNewItem();
  }
};

// Editing functionality
const editingId = ref<number | null>(null);
const editingName = ref<string>("");

const startEdit = (dancer: PreselectionDancer) => {
  editingId.value = dancer.id;
  editingName.value = dancer.name;
};

const saveEdit = () => {
  if (editingId.value && editingName.value.trim()) {
    const dancers = [...props.modelValue];
    const index = dancers.findIndex(
      (d) => d.id === editingId.value
    );
    if (index !== -1 && dancers[index]) {
      dancers[index] = {
        ...dancers[index],
        name: editingName.value.trim(),
      };
      emit("update:modelValue", dancers);
    }
  }
  cancelEdit();
};

const cancelEdit = () => {
  editingId.value = null;
  editingName.value = "";
};

const handleKeydown = (event: KeyboardEvent) => {
  if (event.key === "Enter") {
    saveEdit();
  } else if (event.key === "Escape") {
    cancelEdit();
  }
};

// Upload CSV functionality
const parseCsv = (e: Event) => {
  const file = (e.target as HTMLInputElement).files?.[0];
  if (!file) return;

  Papa.parse(file, {
    skipEmptyLines: true,
    complete: (results) => {
      console.log(results.data);

      const rows = results.data as string[][];
      const dancers: PreselectionDancer[] = [];

      if (rows.length === 0) return;

      for (const [index, row] of rows.entries()) {
        if (!row[0]) continue;

        const id = index + 1;
        const name = row[0];
        dancers.push({
          id,
          name,
          archived: false,
        });
      }

      emit("update:modelValue", dancers);
    },
  });

  // Clear the file input after processing
  (e.target as HTMLInputElement).value = "";
};
</script>

<template>
  <div>
    <h2 class="text-lg font-bold">Preselection</h2>

    <div class="flex flex-col gap-4 my-4">
      <div class="flex flex-col">
        <label
          class="text-sm font-medium mb-2"
          for="csv-input"
          >Upload CSV</label
        >

        <input
          id="csv-input"
          type="file"
          accept=".csv,text/csv"
          @change="parseCsv"
        />
      </div>

      <div class="flex flex-col">
        <label class="text-sm font-medium mb-2">
          Add New Dancer
        </label>
        <div class="flex gap-2">
          <input
            v-model="newItemName"
            type="text"
            class="flex-1 px-3 py-2 border border-blue-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder="Enter dancer name"
            @keydown="handleNewItemKeydown"
          />
          <button
            class="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 disabled:bg-gray-300 disabled:cursor-not-allowed transition-colors duration-200"
            @click="addNewItem"
            :disabled="!newItemName.trim()"
            title="Add Dancer"
          >
            Add
          </button>
        </div>
      </div>
    </div>

    <div class="max-h-[24rem] overflow-scroll">
      <TransitionGroup
        name="dancer-list"
        tag="div"
        class="flex flex-col gap-2"
      >
        <div
          v-for="(dancer, index) in modelValue"
          :key="dancer.id"
          class="flex items-center gap-2 p-2 bg-gray-50 rounded transition-all duration-300 ease-in-out hover:bg-gray-100"
        >
          <div class="flex-1 flex items-center gap-2">
            <span
              class="text-sm font-medium text-gray-600 min-w-8"
              >{{ dancer.id }}</span
            >

            <!-- Display mode -->
            <span
              v-if="editingId !== dancer.id"
              class="flex-1 cursor-pointer hover:text-blue-600 transition-colors"
              @click="startEdit(dancer)"
              :title="'Click to edit ' + dancer.name"
            >
              <del
                v-if="dancer.archived"
                class="text-gray-600"
              >
                {{ dancer.name }}
              </del>
              <span v-else>
                {{ dancer.name }}
              </span>
            </span>

            <!-- Edit mode -->
            <div
              v-else
              class="flex-1 flex items-center gap-2"
            >
              <input
                v-model="editingName"
                type="text"
                class="flex-1 px-2 py-1 text-sm border border-blue-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                @keydown="handleKeydown"
                @blur="saveEdit"
                ref="editInput"
                placeholder="Enter dancer name"
              />
              <button
                class="px-2 py-1 text-xs bg-green-500 text-white rounded hover:bg-green-600 transition-colors duration-200"
                @click="saveEdit"
                title="Save"
              >
                ✓
              </button>
              <button
                class="px-2 py-1 text-xs bg-gray-500 text-white rounded hover:bg-gray-600 transition-colors duration-200"
                @click="cancelEdit"
                title="Cancel"
              >
                ✕
              </button>
            </div>
          </div>

          <div class="flex gap-1">
            <!-- Edit button (only show when not in edit mode) -->
            <button
              v-if="editingId !== dancer.id"
              class="px-2 py-1 text-xs bg-yellow-500 text-white rounded hover:bg-yellow-600 disabled:bg-gray-300 disabled:cursor-not-allowed transition-colors duration-200"
              @click="startEdit(dancer)"
              :disabled="dancer.archived"
              title="Edit Name"
            >
              ✏
            </button>

            <button
              class="px-2 py-1 text-xs bg-blue-500 text-white rounded hover:bg-blue-600 disabled:bg-gray-300 disabled:cursor-not-allowed transition-colors duration-200"
              @click="moveUp(index)"
              :disabled="
                dancer.archived || editingId === dancer.id
              "
              title="Move Up"
            >
              ↑
            </button>
            <button
              class="px-2 py-1 text-xs bg-blue-500 text-white rounded hover:bg-blue-600 disabled:bg-gray-300 disabled:cursor-not-allowed transition-colors duration-200"
              @click="moveDown(index)"
              :disabled="
                dancer.archived || editingId === dancer.id
              "
              title="Move Down"
            >
              ↓
            </button>
            <button
              class="px-2 py-1 text-xs bg-green-500 text-white rounded hover:bg-green-600 disabled:bg-gray-300 disabled:cursor-not-allowed transition-colors duration-200"
              @click="moveToStart(index)"
              :disabled="
                dancer.archived || editingId === dancer.id
              "
              title="Move to Start"
            >
              ⇈
            </button>
            <button
              class="px-2 py-1 text-xs bg-green-500 text-white rounded hover:bg-green-600 disabled:bg-gray-300 disabled:cursor-not-allowed transition-colors duration-200"
              @click="moveToEnd(index)"
              :disabled="
                dancer.archived || editingId === dancer.id
              "
              title="Move to End"
            >
              ⇊
            </button>
            <button
              class="px-2 py-1 text-xs text-white rounded disabled:bg-gray-300 disabled:cursor-not-allowed transition-colors duration-200"
              :class="
                dancer.archived
                  ? 'bg-green-500 hover:bg-green-600'
                  : 'bg-red-500 hover:bg-red-600'
              "
              @click="toggleArchive(dancer.id)"
              :disabled="editingId === dancer.id"
              title="Toggle Archive"
            >
              {{ dancer.archived ? "✓" : "✕" }}
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
