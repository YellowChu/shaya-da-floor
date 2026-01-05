<script lang="ts" setup>
const bracket = defineModel<Bracket>("bracket", {
  required: true,
});

const dancers = defineModel<Dancer[]>("dancers", {
  required: true,
});

const emit = defineEmits<{
  (e: "update:bracket", value: Bracket): void;
  (e: "update:dancers", value: Dancer[]): void;
  (e: "save"): void;
}>();

// watch(modelValue, () => {
//   emit("save");
// });

const search = ref("");

const newDancer = ref<Dancer>({
  id: -1,
  name: "",
  image: "",
  donePreselection: true,
  isInBattle: true,
  isLoser: false,
});

const addNewDancer = () => {
  const name = newDancer.value.name.trim();
  if (!name) return;

  // Find the largest ID in the current list
  const largestId =
    dancers.value.length > 0
      ? Math.max(
          ...dancers.value.map((dancer) => dancer.id)
        )
      : 0;

  const dancerToAdd: Dancer = {
    id: largestId + 1,
    name: name,
    image: newDancer.value.image,
    donePreselection: true,
    isInBattle: true,
    isLoser: false,
  };

  console.log(dancerToAdd);
  const updatedDancers = [dancerToAdd, ...dancers.value];

  console.log(updatedDancers);
  emit("update:dancers", updatedDancers);
  emit("save");

  // Clear the input
  newDancer.value.id = -1;
  newDancer.value.name = "";
  newDancer.value.image = "";
};

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
      emit("update:dancers", updatedDancers);
      emit("save");
    }
  }
  cancelEdit();
};

const cancelEdit = () => {
  editingDancer.value.id = -1;
  editingDancer.value.name = "";
  editingDancer.value.image = "";
};

const removeDancer = (id: number) => {
  const updatedDancers = [...dancers.value];
  const index = updatedDancers.findIndex(
    (d) => d.id === id
  );
  if (index !== -1) {
    updatedDancers.splice(index, 1);
    emit("update:dancers", updatedDancers);
    emit("save");
  }
};

const { isDragging } = useIsDragging();

const startDrag = (event: DragEvent, id: number) => {
  event.dataTransfer?.setData("dancerId", id.toString());
};
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
              v-model="bracket.hasTwoTop16"
            />&nbsp;
            <label for="top24">Top24</label>
          </div>
          <div>
            <input
              type="radio"
              id="top16"
              :value="false"
              v-model="bracket.hasTwoTop16"
            />&nbsp;
            <label for="top16">Top16</label>
          </div>
        </div>
      </div>

      <UiSection class="flex gap-4 py-1 !bg-white">
        <div class="flex flex-col gap-2 p-1">
          <h3 class="font-semibold">Search</h3>
          <input
            type="text"
            placeholder="Search"
            class="px-3 py-2 border border-blue-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            v-model="search"
          />

          <h3 class="font-semibold">Add Dancer</h3>
          <div class="flex flex-col gap-2">
            <input
              type="text"
              placeholder="Name"
              class="px-3 py-2 border border-blue-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              v-model="newDancer.name"
            />
            <input
              type="text"
              placeholder="Photo"
              class="px-3 py-2 border border-blue-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              v-model="newDancer.image"
            />
            <UiButton
              variant="primary"
              @click="addNewDancer"
              :disabled="editingDancer.id !== -1"
            >
              Add Dancer
            </UiButton>
          </div>
        </div>
        <div class="overflow-x-auto">
          <div class="min-w-max flex">
            <div
              v-for="dancer in dancers.filter(
                (d) => d.isInBattle
              )"
              :key="dancer.id"
            >
              <UiSection
                v-if="
                  !search ||
                  dancer.name
                    .toLowerCase()
                    .includes(search.toLocaleLowerCase())
                "
                class="flex flex-col gap-2 ml-2"
              >
                <!-- Display mode -->
                <div
                  v-if="editingDancer.id !== dancer.id"
                  class="flex flex-col items-center"
                >
                  <NuxtImg
                    v-if="dancer.image"
                    :src="`/dancers/${dancer.image}`"
                    @error="`/dancers/empty.jpeg`"
                    height="160"
                    width="100"
                    class="object-cover rounded-md"
                  />
                  <NuxtImg
                    v-else
                    :src="`/dancers/empty.jpeg`"
                    height="160"
                    width="100"
                    class="object-cover rounded-md"
                  />

                  <div class="text-center font-bold">
                    {{ dancer.name }}
                  </div>

                  <div class="flex justify-center gap-2">
                    <button
                      class="px-2 py-1 text-xs bg-yellow-500 text-white rounded hover:bg-yellow-600 disabled:bg-gray-300 disabled:cursor-not-allowed transition-colors duration-200"
                      @click="
                        editingDancer = {
                          id: dancer.id,
                          name: dancer.name,
                          image: dancer.image,
                        }
                      "
                    >
                      ✏
                    </button>
                    <button
                      class="bg-red-500 hover:bg-red-600 px-2 py-1 text-xs text-white rounded disabled:bg-gray-300 disabled:cursor-not-allowed transition-colors duration-200"
                      :disabled="editingDancer.id !== -1"
                      @click="removeDancer(dancer.id)"
                    >
                      ✕
                    </button>
                  </div>

                  <div class="flex mt-2 w-full">
                    <button
                      class="px-2 py-1 w-full text-xl bg-green-500 text-white rounded hover:bg-green-600 disabled:bg-gray-300 disabled:cursor-not-allowed transition-colors duration-200 cursor-grabbing"
                      :disabled="editingDancer.id !== -1"
                      :draggable="
                        editingDancer.id === -1
                          ? 'true'
                          : 'false'
                      "
                      @dragstart="
                        startDrag($event, dancer.id)
                      "
                    >
                      ⤧
                    </button>
                  </div>
                </div>

                <!-- Edit mode -->
                <div
                  class="flex flex-col gap-2"
                  v-else
                >
                  <input
                    type="text"
                    placeholder="Name"
                    class="px-3 py-2 border border-blue-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    v-model="editingDancer.name"
                  />
                  <input
                    type="text"
                    placeholder="Photo"
                    class="px-3 py-2 border border-blue-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    v-model="editingDancer.image"
                  />

                  <div class="flex items-center gap-2">
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
              </UiSection>
            </div>
          </div>
        </div>
      </UiSection>

      <UiSection class="!bg-white overflow-x-auto">
        <div
          class="grid grid-cols-5 grid-rows-8 gap-x-8 gap-y-3 min-w-max"
        >
          <div class="col-[1] row-[1]">
            <AdminBracketBattle
              v-model:battle="bracket.pre16Battle1"
              v-model:dancers="dancers"
            />
          </div>
          <div class="col-[1] row-[2]">
            <AdminBracketBattle
              v-model:battle="bracket.pre16Battle2"
              v-model:dancers="dancers"
            />
          </div>
          <div class="col-[1] row-[3]">
            <AdminBracketBattle
              v-model:battle="bracket.pre16Battle3"
              v-model:dancers="dancers"
            />
          </div>
          <div class="col-[1] row-[4]">
            <AdminBracketBattle
              v-model:battle="bracket.pre16Battle4"
              v-model:dancers="dancers"
            />
          </div>
          <div class="col-[1] row-[5]">
            <AdminBracketBattle
              v-model:battle="bracket.pre16Battle5"
              v-model:dancers="dancers"
            />
          </div>
          <div class="col-[1] row-[6]">
            <AdminBracketBattle
              v-model:battle="bracket.pre16Battle6"
              v-model:dancers="dancers"
            />
          </div>
          <div class="col-[1] row-[7]">
            <AdminBracketBattle
              v-model:battle="bracket.pre16Battle7"
              v-model:dancers="dancers"
            />
          </div>
          <div class="col-[1] row-[8]">
            <AdminBracketBattle
              v-model:battle="bracket.pre16Battle8"
              v-model:dancers="dancers"
            />
          </div>

          <div class="col-[2] row-[1]">
            <AdminBracketBattle
              v-model:battle="bracket.top16Battle1"
              v-model:dancers="dancers"
            />
          </div>
          <div class="col-[2] row-[2]">
            <AdminBracketBattle
              v-model:battle="bracket.top16Battle2"
              v-model:dancers="dancers"
            />
          </div>
          <div class="col-[2] row-[3]">
            <AdminBracketBattle
              v-model:battle="bracket.top16Battle3"
              v-model:dancers="dancers"
            />
          </div>
          <div class="col-[2] row-[4]">
            <AdminBracketBattle
              v-model:battle="bracket.top16Battle4"
              v-model:dancers="dancers"
            />
          </div>
          <div class="col-[2] row-[5]">
            <AdminBracketBattle
              v-model:battle="bracket.top16Battle5"
              v-model:dancers="dancers"
            />
          </div>
          <div class="col-[2] row-[6]">
            <AdminBracketBattle
              v-model:battle="bracket.top16Battle6"
              v-model:dancers="dancers"
            />
          </div>
          <div class="col-[2] row-[7]">
            <AdminBracketBattle
              v-model:battle="bracket.top16Battle7"
              v-model:dancers="dancers"
            />
          </div>
          <div class="col-[2] row-[8]">
            <AdminBracketBattle
              v-model:battle="bracket.top16Battle8"
              v-model:dancers="dancers"
            />
          </div>

          <div class="col-[3] row-[1]">
            <AdminBracketBattle
              v-model:battle="bracket.top8Battle1"
              v-model:dancers="dancers"
            />
          </div>
          <div class="col-[3] row-[3]">
            <AdminBracketBattle
              v-model:battle="bracket.top8Battle2"
              v-model:dancers="dancers"
            />
          </div>
          <div class="col-[3] row-[5]">
            <AdminBracketBattle
              v-model:battle="bracket.top8Battle3"
              v-model:dancers="dancers"
            />
          </div>
          <div class="col-[3] row-[7]">
            <AdminBracketBattle
              v-model:battle="bracket.top8Battle4"
              v-model:dancers="dancers"
            />
          </div>

          <div class="col-[4] row-[2]">
            <AdminBracketBattle
              v-model:battle="bracket.semiFinal1"
              v-model:dancers="dancers"
            />
          </div>
          <div class="col-[4] row-[6]">
            <AdminBracketBattle
              v-model:battle="bracket.semiFinal2"
              v-model:dancers="dancers"
            />
          </div>

          <div class="col-[5] row-[4]">
            <AdminBracketBattle
              v-model:battle="bracket.final"
              v-model:dancers="dancers"
            />
          </div>
        </div>
      </UiSection>
    </div>

    <div class="flex justify-end gap-2">
      <UiButton
        class="mt-4 px-2 py-1 text-xs transition-colors duration-200"
        @click="$emit('save')"
        variant="success"
      >
        Save
      </UiButton>
    </div>
  </UiSection>
</template>
