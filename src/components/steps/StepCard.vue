<template>
  <Card class="grow p-4 transition-all h-full">
    <div class="flex flex-col justify-between gap-2 mb-4 h-full">
      <div>
        <div class="flex flex-row justify-between items-center">
          <span class="font-bold text-2xl">{{ title }}</span>
          <GlobalDrawer :label="t('ui.description')">
            <template #trigger>
              <Button variant="outline">
                <Info />
              </Button>
            </template>
            <article class="prose prose-slate max-w-none text-sm h-64 overflow-y-scroll">
              <div v-html="md.render(content)"></div>
            </article>
            <template #footer>
              <DrawerClose>
                <Button variant="outline">{{ t('ui.close') }}</Button>
              </DrawerClose>
            </template>
          </GlobalDrawer>
        </div>
        <hr class="my-2" />
        <slot name="top" />
      </div>
      <slot name="bottom" />
    </div>
  </Card>
</template>
<script setup lang="ts">
import { Card } from '@/components/ui/card'
import { DrawerClose } from '@/components/ui/drawer'
import { Info } from 'lucide-vue-next'
import { Button } from '@/components/ui/button'
import GlobalDrawer from '@/components/GlobalDrawer.vue'

import markdownit from 'markdown-it'
import mathjax3 from 'markdown-it-mathjax3'
const md = markdownit()
import { useI18n } from 'vue-i18n'
md.use(mathjax3)
const { t } = useI18n()

defineProps<{
  title: string
  content: string
}>()
</script>
