<template>
  <div class="flex flex-row gap-2 items-center">
    <component :is="icon" class="w-4 h-4" color="black" />
    <p class="text-left text-xs">{{ label }}</p>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  icon: string | object | (() => void)
  label: string
}>()
</script>
