export const useIsDragging = (): { isDragging: Ref<boolean> } => {
  const isDragging = ref(false);

  function onWindowDragEnter(e: DragEvent) {
    isDragging.value = true;
  }

  function onWindowDragLeave(e: DragEvent) {
    if (e.clientX === 0 && e.clientY === 0) {
      isDragging.value = false;
    }
  }

  function onWindowDrop() {
    isDragging.value = false;
  }

  onMounted(() => {
    window.addEventListener("dragenter", onWindowDragEnter);
    window.addEventListener("dragleave", onWindowDragLeave);
    window.addEventListener("drop", onWindowDrop);
  });

  onBeforeUnmount(() => {
    window.removeEventListener(
      "dragenter",
      onWindowDragEnter
    );
    window.removeEventListener(
      "dragleave",
      onWindowDragLeave
    );
    window.removeEventListener("drop", onWindowDrop);
  });
  return { isDragging };
}