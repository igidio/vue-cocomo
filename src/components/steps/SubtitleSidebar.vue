<template>
  <div class="flex flex-row gap-2 items-center">
    <div class="flex flex-col bg-black rounded-full p-2">
      <component :is="icon" class="w-3 h-3" color="white" />
    </div>
    <span class="font-bold">{{ label }}</span>
  </div>
</template>
<script setup lang="ts">
defineProps<{
  icon: string|object|(() => void),
  label: string,
}>()
</script>
