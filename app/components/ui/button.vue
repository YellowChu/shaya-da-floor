<script lang="ts" setup>
defineOptions({ inheritAttrs: false });

const props = withDefaults(
  defineProps<{
    type?: "button" | "submit" | "reset";
    variant?: "primary" | "success" | "danger";
  }>(),
  { type: "button", variant: "primary" }
);

const attrs = useAttrs(); // contains disabled, aria-*, onClick, etc.

const typeClasses = computed(() => {
  switch (props.variant) {
    case "primary":
      return "bg-blue-500 hover:bg-blue-600 text-white";
    case "success":
      return "bg-green-500 hover:bg-green-600 text-white";
    case "danger":
      return "bg-red-500 hover:bg-red-600 text-white";
    default:
      return "bg-blue-500 hover:bg-blue-600 text-white";
  }
});
</script>

<template>
  <button
    class="px-4 py-2 rounded disabled:bg-gray-300 disabled:cursor-not-allowed transition-colors duration-200"
    :class="typeClasses"
    v-bind="attrs"
  >
    <slot />
  </button>
</template>
