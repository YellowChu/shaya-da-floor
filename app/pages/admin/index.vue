<script lang="ts" setup>
const { state, updateState } = useState();

const currentView = ref<CurrentViewEnum>(state.currentView);

const preselectionDancers = ref<PreselectionDancer[]>(
  state.preselectionDancers
);

const updateStateFromAdmin = () => {
  updateState({
    currentView: currentView.value,
    preselectionDancers: preselectionDancers.value,
  });
};

watch(currentView, () => {
  updateStateFromAdmin();
});
</script>

<template>
  <div class="w-[100vw]">
    <div class="flex flex-col gap-8 p-10">
      <AdminView v-model="currentView" />

      <AdminPreselection
        v-model="preselectionDancers"
        @save="updateStateFromAdmin"
      />
    </div>
  </div>
</template>
