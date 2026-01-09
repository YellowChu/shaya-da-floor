<script lang="ts" setup>
const props = defineProps<{
  state: IState;
}>();

console.log(props.state.currentPoster);
</script>

<template>
  <!-- <Teleport to="#cover">
    <div
      class="w-[100vw] h-[100vh] bg-[url('/posters/shaya.PNG')] bg-cover bg-center z-2"
    />
  </Teleport> -->
</template>
