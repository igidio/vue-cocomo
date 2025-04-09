<template>
  <StepCard :title="steps[4].title" :content="steps[3].content">
    <template #top>
      <div
        class="flex flex-col justify-items-center content-center gap-4 justify-center text-center"
      >
        <div
          class="flex flex-row justify-center bg-gray-50 p-4 rounded-lg gap-6 border border-gray-200 w-full self-center"
        >
          <span class="text-2xl font-black" v-if="!is_disabled">{{ e_step }} $</span>
          <div class="flex flex-col gap-1" v-else>
            <IconItem
              v-if="final_object.a_ufp.items.length === 0"
              label="Debe introducir las funciones para el cálculo de PFSA."
              :icon="CircleAlert"
            />
            <IconItem
              v-if="final_object.b_afp.items.length === 0"
              label="Debe introducir las funciones para el cálculo de PFA."
              :icon="CircleAlert"
            />
            <IconItem
              v-if="!final_object.c_ldc.lines_of_code"
              label="No hay resultado para la conversión de líneas de código."
              :icon="CircleAlert"
            />
            <IconItem
              v-if="!final_object.d_cocomo.team_size_calculation"
              label="No hay valor para la aplicación de COCOMO."
              :icon="CircleAlert"
            />
          </div>
        </div>
        <Button @click="create" :disabled="is_disabled || is_loading"
          >Guardar en la base de datos</Button
        >
      </div>
    </template>
  </StepCard>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'
import { toast } from 'vue-sonner'
import { useRouter } from 'vue-router'
import { storeToRefs } from 'pinia'
import { useProcessStore } from '@/store/process.store.ts'
import { steps } from '@/data/sample'
import StepCard from '@/components/steps/StepCard.vue'
import { Button } from '@/components/ui/button'
import { CircleAlert } from 'lucide-vue-next'
import IconItem from '@/components/steps/IconItem.vue'
const { e_step, final_object } = storeToRefs(useProcessStore())
const { database } = useProcessStore()
const router = useRouter()

const is_loading = ref(false)
const create = async () => {
  is_loading.value = true
  database
    .create(final_object.value)
    .then(async (res) => {
      await router.replace({
        name: 'home',
      })
      toast('Proyecto creado exitosamente', {
        description: `El proyecto ha sido creado con el id '${res}'.`,
      })
    })
    .catch((error) => alert(error))
    .finally(() => {
      is_loading.value = false
    })
}
const is_disabled = computed(() => {
  return (
    final_object.value.a_ufp.items.length === 0 ||
    final_object.value.b_afp.items.length === 0 ||
    !final_object.value.c_ldc.lines_of_code ||
    !final_object.value.d_cocomo.team_size_calculation
  )
})
</script>
