<template>
  <LoaderCircle class="animate-spin self-center m-8" v-if="is_loading" />
  <div class="flex-col flex gap-4" v-else>
    <RouterLink to="/create">

      <Button class="w-fit">{{ g('main.create_button') }}</Button>
    </RouterLink>
    <div v-if="items.length > 0" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      <ItemCard v-for="(item, index) in items" :key="index" :item="item" />
    </div>
    <div v-else>
        <i18n-t keypath="main.empty.span" tag="span" scope="global" class="italic">
        <RouterLink to="create" class="font-semibold">{{ g('main.empty.hyper') }}</RouterLink>.
        </i18n-t>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref, inject } from 'vue'
import ItemCard from '@/components/ItemCard.vue'
import { Button } from '@/components/ui/button'
import type { Item } from '@/data/interfaces'
import { LoaderCircle } from 'lucide-vue-next'
import { DatabaseService } from '@/data/classes'
import { useI18n } from 'vue-i18n'

const { t: g } = useI18n()
const items = ref<Item[]>([])
const is_loading = ref(true)



onMounted(async () => {
  is_loading.value = true
  const database = inject<DatabaseService>('database')!

  items.value = items.value = await database
    .readAll()
    .finally(async () => (is_loading.value = false))
})

document.title = g('main.title')
</script>
