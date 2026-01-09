<script lang="ts" setup>
const { state, updateState } = useLocalStorageState();

const currentView = ref<CurrentViewEnum>(state.currentView);
const preselectionDancers = ref<PreselectionDancer[]>(
  state.preselectionDancers
);
const bracket = ref<Bracket>(state.bracket);
const battleDancers = ref<BattleDancer[]>(
  state.battleDancers
);
const battle = ref<Battle>(state.battle);
const posters = ref<string[]>(state.posters);
const currentPoster = ref<string>(state.currentPoster);

const updateStateFromAdmin = () => {
  updateState({
    currentView: currentView.value,
    preselectionDancers: preselectionDancers.value,
    bracket: bracket.value,
    battle: battle.value,
    battleDancers: battleDancers.value,
    posters: posters.value,
    currentPoster: currentPoster.value,
  });
};
</script>

<template>
  <div class="flex flex-col gap-8 p-10 mb-32">
    <AdminPoster
      :posters="posters"
      v-model="currentPoster"
      @save="updateStateFromAdmin"
    />

    <AdminView
      v-model="currentView"
      @save="updateStateFromAdmin"
    />

    <AdminPreselection
      v-model="preselectionDancers"
      @save="updateStateFromAdmin"
    />

    <AdminBracket
      v-model="bracket"
      @save="updateStateFromAdmin"
    />

    <AdminBattle
      v-model:battle-dancers="battleDancers"
      v-model:battle="battle"
      @save="updateStateFromAdmin"
    />
  </div>
</template>
