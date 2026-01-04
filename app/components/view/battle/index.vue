<script setup lang="ts"></script>

<template>
  <div class="pt-32 flex flex-col items-center">
    <!-- <h2
      class="text-5xl font-bold tracking-tight text-red-700"
    >
      TOP 16
    </h2> -->

    <div class="flex justify-center gap-32 mt-6">
      <div class="flex flex-col items-center gap-4">
        <div class="relative">
          <ViewBattleDancerBorder />
          <div class="p-3">
            <NuxtImg
              src="/dancerA.png"
              class="object-cover rounded-lg"
              width="400"
            />
          </div>
        </div>
        <h3
          class="text-5xl text-red-700 font-bold text-center max-w-[300px]"
        >
          Thrifty
        </h3>
      </div>

      <div class="flex flex-col items-center pt-[200px]">
        <h3
          class="text-4xl font-bold tracking-tighter text-red-700"
        >
          TOP16
        </h3>
        <h3
          class="text-8xl font-bold tracking-tighter text-red-700"
        >
          VS
        </h3>
      </div>

      <div class="flex flex-col items-center gap-4">
        <div class="relative">
          <ViewBattleDancerBorder />
          <div class="p-3">
            <NuxtImg
              src="/dancerB.png"
              class="object-cover rounded-lg"
              width="400"
            />
          </div>
        </div>
        <h3
          class="text-5xl text-red-700 font-bold text-center max-w-[300px]"
        >
          Arasid
        </h3>
      </div>
    </div>
  </div>
</template>
