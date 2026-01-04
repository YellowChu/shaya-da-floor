<template>
  <div class="w-[150px] h-[75px] card">
    <slot />
  </div>
</template>

<style scoped>
.card {
  border: 4px solid #143fff;
  background: radial-gradient(
    circle 260px at 35% 40%,
    #f6f7fe 0%,
    #f6f7fecc 30%,
    #f6f7fe66 55%,
    #eef0fb 78%,
    #e6e9f7 100%
  );
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
}
</style>
