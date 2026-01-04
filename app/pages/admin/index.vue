<script lang="ts" setup>
const { state, updateState } = useState();

const currentView = ref<CurrentViewEnum>(state.currentView);

const preselectionDancers = ref<PreselectionDancer[]>(
  state.preselectionDancers
);

const bracket = ref<Bracket>(state.bracket);

const updateStateFromAdmin = () => {
  updateState({
    currentView: currentView.value,
    preselectionDancers: preselectionDancers.value,
    bracket: bracket.value,
  });
};
</script>

<template>
  <div class="w-[100vw]">
    <div class="flex flex-col gap-8 p-10">
      <AdminView
        v-model="currentView"
        @save="updateStateFromAdmin"
      />

      <AdminPreselection
        v-model="preselectionDancers"
        @save="updateStateFromAdmin"
      />

      <div>
        <h2 class="text-lg font-bold">Bracket</h2>

        <div class="flex flex-col gap-4 my-4">Bracket</div>
      </div>
    </div>
  </div>
</template>
