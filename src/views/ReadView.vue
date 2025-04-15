<template>
  <DeleteDrawer v-model="is_open"/>
  <LoaderCircle class="animate-spin self-center m-8" v-if="is_loading" />
  <div class="content-center bg-white" v-if="project._id && !is_loading">
    <div class="flex flex-col mb-4">
      <div class="flex flex-row mb-4">
        <span class="font-bold text-3xl inline-block overflow-hidden text-ellipsis">{{
          project.name
        }}</span>
      </div>
    </div>

    <div class="flex flex-row justify-between border-b pb-4 mb-6">
      <div class="">
        <span class="font-bold text-gray-800">{{ t("read.header.title") }}</span>
        <p class="text-sm text-gray-500">{{ t("read.header.id") }}: {{ project._id }}</p>
        <p class="text-sm text-gray-500">{{ t("read.header.date") }}: {{ formatDate(project.date.toString()) }}</p>
      </div>
      <div class="flex flex-col gap-2">
        <RouterLink
          :to="{
            name: 'edit',
            params: {
              id: project._id,
            },
          }"
        >
          <Button size="sm" variant="outline">
            <Pen />
            Modificar
          </Button>
        </RouterLink>
        <Button size="sm" variant="outline" @click="is_open = true">
          <Trash2 />
          Eliminar
        </Button>
      </div>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
      <Card
        v-for="(resume, index) in [
          {
            label: t('read.cards.1'),
            value: project.a_ufp.result,
          },
          {
            label: t('read.cards.2'),
            value: project.b_afp.result.toFixed(2),
          },
          {
            label: t('read.cards.3'),
            value: project.e_cost,
          },
        ]"
        :key="index"
        class="flex flex-col gap-0 px-4"
      >
        <h2 class="text-sm font-medium text-gray-500">{{ resume.label }}</h2>
        <p class="text-xl font-bold">{{ resume.value }}</p>
      </Card>
    </div>

    <GlobalTabs
      :list="[
        { value: 'ufp', label: t('read.tabs.ufp.title') },
        { value: 'afp', label: t('read.tabs.afp.title') },
        { value: 'info', label: t('read.tabs.info.title') },
        { value: 'costs', label: t('read.tabs.costs.title') },
      ]"
    >
      <template #ufp>
        <UfpSection :project="project"></UfpSection>
      </template>
      <template #afp>
        <AfpSection :project="project"></AfpSection>
      </template>
      <template #info>
        <InfoSection :project="project"></InfoSection>
      </template>
      <template #costs>
        <CostsSection :project="project"></CostsSection>
      </template>
    </GlobalTabs>
  </div>
</template>

<script setup lang="ts">
import type { Item } from '@/data/interfaces'
import { useRoute, useRouter } from 'vue-router'
import { inject, onMounted, ref, type Ref } from 'vue'
import { Button } from '@/components/ui/button'
import GlobalTabs from '@/components/GlobalTabs.vue'
import UfpSection from '@/components/read/UfpSection.vue'
import AfpSection from '@/components/read/AfpSection.vue'
import InfoSection from '@/components/read/InfoSection.vue'
import CostsSection from '@/components/read/CostsSection.vue'
import { Trash2, Pen, LoaderCircle } from 'lucide-vue-next'
import { Card } from '@/components/ui/card'
import { formatDate } from '@/data/helpers'
import DeleteDrawer from '@/components/read/DeleteDrawer.vue'
import { toast } from 'vue-sonner'
import { DatabaseService } from '@/data/classes'
import { useI18n } from 'vue-i18n'

const is_loading = ref(true)
const router = useRouter()
const project: Ref<Item> = ref({} as Item)
const { t } = useI18n()

onMounted(async () => {
  is_loading.value = true
  const database = inject<DatabaseService>('database')!

  await database
    .read(useRoute().params.id as string)
    .then((response: Item) => {
      project.value = response
    })
    .catch(async () => {
      toast('Error al obtener el proyecto', {
        description: `El proyecto con el identificador que has introducido no es válido`,
      })
      return await router.push({
        name: 'home',
      })
    })
    .finally(() => {
      is_loading.value = false
    })
})

const is_open = ref(false)
</script>
