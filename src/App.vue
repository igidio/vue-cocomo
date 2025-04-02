<script setup lang="ts">
import { RouterView } from 'vue-router'
import GlobalHeader from '@/components/GlobalHeader.vue'
</script>

<template>
  <GlobalHeader />



  <div class="m-6 flex flex-col gap-4">
    <RouterView />
  </div>
</template>
