<script setup lang="ts">
const props = defineProps<{
  state: IState;
}>();
</script>

<template>
  <div
    class="flex items-center justify-center w-full h-full"
  >
    <div class="flex gap-4 pb-20">
      <!-- Top16A -->
      <div
        v-if="state.bracket.hasTwoTop16"
        class="flex flex-col items-center gap-6"
      >
        <ViewBracketCard
          v-for="(
            battle, index
          ) in state.bracket.top16A.slice(0, 4)"
          :key="index"
          :battle="battle"
          border-weight="regular"
        />
      </div>
      <!-- Top16B -->
      <div class="flex flex-col">
        <div class="flex flex-col items-center gap-6">
          <ViewBracketCard
            v-for="(
              battle, index
            ) in state.bracket.top16B.slice(0, 4)"
            :key="index"
            :battle="battle"
            border-weight="regular"
          />
        </div>
      </div>
      <!-- Top8 -->
      <div class="flex flex-col justify-between flex-grow">
        <div class="flex-1 flex flex-col justify-center">
          <ViewBracketCard
            :battle="state.bracket.top8[0]"
            border-weight="medium"
          />
        </div>
        <div class="flex-1 flex flex-col justify-center">
          <ViewBracketCard
            :battle="state.bracket.top8[1]"
            border-weight="medium"
          />
        </div>
      </div>
      <!-- Top4 -->
      <div class="flex flex-col justify-center flex-grow">
        <ViewBracketCard
          :battle="state.bracket.top4[0]"
          border-weight="bold"
        />
      </div>
    </div>

    <div class="flex mx-4">
      <!-- Final -->
      <div class="flex flex-col justify-center flex-grow">
        <div>
          <ViewBracketCard
            :battle="state.bracket.final"
            border-weight="extrabold"
          />
        </div>
      </div>
    </div>

    <div class="flex gap-4 pt-20">
      <!-- Top4 -->
      <div class="flex flex-col justify-center flex-grow">
        <ViewBracketCard
          :battle="state.bracket.top4[1]"
          border-weight="bold"
        />
      </div>
      <!-- Top8 -->
      <div class="flex flex-col justify-between flex-grow">
        <div class="flex-1 flex flex-col justify-center">
          <ViewBracketCard
            :battle="state.bracket.top8[2]"
            border-weight="medium"
          />
        </div>
        <div class="flex-1 flex flex-col justify-center">
          <ViewBracketCard
            :battle="state.bracket.top8[3]"
            border-weight="medium"
          />
        </div>
      </div>
      <!-- Top16B -->
      <div class="flex flex-col">
        <div class="flex flex-col items-center gap-6">
          <ViewBracketCard
            v-for="(
              battle, index
            ) in state.bracket.top16B.slice(4, 8)"
            :key="index"
            :battle="battle"
            border-weight="regular"
          />
        </div>
      </div>
      <!-- Top16A -->
      <div
        v-if="state.bracket.hasTwoTop16"
        class="flex flex-col"
      >
        <div class="flex flex-col items-center gap-6">
          <ViewBracketCard
            v-for="(
              battle, index
            ) in state.bracket.top16A.slice(4, 8)"
            :key="index"
            :battle="battle"
            border-weight="regular"
          />
        </div>
      </div>
    </div>
  </div>
</template>
