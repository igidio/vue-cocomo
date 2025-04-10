<template>
  <header
    class="p-4 border-b border-b-gray-400 flex flex-row justify-between w-full sticky top-0 bg-white z-1"
  >
    <div class="content-center">
      <MenuIcon @click="is_open = true" />
    </div>
    <router-link to="/">
      <div class="font-bold hover:bg-gray-200 p-1 text-xl rounded-md">VUE COCOMO</div>
    </router-link>
    <div class="content-center">
      <LocalIcon />
    </div>
  </header>
  <GlobalSheet v-model="is_open" title="Resumen">
    <SidebarContent v-model:every_click="is_open" />
  </GlobalSheet>
</template>
<script setup lang="ts">
import LocalIcon from '@/components/icon/LocalIcon.vue'
import GlobalSheet from '@/components/GlobalSheet.vue'
import SidebarContent from '@/components/steps/SidebarContent.vue'
import MenuIcon from '@/components/icon/MenuIcon.vue'
import { ref } from 'vue'

const is_open = ref(false)
</script>
