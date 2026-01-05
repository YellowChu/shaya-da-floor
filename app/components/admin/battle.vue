<script lang="ts" setup>
const battleDancers = defineModel<BattleDancer[]>(
  "battleDancers",
  {
    required: true,
  }
);

const battle = defineModel<Battle>("battle", {
  required: true,
});

const emit = defineEmits<{
  (e: "update:battleDancers", value: BattleDancer[]): void;
  (e: "update:battle", value: Battle): void;
  (e: "save"): void;
}>();

const search = ref("");

const newDancer = ref<BattleDancer>({
  name: "",
  image: "",
});

const addNewDancer = () => {
  if (newDancer.value.name.trim() === "") {
    return;
  }

  const updatedDancers = [
    { ...newDancer.value },
    ...battleDancers.value,
  ];
  emit("update:battleDancers", updatedDancers);
  emit("save");

  newDancer.value.name = "";
  newDancer.value.image = "";
};

const editingDancer = ref({
  idx: -1,
  name: "",
  image: "",
});

const saveEdit = () => {
  if (
    editingDancer.value.idx !== -1 &&
    editingDancer.value.name.trim()
  ) {
    const dancers = [...battleDancers.value];
    const index = editingDancer.value.idx;
    if (index !== -1 && dancers[index]) {
      dancers[index] = {
        ...dancers[index],
        name: editingDancer.value.name.trim(),
        image: editingDancer.value.image.trim(),
      };
      emit("update:battleDancers", dancers);
      emit("save");
    }
  }
  cancelEdit();
};

const cancelEdit = () => {
  editingDancer.value.idx = -1;
  editingDancer.value.name = "";
  editingDancer.value.image = "";
};

const removeDancer = (idx: number) => {
  const dancers = [...battleDancers.value];
  if (dancers[idx]) {
    dancers.splice(idx, 1);
    emit("update:battleDancers", dancers);
    emit("save");
  }
};
</script>

<template>
  <UiSection>
    <h2 class="text-lg font-bold">Battle</h2>

    <UiSection class="mt-2 !bg-white">
      <div class="flex gap-4 py-1">
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
              :disabled="editingDancer.idx !== -1"
            >
              Add Dancer
            </UiButton>
          </div>
        </div>

        <div class="overflow-x-auto">
          <div class="min-w-max flex">
            <div
              v-for="(dancer, idx) in battleDancers"
              :key="dancer.name + dancer.image + idx"
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
                  v-if="editingDancer.idx !== idx"
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
                          idx,
                          name: dancer.name,
                          image: dancer.image,
                        }
                      "
                    >
                      ✏
                    </button>
                    <button
                      class="bg-red-500 hover:bg-red-600 px-2 py-1 text-xs text-white rounded disabled:bg-gray-300 disabled:cursor-not-allowed transition-colors duration-200"
                      :disabled="editingDancer.idx !== -1"
                      @click="removeDancer(idx)"
                    >
                      ✕
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
      </div>
    </UiSection>
  </UiSection>
</template>
