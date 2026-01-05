<template>
  <div
    class="w-[100vw] h-[100vh] bg-[url('/background.png')] bg-cover bg-center"
  >
    <div class="flex flex-col justify-between h-full">
      <div
        class="flex justify-center w-full text-shaya-secondary-dark text-[8rem] font-extrabold"
      >
        SHAYA DA FLOOR
      </div>

      <main
        class="w-full h-full flex flex-col justify-center"
      >
        <View />
      </main>

      <div class="flex justify-center w-full">
        <NuxtImg
          src="/footer-logo.png"
          width="150"
        />
      </div>
    </div>
  </div>
</template>

<style>
body {
  font-family: "Neutronic Compressed", sans-serif;
}
</style>
