<script lang="ts" setup>
const props = withDefaults(
  defineProps<{
    borderWeight?:
      | "regular"
      | "medium"
      | "bold"
      | "extrabold";
    type?: "primary" | "secondary";
  }>(),
  {
    borderWeight: "regular",
    type: "primary",
  }
);

const borderWeightClass = {
  regular: "border-[2.8px]",
  medium: "border-[3.8px]",
  bold: "border-[4.8px]",
  extrabold: "border-[5.8px]",
};

const borderColorClass = {
  primary: "border-[#143fff]",
  secondary: "border-shaya-secondary-dark",
};
</script>

<template>
  <div
    class="card"
    :class="[
      borderColorClass[props.type],
      borderWeightClass[props.borderWeight],
    ]"
  >
    <slot />
  </div>
</template>

<style scoped>
.card {
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
