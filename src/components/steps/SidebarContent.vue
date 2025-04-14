<template>
  <div class="flex flex-col text-sm">
    <div class="mb-3 flex flex-col gap-2">
      <SubtitleSidebar
        :label="t(`steps.1.title`)"
        :icon="steps[0].icon"
        :step="steps[0].step"
        @click="every_click = false"
      />
      <div>
        {{ t('side_menu.1.subtitle_1') }}:
        <span class="font-semibold">{{ final_object.a_ufp.items.length }}</span>
      </div>
      <div>
        {{ t('side_menu.1.subtitle_2') }}: <span class="font-semibold">{{ final_object.a_ufp.result <= 0 ? 'N/D' : final_object.a_ufp.result }} </span>
      </div>
      <hr />
    </div>
    <div class="mb-3 flex flex-col gap-2">
      <SubtitleSidebar
        :label="t(`steps.2.title`)"
        :icon="steps[1].icon"
        :step="steps[1].step"
        @click="every_click = false"
      />
      <div>
        {{ t('side_menu.2.subtitle_1') }}:
        <span class="font-semibold">{{ final_object.b_afp.items.length }}</span>
      </div>
      <div>
        {{ t('side_menu.2.subtitle_2') }}: <span class="font-semibold">{{ final_object.b_afp.sum }}</span>
      </div>
      <div>
        {{ t('side_menu.2.subtitle_3') }}: <span class="font-semibold">{{ final_object.b_afp.result.toFixed(2) }}</span>
      </div>
      <hr />
    </div>
    <div class="mb-3 flex flex-col gap-2">
      <SubtitleSidebar :label="t(`steps.3.title`)" :icon="steps[2].icon" :step="steps[2].step" @click="every_click = false" />
      <div>
        {{ t('side_menu.3.subtitle_1') }}:
        <span class="font-semibold">{{ final_object.c_ldc.selected_language || 'Ninguno' }}</span>
      </div>
      <div>
        {{ t('side_menu.3.subtitle_2') }}:
        <span class="font-semibold">{{ +final_object.c_ldc.lines_of_code.toFixed(1) || 'N/D' }}</span>
      </div>
      <hr />
    </div>
    <div class="mb-3 flex flex-col gap-2">
      <SubtitleSidebar :label="t(`steps.4.title`)" :icon="steps[3].icon" :step="steps[3].step" @click="every_click = false" />
      <div>
        {{ t('side_menu.4.subtitle_1') }}:
        <span class="font-semibold">{{ final_object.d_cocomo.selected_model }}</span>
      </div>
      <div>
        {{ t('side_menu.4.subtitle_2') }}:
        <span class="font-semibold">{{ +final_object.d_cocomo.effort_estimation || 'N/D' }}</span>
      </div>
      <div>
        {{ t('side_menu.4.subtitle_3') }}:: <span class="font-semibold">{{ +final_object.d_cocomo.time_estimation || 'N/D' }}</span>
      </div>
      <div>
        {{ t('side_menu.4.subtitle_4') }}:: <span class="font-semibold">{{ +final_object.d_cocomo.team_size_calculation || 'N/D' }}</span>
      </div>
      <hr />
    </div>
    <div>
      <SubtitleSidebar :label="t(`steps.5.title`)" :icon="steps[4].icon" :step="steps[4].step" @click="every_click = false" />
      <div>
        {{ t('side_menu.5.subtitle_1') }}: <span class="font-semibold">{{ +final_object.e_cost ? `${final_object.e_cost}$` : 'N/D' }}</span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useProcessStore } from '@/store/process.store.ts'
import { storeToRefs } from 'pinia'
import SubtitleSidebar from '@/components/steps/SubtitleSidebar.vue'
import { steps } from '@/data/sample'
import { useI18n } from 'vue-i18n'
const { t } = useI18n()

const { final_object } = storeToRefs(useProcessStore())
const every_click = defineModel('every_click', { type: Boolean, required: false })
</script>
