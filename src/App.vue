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

<script setup lang="ts">
import { RouterView } from 'vue-router'
import GlobalHeader from '@/components/GlobalHeader.vue'
import GlobalFooter from '@/components/GlobalFooter.vue'
import { Toaster } from '@/components/ui/sonner'
import { useI18n } from 'vue-i18n'
import { onMounted } from 'vue'

  const { locale } = useI18n()
onMounted(() => {
  const language = localStorage.getItem('language');
  if (!language) {
    localStorage.setItem('language', 'en');
    locale.value = 'en';
    return;
  }
  locale.value = language;
})

</script>
