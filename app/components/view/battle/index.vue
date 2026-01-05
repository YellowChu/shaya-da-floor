<script setup lang="ts">
const props = defineProps<{
  state: IState;
}>();

const battle = computed(() => props.state.battle);

const allDancersHavePhoto = computed(() => {
  if (battle.value.useXY) {
    return (
      battle.value.dancerX.image &&
      battle.value.dancerY.image
    );
  } else {
    return (
      battle.value.dancerA.image &&
      battle.value.dancerB.image
    );
  }
});
</script>

<template>
  <div class="flex flex-col items-center font-neutronic">
    <div class="flex justify-center items-center gap-12">
      <div
        v-if="allDancersHavePhoto"
        class="flex flex-col items-center gap-4"
      >
        <div class="relative">
          <ViewBattleDancerBorder />
          <div class="p-6">
            <NuxtImg
              :src="
                battle.useXY
                  ? `/dancers/${battle.dancerX.image}`
                  : `/dancers/${battle.dancerA.image}`
              "
              class="object-cover rounded-lg"
              width="400"
            />
          </div>
        </div>
        <h3
          class="text-5xl text-shaya-primary-light font-bold text-center max-w-[300px]"
        >
          {{
            battle.useXY
              ? battle.dancerX.name
              : battle.dancerA.name
          }}
        </h3>
      </div>
      <UiCard
        v-else
        class="h-fit px-8 py-6 w-[700px]"
      >
        <h3
          class="text-6xl text-shaya-primary-light font-bold text-center"
        >
          {{
            battle.useXY
              ? battle.dancerX.name
              : battle.dancerA.name
          }}
        </h3>
      </UiCard>

      <div class="flex flex-col items-center">
        <h3
          class="text-4xl font-bold tracking-tighter text-shaya-primary-dark"
        >
          {{ battle.title.toUpperCase() }}
        </h3>
        <h3
          class="text-8xl font-bold tracking-tighter text-shaya-primary-dark"
        >
          VS
        </h3>
      </div>

      <div
        v-if="allDancersHavePhoto"
        class="flex flex-col items-center gap-4"
      >
        <div class="relative">
          <ViewBattleDancerBorder />
          <div class="p-6">
            <NuxtImg
              :src="
                battle.useXY
                  ? `/dancers/${battle.dancerY.image}`
                  : `/dancers/${battle.dancerB.image}`
              "
              class="object-cover rounded-lg"
              width="400"
            />
          </div>
        </div>
        <h3
          class="text-5xl text-shaya-secondary-dark font-bold text-center max-w-[300px]"
        >
          {{
            battle.useXY
              ? battle.dancerY.name
              : battle.dancerB.name
          }}
        </h3>
      </div>
      <UiCard
        v-else
        class="h-fit px-8 py-6 w-[700px]"
        type="secondary"
      >
        <h3
          class="text-6xl text-shaya-secondary-dark font-bold text-center"
        >
          {{
            battle.useXY
              ? battle.dancerY.name
              : battle.dancerB.name
          }}
        </h3>
      </UiCard>
    </div>
  </div>
</template>
