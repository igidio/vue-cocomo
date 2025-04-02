<template>
  <header class="p-4 border-b border-b-gray-400 flex flex-row justify-between w-full">
    <router-link to="/">
      <div class="font-bold hover:bg-gray-200 p-1 text-xl rounded-md">VUE COCOMO</div>
    </router-link>
    <div class="content-center">
      <LocalIcon />
    </div>
  </header>
</template>
<script setup lang="ts">
import LocalIcon from '@/components/icon/LocalIcon.vue'
</script>
