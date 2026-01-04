<template>
  <div class="absolute">
    <div
      class="grid grid-cols-3 grid-rows-2 w-[100vw] h-[100vh]"
    >
      <div class="justify-self-start self-start">
        <NuxtImg
          src="/corner-top-left.png"
          width="300"
        />
      </div>
      <div class="justify-self-center self-start pt-12">
        <div class="flex">
          <h1
            class="text-6xl font-extrabold text-red-700 tracking-tighter"
          >
            SHAYA DA FLOOR
          </h1>
        </div>
      </div>
      <div class="justify-self-end self-start">
        <NuxtImg
          src="/corner-top-right.png"
          width="300"
        />
      </div>

      <div class="justify-self-start self-end">
        <NuxtImg
          src="/corner-bottom-left.png"
          width="300"
        />
      </div>
      <div class="justify-self-center self-end">
        <NuxtImg
          src="/footer-logo.png"
          width="75"
        />
      </div>
      <div class="justify-self-end self-end">
        <NuxtImg
          src="/corner-bottom-right.png"
          width="300"
        />
      </div>
    </div>
  </div>
</template>
