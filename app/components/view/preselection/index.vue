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
      class="text-8xl tracking-wide font-bold text-shaya-primary-dark"
    >
      PRESELECTION
    </h2>

    <div
      v-if="preselectionDancers.length"
      class="flex gap-16 mt-12"
    >
      <UiCard
        v-if="preselectionDancers[0]"
        class="px-8 py-6 w-[400px] gap-8 flex items-center justify-between text-shaya-primary-light text-right text-5xl font-extrabold tracking-widest"
        border-weight="medium"
      >
        <div>
          {{ preselectionDancers[0].id }}
        </div>
        <div>
          {{ preselectionDancers[0].name }}
        </div>
      </UiCard>
      <UiCard
        v-if="preselectionDancers[1]"
        class="px-8 py-6 w-[400px] gap-8 flex items-center justify-between text-shaya-secondary-dark text-left text-5xl font-extrabold tracking-widest"
        border-weight="medium"
        type="secondary"
      >
        <div>
          {{ preselectionDancers[1].name }}
        </div>
        <div>
          {{ preselectionDancers[1].id }}
        </div>
      </UiCard>
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
            <UiCard
              class="px-6 py-4 mt-2 opacity-80 w-[300px] flex items-center justify-between text-shaya-primary-light text-right text-3xl font-extrabold tracking-widest"
            >
              <div>
                {{ dancer.id }}
              </div>
              <div>
                {{ dancer.name }}
              </div>
            </UiCard>
          </li>
        </ul>
        <ul>
          <li
            v-for="dancer in preselectionDancers
              .slice(2, 12)
              .filter((_, index) => index % 2 !== 0)"
            :key="dancer.id"
          >
            <UiCard
              class="px-6 py-4 mt-2 opacity-80 w-[300px] flex items-center justify-between text-shaya-secondary-dark text-left text-3xl font-extrabold tracking-widest"
              type="secondary"
            >
              <div>
                {{ dancer.name }}
              </div>
              <div>
                {{ dancer.id }}
              </div>
            </UiCard>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
