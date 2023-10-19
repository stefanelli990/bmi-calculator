<template>
    <div class="inline-block">
        <div class="flex items-center space-x-2 my-4 cursor-pointer select-none" @click="$emit('toggle')">
        <Icon icon="fa6-solid:arrows-rotate" class="text-primaryColor" /><span class="font-medium">{{ label }}</span>
    </div>
    </div>
</template>

<script setup>
import { Icon } from '@iconify/vue';

const emit = defineEmits(['toggle'])
const props = defineProps(['label'])
</script>