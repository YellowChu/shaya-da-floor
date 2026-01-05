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

const updateStateFromAdmin = () => {
  updateState({
    currentView: currentView.value,
    preselectionDancers: preselectionDancers.value,
    bracket: bracket.value,
    battle: battle.value,
    battleDancers: battleDancers.value,
  });
};
</script>

<template>
  <div class="flex flex-col gap-8 p-10">
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
