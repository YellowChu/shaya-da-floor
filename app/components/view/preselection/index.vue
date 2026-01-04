<script lang="ts" setup>
const props = defineProps<{
  state: IState;
}>();

const preselectionDancers = computed(() =>
  props.state.preselectionDancers.filter(
    (dancer) => !dancer.archived
  )
);
</script>

<template>
  <div class="pt-32 flex flex-col items-center">
    <h2
      class="text-8xl tracking-wide font-bold text-red-700"
    >
      PRESELECTION
    </h2>

    <div
      v-if="preselectionDancers.length"
      class="flex gap-16 mt-12"
    >
      <div
        v-if="preselectionDancers[0]"
        class="px-8 py-6 bg-red-700 text-white w-[400px] flex gap-8 items-center justify-between text-right text-5xl font-bold tracking-wider"
      >
        <div>
          {{ preselectionDancers[0].id }}
        </div>
        <div>
          {{ preselectionDancers[0].name }}
        </div>
      </div>
      <div
        v-if="preselectionDancers[1]"
        class="px-8 py-6 bg-blue-600 text-white w-[400px] flex gap-8 items-center justify-between text-right text-5xl font-bold tracking-wider"
      >
        <div>
          {{ preselectionDancers[1].name }}
        </div>
        <div>
          {{ preselectionDancers[1].id }}
        </div>
      </div>
    </div>

    <div class="mt-12 flex flex-col items-center gap-4">
      <div class="flex gap-16">
        <ul>
          <li
            v-for="dancer in preselectionDancers
              .slice(2, 12)
              .filter((_, index) => index % 2 === 0)"
            :key="dancer.id"
          >
            <div
              class="px-6 py-4 mt-2 bg-red-700 opacity-80 text-white w-[300px] flex items-center justify-between text-right text-3xl font-bold tracking-wider"
            >
              <div>
                {{ dancer.id }}
              </div>
              <div>
                {{ dancer.name }}
              </div>
            </div>
          </li>
        </ul>
        <ul>
          <li
            v-for="dancer in preselectionDancers
              .slice(2, 12)
              .filter((_, index) => index % 2 !== 0)"
            :key="dancer.id"
          >
            <div
              class="px-6 py-4 mt-2 bg-blue-600 opacity-80 text-white w-[300px] flex items-center justify-between text-left text-3xl font-bold tracking-wider"
            >
              <div>
                {{ dancer.name }}
              </div>
              <div>
                {{ dancer.id }}
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
