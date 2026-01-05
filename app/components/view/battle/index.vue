<script setup lang="ts"></script>

<template>
  <div class="flex flex-col items-center font-neutronic">
    <div class="flex justify-center gap-12">
      <div class="flex flex-col items-center gap-4">
        <div class="relative">
          <ViewBattleDancerBorder />
          <div class="p-3">
            <NuxtImg
              src="/dancerA.jpg"
              class="object-cover rounded-lg"
              width="400"
            />
          </div>
        </div>
        <h3
          class="text-5xl text-shaya-primary-light font-bold text-center max-w-[300px]"
        >
          Thrifty
        </h3>
      </div>

      <div class="flex flex-col items-center pt-[200px]">
        <h3
          class="text-4xl font-bold tracking-tighter text-shaya-primary-dark"
        >
          TOP16
        </h3>
        <h3
          class="text-8xl font-bold tracking-tighter text-shaya-primary-dark"
        >
          VS
        </h3>
      </div>

      <div class="flex flex-col items-center gap-4">
        <div class="relative">
          <ViewBattleDancerBorder />
          <div class="p-3">
            <NuxtImg
              src="/dancerB.jpg"
              class="object-cover rounded-lg"
              width="400"
            />
          </div>
        </div>
        <h3
          class="text-5xl text-shaya-secondary-dark font-bold text-center max-w-[300px]"
        >
          Arasid
        </h3>
      </div>
    </div>
  </div>
</template>
