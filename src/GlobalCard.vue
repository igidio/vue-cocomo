<template>
  <Card>
    <CardHeader>
      <CardTitle v-if="label">{{ label }}</CardTitle>
      <CardDescription v-if="description">{{ description }}</CardDescription>
    </CardHeader>
    <CardContent>
      <slot name="default"/>
    </CardContent>
    <CardFooter>
      <slot name="footer"/>
    </CardFooter>
  </Card>
</template>

<script setup lang="ts">
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'

defineProps<{
  label?: string
  description?: string
}>()
</script>
