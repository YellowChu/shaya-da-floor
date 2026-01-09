<script lang="ts" setup>
const props = defineProps<{
  state: IState;
}>();
</script>

<template>
  <ViewPoster
    v-if="
      props.state.currentView === CurrentViewEnum.Poster
    "
    :state="props.state"
  />
  <ViewPreselection
    v-else-if="
      props.state.currentView ===
      CurrentViewEnum.Preselection
    "
    :state="props.state"
  />
  <ViewBracket
    v-else-if="
      props.state.currentView === CurrentViewEnum.Bracket
    "
    :state="props.state"
  />
  <ViewBattle
    v-else-if="
      props.state.currentView === CurrentViewEnum.Battle
    "
    :state="props.state"
  />
</template>
