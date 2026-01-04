<script lang="ts" setup>
const { state } = useLocalStorageState();
const stateRef = ref<IState>(state);

onMounted(() => {
  window.addEventListener("storage", (event) => {
    if (event.key === "appState" && event.newValue) {
      stateRef.value = JSON.parse(event.newValue) as IState;
    }
  });
});

onUnmounted(() => {
  window.removeEventListener("storage", () => {});
});
</script>

<template>
  <div>
    <ViewPreselection
      v-if="
        stateRef.currentView ===
        CurrentViewEnum.Preselection
      "
      :state="stateRef"
    />
    <ViewBracket
      v-else-if="
        stateRef.currentView === CurrentViewEnum.Bracket
      "
    />
    <ViewBattle
      v-else-if="
        stateRef.currentView === CurrentViewEnum.Battle
      "
    />
  </div>
</template>
