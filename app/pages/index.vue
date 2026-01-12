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

const prevPoster = ref<string | null>(null);
const isTransitioning = ref(false);

watch(
  () => stateRef.value.currentPoster,
  (newPoster, oldPoster) => {
    if (!oldPoster) return;

    prevPoster.value = oldPoster;
    isTransitioning.value = true;

    setTimeout(() => {
      isTransitioning.value = false;
      prevPoster.value = null;
    }, 500);
  }
);
</script>

<template>
  <div
    v-if="stateRef.currentView !== CurrentViewEnum.Poster"
    class="w-[100vw] h-[100vh] bg-[url('/images/background.png')] bg-cover bg-center"
  >
    <div class="flex flex-col h-full">
      <div
        class="flex justify-center w-full text-shaya-secondary-dark text-[8rem] font-extrabold"
      >
        SHAYA DA FLOOR
      </div>

      <main
        class="w-full h-full flex flex-col justify-center"
      >
        <View :state="stateRef" />
      </main>

      <div class="flex justify-center w-full">
        <NuxtImg
          src="/images/footer-logo.png"
          width="150"
        />
      </div>
    </div>
  </div>

  <div
    v-else
    class="relative w-[100vw] h-[100vh] overflow-hidden"
  >
    <NuxtImg
      v-for="p in stateRef.posters"
      :key="p"
      :src="`/posters/${p}`"
      alt=""
      class="w-[100vw] h-[100vh] bg-cover bg-center absolute top-0 left-0"
      :class="
        p === stateRef.currentPoster
          ? 'opacity-100'
          : 'opacity-0'
      "
    />
  </div>
</template>

<style>
body {
  font-family: "Neutronic Compressed", sans-serif;
}
</style>
