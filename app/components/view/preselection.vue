<script lang="ts" setup>
const props = defineProps<{
  state: IState;
}>();
</script>

<template>
  <div class="pt-32 flex flex-col items-center">
    <h2
      class="text-5xl font-bold tracking-tight text-red-700"
    >
      PRESELECTION
    </h2>

    <div
      v-if="props.state.preselectionDancers.length"
      class="flex gap-16 mt-12"
    >
      <div
        v-if="props.state.preselectionDancers[0]"
        class="px-8 py-6 bg-pink-600 text-white w-[400px] flex gap-8 items-center justify-between text-right text-4xl font-bold"
      >
        <div>
          {{ props.state.preselectionDancers[0].id }}
        </div>
        <div>
          {{ props.state.preselectionDancers[0].name }}
        </div>
      </div>
      <div
        v-if="props.state.preselectionDancers[1]"
        class="px-8 py-6 bg-blue-600 text-white w-[400px] flex gap-8 items-center justify-between text-right text-4xl font-bold"
      >
        <div>
          {{ props.state.preselectionDancers[1].name }}
        </div>
        <div>
          {{ props.state.preselectionDancers[1].id }}
        </div>
      </div>
    </div>

    <div class="mt-12 flex flex-col items-center gap-4">
      <div class="flex gap-16">
        <ul>
          <li
            v-for="dancer in props.state.preselectionDancers
              .slice(2, 12)
              .filter((_, index) => index % 2 !== 0)"
            :key="dancer.id"
          >
            <div
              v-if="props.state.preselectionDancers[1]"
              class="px-6 py-4 mt-2 bg-pink-500 text-white w-[300px] flex items-center justify-between text-right text-xl font-bold"
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
            v-for="dancer in props.state.preselectionDancers
              .slice(2, 12)
              .filter((_, index) => index % 2 === 0)"
            :key="dancer.id"
          >
            <div
              v-if="props.state.preselectionDancers[1]"
              class="px-6 py-4 mt-2 bg-blue-500 text-white w-[300px] flex items-center justify-between text-right text-xl font-bold"
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
