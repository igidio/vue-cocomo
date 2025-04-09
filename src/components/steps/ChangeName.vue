<template>
  <div class="flex flex-col">
    <div class="flex flex-row mb-4">
      <Button class="mr-2" variant="outline" @click="is_open = true">
        <Pen />
      </Button>
      <span class="font-bold text-3xl inline-block overflow-hidden text-ellipsis">{{ name }}</span>
    </div>
    <hr />
    <GlobalDrawer label="Cambiar nombre de proyecto" v-model="is_open">
      <template v-slot:trigger></template>
      <template v-slot:default>
        <div class="flex flex-col gap-4">
          <Label>Nombre</Label>
          <Input type="text" class="w-full" v-model="new_name" />
          <p class="text-xs">Cantidad máxima de carácteres: 40</p>
        </div>
      </template>
      <template v-slot:footer>
        <Button variant="outline">Cancelar</Button>
        <Button @click="on_submit" :disabled="is_disabled">Guardar</Button>
      </template>
    </GlobalDrawer>
  </div>
</template>

<script setup lang="ts">
import { Button } from '@/components/ui/button'
import { Pen } from 'lucide-vue-next'
import GlobalDrawer from '@/components/GlobalDrawer.vue'
import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'
import { storeToRefs } from 'pinia'
import { useProcessStore } from '@/store/process.store.ts'
import { computed, ref } from 'vue'

const { name } = storeToRefs(useProcessStore())
const new_name = ref(name.value)
const max_chars = 50

const is_disabled = computed(() => {
  return !new_name.value || new_name.value.length > max_chars
})

const is_open = ref(false)
const on_submit = () => {
  name.value = new_name.value
  is_open.value = false
}
</script>
