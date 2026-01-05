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
  <ViewPreselection
    v-if="
      stateRef.currentView === CurrentViewEnum.Preselection
    "
    :state="stateRef"
  />
  <ViewBracket
    v-else-if="
      stateRef.currentView === CurrentViewEnum.Bracket
    "
    :state="stateRef"
  />
  <ViewBattle
    v-else-if="
      stateRef.currentView === CurrentViewEnum.Battle
    "
    :state="stateRef"
  />
</template>
