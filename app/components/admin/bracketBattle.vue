<script setup lang="ts">
const battle = defineModel<Battle>("battle", {
  required: true,
});

const dancers = defineModel<Dancer[]>("dancers", {
  required: true,
});

const dancerA = computed(() =>
  dancers.value.find((d) => d.id === battle.value.dancerAId)
);

const dancerB = computed(() =>
  dancers.value.find((d) => d.id === battle.value.dancerBId)
);

const emit = defineEmits<{
  (e: "update:battle", value: Battle): void;
  (e: "update:dancers", value: Dancer[]): void;
  (e: "save"): void;
}>();

const editingDancer = ref({
  id: -1,
  name: "",
  image: "",
});

const saveEdit = () => {
  if (
    editingDancer.value.id !== -1 &&
    editingDancer.value.name.trim()
  ) {
    const updatedDancers = [...dancers.value];
    const index = updatedDancers.findIndex(
      (d) => d.id === editingDancer.value.id
    );

    if (index !== -1 && updatedDancers[index]) {
      updatedDancers[index] = {
        ...updatedDancers[index],
        name: editingDancer.value.name.trim(),
        image: editingDancer.value.image.trim(),
      };
      // TODO
      // emit("update:dancers", updatedDancers);
      // emit("save");
    }
  }
  cancelEdit();
};

const cancelEdit = () => {
  editingDancer.value.id = -1;
  editingDancer.value.name = "";
  editingDancer.value.image = "";
};

const { isDragging } = useIsDragging();

const startDrag = (event: DragEvent, id: number) => {
  event.dataTransfer?.setData("dancerId", id.toString());
};

const onDropDancerA = (event: DragEvent) => {
  const dancerId = event.dataTransfer?.getData("dancerId");
  if (!dancerId) return;

  const fromId = parseInt(dancerId, 10);
  const index = dancers.value.findIndex(
    (d) => d.id === fromId
  );

  if (index !== -1 && dancers.value[index]) {
    battle.value.dancerAId = dancers.value[index].id;
    // TODO
    emit("update:battle", battle.value);
    // emit("save");
  }
};

const onDropDancerB = (event: DragEvent) => {
  const dancerId = event.dataTransfer?.getData("dancerId");
  if (!dancerId) return;

  const fromId = parseInt(dancerId, 10);
  const index = dancers.value.findIndex(
    (d) => d.id === fromId
  );

  if (index !== -1 && dancers.value[index]) {
    battle.value.dancerBId = dancers.value[index].id;
    // TODO
    emit("update:battle", battle.value);
    // emit("save");
  }
};
</script>

<template>
  <UiSection class="flex flex-col items-center gap-2">
    <input
      type="text"
      class="px-3 py-2 border w-full border-blue-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
      v-model="battle.title"
    />
    <div class="flex gap-1 items-center">
      <UiSection
        class="flex flex-col gap-2 ml-2 w-[200px] h-[100px] !bg-white"
      >
        <!-- No dancer mode -->
        <div
          v-if="!dancerA"
          class="flex flex-col items-center"
          @drop="onDropDancerA($event)"
          @dragenter.prevent
          @dragover.prevent
        />

        <!-- Display mode -->
        <div
          v-else-if="editingDancer.id !== battle.dancerAId"
          class="flex flex-col items-center"
        >
          <div class="text-center font-bold">
            {{ dancerA.name }}
          </div>

          <div class="flex mt-2 w-full">
            <button
              class="px-2 py-1 w-full text-xl bg-green-500 text-white rounded hover:bg-green-600 disabled:bg-gray-300 disabled:cursor-not-allowed transition-colors duration-200 cursor-grabbing"
              :disabled="editingDancer.id !== -1"
              :draggable="
                editingDancer.id === -1 ? 'true' : 'false'
              "
              @dragstart="startDrag($event, dancerA.id)"
            >
              ⤧
            </button>
          </div>
        </div>
      </UiSection>

      <UiSection
        class="flex flex-col gap-2 ml-2 w-[200px] h-[100px] !bg-white"
      >
        <!-- No dancer mode -->
        <div
          v-if="!dancerB"
          class="flex flex-col items-center"
          @drop="onDropDancerB($event)"
          @dragenter.prevent
          @dragover.prevent
        />

        <!-- Display mode -->
        <div
          v-else-if="editingDancer.id !== battle.dancerBId"
          class="flex flex-col items-center"
        >
          <div class="text-center font-bold">
            {{ dancerB.name }}
          </div>

          <div class="flex mt-2 w-full">
            <button
              class="px-2 py-1 w-full text-xl bg-green-500 text-white rounded hover:bg-green-600 disabled:bg-gray-300 disabled:cursor-not-allowed transition-colors duration-200 cursor-grabbing"
              :disabled="editingDancer.id !== -1"
              :draggable="
                editingDancer.id === -1 ? 'true' : 'false'
              "
              @dragstart="startDrag($event, dancerB.id)"
            >
              ⤧
            </button>
          </div>
        </div>
      </UiSection>
    </div>
  </UiSection>
</template>
