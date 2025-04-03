<template>
  <Accordion
    type="single"
    collapsible
    class="p-2 rounded-md"
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
