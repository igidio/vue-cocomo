<template>
  <header
    class="p-4 border-b border-b-gray-400 flex flex-row justify-between w-full sticky top-0 bg-white z-1"
  >
    <div class="content-center block md:hidden w-6">
      <MenuIcon @click="is_open = true" v-if="route.name === 'create' || route.name === 'edit'" />
    </div>
    <router-link to="/">
      <div class="font-bold hover:bg-gray-200 p-1 text-xl rounded-md">VUE COCOMO</div>
    </router-link>
    <div class="content-center" @click="toggle_language()">
      <Button variant="ghost" class="font-bold"> {{ locale == 'en' ? 'ES' : 'EN' }} </Button>
    </div>
  </header>
  <GlobalSheet v-model="is_open" :title="t('side_menu.title')">
    <SidebarContent v-model:every_click="is_open" />
  </GlobalSheet>
</template>
<script setup lang="ts">
import { Button } from '@/components/ui/button'
import GlobalSheet from '@/components/GlobalSheet.vue'
import SidebarContent from '@/components/steps/SidebarContent.vue'
import MenuIcon from '@/components/icon/MenuIcon.vue'
import { ref } from 'vue'
import { useRoute } from 'vue-router'
import { useI18n } from 'vue-i18n'

const { t, locale } = useI18n()
const route = useRoute()

const is_open = ref(false)

const toggle_language = () => {
  if (locale.value === 'en') {
    locale.value = 'es'
    return
  }
  locale.value = 'en'
}
</script>
