<template>
  <div class="absolute w-full h-full z-1">
    <div class="grid grid-cols-2 grid-rows-2 w-full h-full">
      <div class="justify-self-start self-start">
        <NuxtImg
          src="/images/ornament.png"
          class="transform scale-x-[-1]"
          width="200"
        />
      </div>
      <div class="justify-self-end self-start">
        <NuxtImg
          src="/images/ornament.png"
          width="200"
        />
      </div>

      <div class="justify-self-start self-end">
        <NuxtImg
          src="/images/ornament.png"
          class="transform scale-x-[-1] scale-y-[-1]"
          width="200"
        />
      </div>
      <div class="justify-self-end self-end">
        <NuxtImg
          src="/images/ornament.png"
          class="transform scale-y-[-1]"
          width="200"
        />
      </div>
    </div>
  </div>
</template>
