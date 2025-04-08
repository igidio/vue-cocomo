<script setup lang="ts">
import { RouterView } from 'vue-router'
import GlobalHeader from '@/components/GlobalHeader.vue'
import GlobalFooter from '@/components/GlobalFooter.vue'
import { Toaster } from '@/components/ui/sonner'

</script>

<template>
  <Toaster />

  <div class="flex flex-col justify-between h-screen">
    <div>
      <GlobalHeader />
      <div class="m-6 flex flex-col gap-4">
        <RouterView />
      </div>
    </div>
    <GlobalFooter />
  </div>
</template>
