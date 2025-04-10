<template>
  <header
    class="p-4 border-b border-b-gray-400 flex flex-row justify-between w-full sticky top-0 bg-white z-1"
  >
    <div class="content-center block md:hidden w-6" >
      <MenuIcon @click="is_open = true" v-if="route.name === 'create' || route.name === 'edit'" />
    </div>
    <router-link to="/">
      <div class="font-bold hover:bg-gray-200 p-1 text-xl rounded-md">VUE COCOMO</div>
    </router-link>
<!--    <div class="content-center">-->
<!--      <LocalIcon />-->
<!--    </div>-->
    <div></div>
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
import { useRoute } from 'vue-router'
const route = useRoute()

const is_open = ref(false)
</script>
