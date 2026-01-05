<script lang="ts" setup>
const { state, updateState } = useLocalStorageState();

const currentView = ref<CurrentViewEnum>(state.currentView);
const dancers = ref<Dancer[]>(state.dancers);
const bracket = ref<Bracket>(state.bracket);
const battle = ref<Battle>(state.battle);

const updateStateFromAdmin = () => {
  updateState({
    currentView: currentView.value,
    dancers: dancers.value,
    bracket: bracket.value,
    battle: battle.value,
  });
};
</script>

<template>
  <div class="flex flex-col gap-8 p-10 mb-32">
    <AdminView
      v-model="currentView"
      @save="updateStateFromAdmin"
    />

    <AdminPreselection
      v-model="dancers"
      @save="updateStateFromAdmin"
    />

    <AdminBracket
      v-model:bracket="bracket"
      v-model:dancers="dancers"
      @save="updateStateFromAdmin"
    />

    <!-- <AdminBattle
      v-model:battle-dancers="battleDancers"
      v-model:battle="battle"
      @save="updateStateFromAdmin"
    /> -->
  </div>
</template>
