<template>
  <div class="absolute w-full h-full z-1">
    <div class="grid grid-cols-2 grid-rows-2 w-full h-full">
      <div class="justify-self-start self-start">
        <NuxtImg
          src="/corner-top-left.png"
          class="rounded"
          width="100"
        />
      </div>
      <div class="justify-self-end self-start">
        <NuxtImg
          src="/corner-top-right.png"
          class="rounded"
          width="100"
        />
      </div>

      <div class="justify-self-start self-end">
        <NuxtImg
          src="/corner-bottom-left.png"
          class="rounded"
          width="100"
        />
      </div>
      <div class="justify-self-end self-end">
        <NuxtImg
          src="/corner-bottom-right.png"
          class="rounded"
          width="100"
        />
      </div>
    </div>
  </div>
</template>
