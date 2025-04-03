<template>
  <Accordion
    type="single"
    collapsible
    class="bg-gray-50 p-2 rounded-md border border-gray-300"
  >
    <AccordionItem value="item-1">
      <AccordionTrigger>{{ trigger }}</AccordionTrigger>
      <AccordionContent>
        <slot/>
      </AccordionContent>
    </AccordionItem>
  </Accordion>
</template>

<script setup lang="ts">
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'

defineProps<{
  trigger: string
}>()
</script>
